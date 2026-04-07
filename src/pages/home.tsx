export function HomePage() {
	return (
		<html lang="en">
			<head>
				<meta charset="UTF-8" />
				<meta name="viewport" content="width=device-width, initial-scale=1.0" />
				<title>ACROCase - Acronyms Consistently Retain Original Case</title>
				<meta
					name="description"
					content="A naming convention that preserves acronym casing in camelCase and PascalCase identifiers."
				/>
				<style>{`
					* { box-sizing: border-box; margin: 0; padding: 0; }
					body {
						font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
						line-height: 1.7;
						color: #1a1a1a;
						background: #fafafa;
					}
					main {
						max-width: 720px;
						margin: 0 auto;
						padding: 3rem 1.5rem;
					}
					h1 {
						font-size: 2.5rem;
						margin-bottom: 0.5rem;
						color: #111;
					}
					h2 {
						font-size: 1.5rem;
						margin: 2.5rem 0 1rem;
						color: #222;
						border-bottom: 2px solid #e5e5e5;
						padding-bottom: 0.5rem;
					}
					h3 {
						font-size: 1.1rem;
						margin: 1.5rem 0 0.75rem;
						color: #333;
					}
					p {
						margin-bottom: 1rem;
					}
					.tagline {
						font-size: 1.25rem;
						color: #666;
						margin-bottom: 2rem;
					}
					code {
						background: #f0f0f0;
						padding: 0.15rem 0.4rem;
						border-radius: 4px;
						font-family: 'SF Mono', Consolas, 'Liberation Mono', Menlo, monospace;
						font-size: 0.9em;
					}
					pre {
						background: #f5f5f5;
						padding: 1rem;
						border-radius: 8px;
						overflow-x: auto;
						margin: 1rem 0;
						border: 1px solid #e0e0e0;
					}
					pre code {
						background: none;
						padding: 0;
					}
					.comparison {
						display: grid;
						grid-template-columns: 1fr 1fr;
						gap: 1rem;
						margin: 1.5rem 0;
					}
					.comparison > div {
						padding: 1rem;
						border-radius: 8px;
					}
					.do {
						background: #e8f5e9;
						border: 1px solid #a5d6a7;
					}
					.do h4 {
						color: #2e7d32;
						margin-bottom: 0.5rem;
					}
					.dont {
						background: #ffebee;
						border: 1px solid #ef9a9a;
					}
					.dont h4 {
						color: #c62828;
						margin-bottom: 0.5rem;
					}
					ul, ol {
						margin: 1rem 0;
						padding-left: 1.5rem;
					}
					li {
						margin-bottom: 0.5rem;
					}
					a {
						color: #1976d2;
						text-decoration: none;
					}
					a:hover {
						text-decoration: underline;
					}
					.examples {
						background: #fff;
						border: 1px solid #e0e0e0;
						border-radius: 8px;
						padding: 1rem;
						margin: 1rem 0;
					}
					.examples table {
						width: 100%;
						border-collapse: collapse;
					}
					.examples th, .examples td {
						text-align: left;
						padding: 0.5rem;
						border-bottom: 1px solid #eee;
					}
					.examples th {
						font-weight: 600;
						color: #555;
					}
					.examples tr:last-child td {
						border-bottom: none;
					}
					.note {
						background: #fff3e0;
						border-left: 4px solid #ff9800;
						padding: 1rem;
						margin: 1rem 0;
						border-radius: 0 8px 8px 0;
					}
					footer {
						margin-top: 4rem;
						padding-top: 2rem;
						border-top: 1px solid #e5e5e5;
						color: #666;
						font-size: 0.9rem;
					}
					@media (max-width: 600px) {
						.comparison {
							grid-template-columns: 1fr;
						}
						h1 {
							font-size: 2rem;
						}
					}
				`}</style>
			</head>
			<body>
				<main>
					<h1>ACROCase</h1>
					<p class="tagline">
						<strong>A</strong>cronyms <strong>C</strong>onsistently <strong>R</strong>etain <strong>O</strong>riginal <strong>Case</strong>
					</p>

					<h2>The Problem</h2>
					<p>
						How should acronyms like HTTP, URL, and JSON appear in camelCase and PascalCase identifiers?
					</p>
					<div class="comparison">
						<div class="do">
							<h4>acroCase</h4>
							<code>httpURL</code>
						</div>
						<div class="dont">
							<h4>Lowercase acronyms</h4>
							<code>httpUrl</code>
						</div>
					</div>

					<h2>The Rule</h2>
					<p>
						<strong>Acronyms are acronyms, not words.</strong> Preserve their uppercase form. This matches the web platform and keeps acronyms recognizable.
					</p>

					<div class="examples">
						<table>
							<thead>
								<tr>
									<th>Acronym</th>
									<th>acroCase</th>
									<th>UpperACROCase</th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>HTTP</td>
									<td><code>httpRequest</code></td>
									<td><code>HTTPRequest</code></td>
								</tr>
								<tr>
									<td>URL</td>
									<td><code>imageURL</code>, <code>urlString</code></td>
									<td><code>URLParser</code></td>
								</tr>
								<tr>
									<td>XML</td>
									<td><code>xmlDocument</code></td>
									<td><code>XMLDocument</code></td>
								</tr>
								<tr>
									<td>API</td>
									<td><code>restAPI</code>, <code>apiKey</code></td>
									<td><code>APIKey</code></td>
								</tr>
								<tr>
									<td>HTML</td>
									<td><code>innerHTML</code>, <code>htmlString</code></td>
									<td><code>HTMLElement</code></td>
								</tr>
								<tr>
									<td>JSON</td>
									<td><code>toJSON</code>, <code>jsonString</code></td>
									<td><code>JSONParser</code></td>
								</tr>
							</tbody>
						</table>
					</div>

					<div class="note">
						<strong>Note:</strong> When an acronym starts a camelCase identifier, it's lowercase (<code>urlString</code>). When it appears elsewhere, it's uppercase (<code>imageURL</code>).
					</div>

					<h2>Why ACROCase?</h2>

					<h3>1. Acronyms Stay Recognizable</h3>
					<p>
						Acronyms are abbreviations with established uppercase forms. <code>URL</code> is instantly recognizable; <code>Url</code> looks like a misspelling.
					</p>
					<div class="comparison">
						<div class="do">
							<h4>Recognizable</h4>
							<code>parseURL</code>, <code>toJSON</code>
						</div>
						<div class="dont">
							<h4>Looks wrong</h4>
							<code>parseUrl</code>, <code>toJson</code>
						</div>
					</div>

					<h3>2. Matches the Web Platform</h3>
					<p>
						The DOM and web APIs consistently use uppercase acronyms:
					</p>
					<ul>
						<li><code>innerHTML</code>, <code>outerHTML</code></li>
						<li><code>toJSON</code></li>
						<li><code>encodeURIComponent</code>, <code>decodeURI</code></li>
						<li><code>XMLDocument</code>, <code>HTMLElement</code></li>
					</ul>

					<h3>3. Acronyms Are Not Words</h3>
					<p>
						Treating acronyms as words loses information. <code>URL</code> is an acronym; <code>Url</code> is nothing.
					</p>
					<div class="comparison">
						<div class="do">
							<h4>Preserved</h4>
							<code>parseURL</code>, <code>HTMLElement</code>
						</div>
						<div class="dont">
							<h4>Lost</h4>
							<code>parseUrl</code>, <code>HtmlElement</code>
						</div>
					</div>

					<h2>Web Platform Examples</h2>
					<p>
						The web platform preserves acronym casing:
					</p>

					<div class="examples">
						<table>
							<thead>
								<tr>
									<th>API</th>
									<th>Acronym</th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td><code>innerHTML</code>, <code>outerHTML</code></td>
									<td>HTML</td>
								</tr>
								<tr>
									<td><code>toJSON</code></td>
									<td>JSON</td>
								</tr>
								<tr>
									<td><code>encodeURIComponent</code>, <code>decodeURI</code></td>
									<td>URI</td>
								</tr>
								<tr>
									<td><code>HTMLElement</code>, <code>HTMLCollection</code></td>
									<td>HTML</td>
								</tr>
								<tr>
									<td><code>XMLDocument</code>, <code>XMLSerializer</code></td>
									<td>XML</td>
								</tr>
								<tr>
									<td><code>CSSStyleSheet</code>, <code>CSS.supports()</code></td>
									<td>CSS</td>
								</tr>
							</tbody>
						</table>
					</div>

					<h2>Exceptions</h2>
					<p>
						The web platform treats a few abbreviations as words rather than acronyms:
					</p>

					<h3>"Id" not "ID"</h3>
					<p>
						The DOM uses <code>getElementById</code>, <code>elementId</code>, and <code>clientId</code>.
					</p>
					<div class="comparison">
						<div class="do">
							<h4>Web platform style</h4>
							<code>userId</code>, <code>getElementById</code>
						</div>
						<div class="dont">
							<h4>Inconsistent</h4>
							<code>userID</code>, <code>getElementByID</code>
						</div>
					</div>

					<h3>"Intl" not "INTL"</h3>
					<p>
						The Internationalization API uses <code>Intl</code>, not <code>INTL</code>.
					</p>
					<div class="comparison">
						<div class="do">
							<h4>Web platform style</h4>
							<code>Intl.DateTimeFormat</code>
						</div>
						<div class="dont">
							<h4>Inconsistent</h4>
							<code>INTL.DateTimeFormat</code>
						</div>
					</div>

					<h2>Avoid Chaining Acronyms</h2>
					<p>
						Don't put acronyms next to each other. The result is always hard to read:
					</p>
					<div class="comparison">
						<div class="do">
							<h4>Restructured</h4>
							<code>HTMLParser</code>, <code>parseJSON</code>
						</div>
						<div class="dont">
							<h4>Chained acronyms</h4>
							<code>XMLHTTPRequest</code>, <code>ABORTURI</code>
						</div>
					</div>
					<p>
						<code>XMLHttpRequest</code> exists because of a poor naming choice. When naming new code, restructure to avoid adjacent acronyms entirely.
					</p>

					<h2>acroCase vs UpperACROCase</h2>
					<p>
						Just like camelCase and UpperCamelCase (PascalCase), ACROCase has two variants:
					</p>
					<div class="examples">
						<table>
							<thead>
								<tr>
									<th>Style</th>
									<th>First word</th>
									<th>Example</th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td><strong>acroCase</strong></td>
									<td>lowercase</td>
									<td><code>parseURL</code>, <code>toJSON</code>, <code>innerHTML</code></td>
								</tr>
								<tr>
									<td><strong>UpperACROCase</strong></td>
									<td>capitalized</td>
									<td><code>URLParser</code>, <code>JSONResponse</code>, <code>HTMLElement</code></td>
								</tr>
							</tbody>
						</table>
					</div>
					<p>
						When an acronym starts an identifier, its casing depends on the style:
					</p>
					<div class="examples">
						<table>
							<thead>
								<tr>
									<th>Position</th>
									<th>acroCase</th>
									<th>UpperACROCase</th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>Start</td>
									<td><code>urlString</code></td>
									<td><code>URLString</code></td>
								</tr>
								<tr>
									<td>Middle/End</td>
									<td><code>imageURL</code></td>
									<td><code>ImageURL</code></td>
								</tr>
							</tbody>
						</table>
					</div>

					<h2>ESLint Plugin</h2>
					<p>
						Enforce ACROCase with <code>eslint-plugin-acrocase</code>:
					</p>
					<pre><code>{`npm install eslint-plugin-acrocase --save-dev`}</code></pre>
					<pre><code>{`{
  "plugins": ["acrocase"],
  "rules": {
    "acrocase/acrocase": "error"
  }
}`}</code></pre>
					<p>
						The plugin is auto-fixable. Run <code>eslint --fix</code> to automatically correct violations.
					</p>

					<h3>With existing ESLint casing rules</h3>
					<p>
						ESLint's built-in <code>camelcase</code> rule and <code>@typescript-eslint/naming-convention</code> enforce lowercase acronyms by default. To use ACROCase, disable their acronym handling:
					</p>
					<pre><code>{`{
  "rules": {
    // Disable the built-in camelcase rule
    "camelcase": "off",
    // Or with @typescript-eslint, allow uppercase acronyms
    "@typescript-eslint/naming-convention": [
      "error",
      {
        "selector": "default",
        "format": ["camelCase", "PascalCase"],
        "filter": {
          "regex": "^(HTTP|URL|HTML|JSON|XML|API|CSS|DOM|URI|SVG|SQL|UUID).*|.*(HTTP|URL|HTML|JSON|XML|API|CSS|DOM|URI|SVG|SQL|UUID)$",
          "match": false
        }
      }
    ],
    // Then let acrocase handle acronym casing
    "acrocase/acrocase": "error"
  }
}`}</code></pre>

					<h2>Dictionary</h2>
					<p>
						A machine-readable <a href="https://github.com/brainkim/acrocase/blob/main/dictionary.json">dictionary.json</a> is available with all recognized acronyms, exceptions, and examples.
					</p>

					<h2>Summary</h2>
					<p>
						Match the web platform: keep acronyms uppercase (<code>URL</code>, <code>HTML</code>, <code>JSON</code>), use <code>Id</code> not <code>ID</code>, and avoid chaining acronyms.
					</p>
					<pre><code>{`// acroCase
const imageURL = "https://example.com/img.png";
const userId = 12345;
element.innerHTML = "<p>Hello</p>";
data.toJSON();

// UpperACROCase
class HTTPClient {}
interface APIResponse {}
const doc = new XMLDocument();`}</code></pre>

					<footer>
						<p>
							ACROCase is a naming convention. Share this page to spread the word.
						</p>
					</footer>
				</main>
			</body>
		</html>
	);
}
