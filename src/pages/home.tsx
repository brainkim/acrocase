/** @jsxImportSource @b9g/crank */

export function HomePage() {
	return (
		<html lang="en">
			<head>
				<meta charset="UTF-8" />
				<meta name="viewport" content="width=device-width, initial-scale=1.0" />
				<title>Acrocase - Acronym Casing Convention</title>
				<meta
					name="description"
					content="A naming convention for handling acronyms in camelCase and PascalCase identifiers."
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
					<h1>Acrocase</h1>
					<p class="tagline">
						A naming convention for acronyms in camelCase and PascalCase.
					</p>

					<h2>The Problem</h2>
					<p>
						When writing code, you'll inevitably encounter acronyms: HTTP, URL, XML, API, HTML, ID, and countless others. How should these appear in identifiers that use camelCase or PascalCase?
					</p>
					<p>Consider a function that parses an HTTP URL. Should it be:</p>
					<div class="comparison">
						<div class="do">
							<h4>Acrocase</h4>
							<code>parseHttpUrl</code>
						</div>
						<div class="dont">
							<h4>All-caps</h4>
							<code>parseHTTPURL</code>
						</div>
					</div>

					<h2>The Rule</h2>
					<p>
						<strong>Treat acronyms as regular words.</strong> Only capitalize the first letter when appropriate for the casing style.
					</p>

					<div class="examples">
						<table>
							<thead>
								<tr>
									<th>Acronym</th>
									<th>camelCase</th>
									<th>PascalCase</th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>HTTP</td>
									<td><code>http</code>, <code>httpRequest</code></td>
									<td><code>Http</code>, <code>HttpRequest</code></td>
								</tr>
								<tr>
									<td>URL</td>
									<td><code>url</code>, <code>urlParser</code></td>
									<td><code>Url</code>, <code>UrlParser</code></td>
								</tr>
								<tr>
									<td>XML</td>
									<td><code>xml</code>, <code>xmlDocument</code></td>
									<td><code>Xml</code>, <code>XmlDocument</code></td>
								</tr>
								<tr>
									<td>API</td>
									<td><code>api</code>, <code>apiKey</code></td>
									<td><code>Api</code>, <code>ApiKey</code></td>
								</tr>
								<tr>
									<td>ID</td>
									<td><code>id</code>, <code>userId</code></td>
									<td><code>Id</code>, <code>UserId</code></td>
								</tr>
								<tr>
									<td>HTML</td>
									<td><code>html</code>, <code>htmlElement</code></td>
									<td><code>Html</code>, <code>HtmlElement</code></td>
								</tr>
								<tr>
									<td>JSON</td>
									<td><code>json</code>, <code>jsonParser</code></td>
									<td><code>Json</code>, <code>JsonParser</code></td>
								</tr>
							</tbody>
						</table>
					</div>

					<h2>Why Acrocase?</h2>

					<h3>1. Readability at Word Boundaries</h3>
					<p>
						All-caps acronyms create ambiguous word boundaries. Compare:
					</p>
					<div class="comparison">
						<div class="do">
							<h4>Clear boundaries</h4>
							<code>xmlHttpRequest</code>
						</div>
						<div class="dont">
							<h4>Where does HTTP end?</h4>
							<code>XMLHTTPRequest</code>
						</div>
					</div>

					<h3>2. Consistency</h3>
					<p>
						Acrocase follows the same capitalization rules as regular words. No special cases to remember.
					</p>

					<h3>3. Adjacent Acronyms</h3>
					<p>
						When acronyms appear next to each other, acrocase remains readable:
					</p>
					<div class="comparison">
						<div class="do">
							<h4>Acrocase</h4>
							<code>parseXmlHttpUrl</code>
						</div>
						<div class="dont">
							<h4>All-caps</h4>
							<code>parseXMLHTTPURL</code>
						</div>
					</div>

					<h2>Adoption</h2>
					<p>Acrocase is used by:</p>
					<ul>
						<li><a href="https://google.github.io/styleguide/javaguide.html#s5.3-camel-case">Google Java Style Guide</a></li>
						<li><a href="https://docs.microsoft.com/en-us/dotnet/standard/design-guidelines/capitalization-conventions">.NET Framework Design Guidelines</a></li>
						<li><a href="https://go.dev/doc/effective_go#mixed-caps">Go (Effective Go)</a></li>
						<li><a href="https://www.swift.org/documentation/api-design-guidelines/">Swift API Design Guidelines</a></li>
						<li><a href="https://kotlinlang.org/docs/coding-conventions.html#naming-rules">Kotlin Coding Conventions</a></li>
					</ul>

					<h2>Web Platform Exceptions</h2>
					<p>
						The web platform predates these conventions and contains inconsistencies. These are historical artifacts, not guidelines:
					</p>

					<div class="examples">
						<table>
							<thead>
								<tr>
									<th>API</th>
									<th>Notes</th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td><code>getElementById</code></td>
									<td>Acrocase style (lowercase "Id")</td>
								</tr>
								<tr>
									<td><code>XMLHttpRequest</code></td>
									<td>Mixed: "XML" all-caps, "Http" acrocase</td>
								</tr>
								<tr>
									<td><code>innerHTML</code></td>
									<td>All-caps "HTML"</td>
								</tr>
								<tr>
									<td><code>toJSON</code></td>
									<td>All-caps "JSON"</td>
								</tr>
								<tr>
									<td><code>encodeURIComponent</code></td>
									<td>All-caps "URI"</td>
								</tr>
							</tbody>
						</table>
					</div>

					<div class="note">
						<strong>Note:</strong> When interfacing with existing APIs, match their conventions. Use acrocase for new code you control.
					</div>

					<h2>Linting</h2>
					<p>Enforce acrocase with ESLint:</p>

					<h3>@typescript-eslint/naming-convention</h3>
					<pre><code>{`{
  "@typescript-eslint/naming-convention": [
    "error",
    {
      "selector": "variable",
      "format": ["camelCase", "UPPER_CASE"]
    },
    {
      "selector": "function",
      "format": ["camelCase"]
    },
    {
      "selector": "typeLike",
      "format": ["PascalCase"]
    }
  ]
}`}</code></pre>

					<h3>eslint-plugin-unicorn</h3>
					<p>
						The <a href="https://github.com/sindresorhus/eslint-plugin-unicorn">eslint-plugin-unicorn</a> package includes the{" "}
						<a href="https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prevent-abbreviations.md">prevent-abbreviations</a>{" "}
						rule which can encourage full words over acronyms.
					</p>

					<h2>Two-Letter Acronyms</h2>
					<p>
						Some style guides make an exception for two-letter acronyms (like "ID" or "IO"), keeping them uppercase. Acrocase recommends treating all acronyms consistently:
					</p>
					<div class="comparison">
						<div class="do">
							<h4>Consistent</h4>
							<code>userId</code>, <code>ioStream</code>
						</div>
						<div class="dont">
							<h4>Exception for short acronyms</h4>
							<code>userID</code>, <code>IOStream</code>
						</div>
					</div>

					<h2>Summary</h2>
					<p>
						Treat acronyms as words. Capitalize only the first letter when the casing style calls for it. This produces readable, consistent identifiers.
					</p>
					<pre><code>{`// camelCase
const httpUrl = "https://example.com";
const xmlParser = new XmlParser();

// PascalCase
class HttpClient {}
interface ApiResponse {}`}</code></pre>

					<footer>
						<p>
							Acrocase is a naming convention, not a library. Share this page to spread the word.
						</p>
					</footer>
				</main>
			</body>
		</html>
	);
}
