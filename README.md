# eslint-plugin-acrocase

ESLint plugin to enforce [ACROCase](https://acrocase.org) naming conventions.

**A**cronyms **C**onsistently **R**etain **O**riginal **Case**

## Installation

```bash
npm install eslint-plugin-acrocase --save-dev
```

## Usage

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

## What it does

The rule enforces that known acronyms retain their uppercase form in camelCase and PascalCase identifiers. It also catches abbreviations that are commonly mistaken for acronyms (like `ID` instead of `Id`).

### Correct

```js
const imageURL = "https://example.com/img.png";
const userId = 12345;
element.innerHTML = "<p>Hello</p>";
data.toJSON();

class HTTPClient {}
class APIResponse {}
```

### Incorrect

```js
const imageUrl = "https://example.com/img.png";  // imageURL
const userID = 12345;                             // userId
data.toJson();                                    // toJSON

class HttpClient {}   // HTTPClient
class ApiResponse {}  // APIResponse
```

## Options

### `acronyms`

Add project-specific acronyms on top of the built-in dictionary:

```json
{
  "acrocase/acrocase": ["error", {
    "acronyms": ["GCP", "NATS"]
  }]
}
```

## Auto-fix

The rule is fixable. Run `eslint --fix` to correct violations automatically.

## Dictionary

The plugin ships with a [dictionary](https://github.com/brainkim/acrocase/blob/main/dictionary.json) of common acronyms sourced from web platform APIs and general programming. It includes exceptions for abbreviations like `Id` and `Intl` that follow normal casing despite looking like acronyms.

## License

MIT
