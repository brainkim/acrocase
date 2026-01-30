# eslint-plugin-acrocase

ESLint plugin to enforce [ACROCase](https://acrocase.dev) naming conventions.

**A**cronyms **C**onsistently **R**etain **O**riginal **Case**

## Installation

```bash
npm install eslint-plugin-acrocase --save-dev
```

## Usage

Add `acrocase` to the plugins section of your ESLint configuration:

```json
{
  "plugins": ["acrocase"],
  "rules": {
    "acrocase/acrocase": "error"
  }
}
```

Or use the recommended config:

```json
{
  "extends": ["plugin:acrocase/recommended"]
}
```

## Rules

### acrocase/acrocase

Enforces that acronyms retain their original casing in identifiers.

#### ✅ Correct

```js
const imageURL = "https://example.com/img.png";
const userId = 12345;  // "Id" is an exception
element.innerHTML = "<p>Hello</p>";
data.toJSON();

class HTTPClient {}
interface APIResponse {}
```

#### ❌ Incorrect

```js
const imageUrl = "https://example.com/img.png";  // Should be imageURL
const userID = 12345;  // Should be userId (web platform convention)
data.toJson();  // Should be toJSON

class HttpClient {}  // Should be HTTPClient
interface ApiResponse {}  // Should be APIResponse
```

### Options

#### `ignoredIdentifiers`

Array of identifier names to ignore:

```json
{
  "rules": {
    "acrocase/acrocase": ["error", {
      "ignoredIdentifiers": ["legacyApiHandler"]
    }]
  }
}
```

## Acronyms

The plugin recognizes common web platform acronyms:

- API, ASCII, CORS, CSS, DOM, EOF, GPU, HTML, HTTP, HTTPS
- JSON, MIME, PDF, PNG, RGB, RGBA, RTC, SQL, SSL, SVG
- TCP, TLS, UDP, UI, URI, URL, USB, UTF, UUID, WebGL, XHR, XML, XSS

### Exceptions

Some abbreviations are treated as words per web platform convention:

- **Id** (not ID) - `getElementById`, `userId`
- **Intl** (not INTL) - `Intl.DateTimeFormat`

## Fixable

This rule is auto-fixable. Run ESLint with `--fix` to automatically correct violations.

## License

MIT
