/**
 * @fileoverview Enforce ACROCase naming conventions for acronyms
 */

const dictionary = require("../../dictionary.json");

// Build lookup maps from dictionary
const acronyms = Object.keys(dictionary.acronyms);
const exceptions = dictionary.exceptions;

// Build regex patterns for detecting incorrectly cased acronyms
// For each acronym like "URL", we want to detect "Url" (incorrect titlecase)
function buildIncorrectPatterns() {
  const patterns = [];

  for (const acronym of acronyms) {
    // Titlecase version (incorrect): "Url" instead of "URL"
    const titleCase = acronym.charAt(0).toUpperCase() + acronym.slice(1).toLowerCase();

    // Only add if titlecase differs from the acronym
    if (titleCase !== acronym) {
      patterns.push({
        // Match titlecase version NOT at start of identifier (where it would be lowercase anyway)
        // e.g., "parseUrl" should be "parseURL"
        pattern: new RegExp(`[a-z]${titleCase}(?=[A-Z]|$|[^a-zA-Z])`, "g"),
        acronym,
        titleCase,
        type: "mid-or-end",
      });
    }
  }

  return patterns;
}

// Check for exception violations (e.g., "ID" instead of "Id")
function buildExceptionPatterns() {
  const patterns = [];

  for (const [correct, data] of Object.entries(exceptions)) {
    const incorrect = data.instead_of;

    // Match the incorrect all-caps version
    // e.g., "userID" should be "userId"
    patterns.push({
      pattern: new RegExp(`${incorrect}(?=[A-Z]|$|[^a-zA-Z])`, "g"),
      incorrect,
      correct,
      type: "exception",
    });
  }

  return patterns;
}

const incorrectPatterns = buildIncorrectPatterns();
const exceptionPatterns = buildExceptionPatterns();

/**
 * Check if identifier violates ACROCase rules
 * @param {string} name - The identifier name
 * @returns {Array} Array of violation objects
 */
function checkIdentifier(name) {
  const violations = [];

  // Check for incorrectly cased acronyms (e.g., "parseUrl" should be "parseURL")
  for (const { pattern, acronym, titleCase } of incorrectPatterns) {
    pattern.lastIndex = 0;
    let match;
    while ((match = pattern.exec(name)) !== null) {
      violations.push({
        type: "acronym",
        found: titleCase,
        expected: acronym,
        index: match.index + 1, // +1 to skip the preceding lowercase letter
      });
    }
  }

  // Check for exception violations (e.g., "userID" should be "userId")
  for (const { pattern, incorrect, correct } of exceptionPatterns) {
    pattern.lastIndex = 0;
    let match;
    while ((match = pattern.exec(name)) !== null) {
      violations.push({
        type: "exception",
        found: incorrect,
        expected: correct,
        index: match.index,
      });
    }
  }

  return violations;
}

/**
 * Generate the corrected identifier name
 * @param {string} name - The original identifier name
 * @param {Array} violations - Array of violations
 * @returns {string} The corrected name
 */
function getCorrectedName(name, violations) {
  let corrected = name;

  // Sort violations by index in reverse order so we can replace from end to start
  const sorted = [...violations].sort((a, b) => b.index - a.index);

  for (const violation of sorted) {
    const before = corrected.slice(0, violation.index);
    const after = corrected.slice(violation.index + violation.found.length);
    corrected = before + violation.expected + after;
  }

  return corrected;
}

module.exports = {
  meta: {
    type: "suggestion",
    docs: {
      description: "Enforce ACROCase naming conventions for acronyms",
      category: "Stylistic Issues",
      recommended: true,
      url: "https://acrocase.dev",
    },
    fixable: "code",
    schema: [
      {
        type: "object",
        properties: {
          ignoredIdentifiers: {
            type: "array",
            items: { type: "string" },
            description: "Identifiers to ignore",
          },
        },
        additionalProperties: false,
      },
    ],
    messages: {
      incorrectAcronym:
        "Acronym '{{found}}' should be '{{expected}}' in '{{name}}'. Use '{{corrected}}' instead.",
      incorrectException:
        "'{{found}}' should be '{{expected}}' (web platform convention) in '{{name}}'. Use '{{corrected}}' instead.",
    },
  },

  create(context) {
    const options = context.options[0] || {};
    const ignoredIdentifiers = new Set(options.ignoredIdentifiers || []);

    function checkNode(node) {
      const name = node.name;

      // Skip ignored identifiers
      if (ignoredIdentifiers.has(name)) {
        return;
      }

      // Skip if it's a property access on an external object (e.g., console.log)
      // We only want to check identifiers the user defines

      const violations = checkIdentifier(name);

      if (violations.length === 0) {
        return;
      }

      const corrected = getCorrectedName(name, violations);

      for (const violation of violations) {
        context.report({
          node,
          messageId:
            violation.type === "exception"
              ? "incorrectException"
              : "incorrectAcronym",
          data: {
            found: violation.found,
            expected: violation.expected,
            name,
            corrected,
          },
          fix(fixer) {
            return fixer.replaceText(node, corrected);
          },
        });
      }
    }

    return {
      Identifier(node) {
        // Skip property accesses like obj.property (we don't control external APIs)
        if (
          node.parent.type === "MemberExpression" &&
          node.parent.property === node &&
          !node.parent.computed
        ) {
          // But DO check if it's a property being defined (e.g., { parseUrl: ... })
          if (
            node.parent.parent.type !== "Property" ||
            node.parent.parent.key !== node.parent
          ) {
            return;
          }
        }

        checkNode(node);
      },
    };
  },
};
