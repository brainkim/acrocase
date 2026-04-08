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

					<p>
						ACROCase is camelCase with one additional rule: acronyms keep their casing.
						Write <code>parseURL</code>, not <code>parseUrl</code>.
						Write <code>HTMLElement</code>, not <code>HtmlElement</code>.
						This is how the web platform already works.
					</p>

					<div class="comparison">
						<div class="do">
							<h4>ACROCase</h4>
							<code>parseURL</code><br />
							<code>toJSON</code><br />
							<code>innerHTML</code><br />
							<code>HTMLElement</code>
						</div>
						<div class="dont">
							<h4>Lowercase acronyms</h4>
							<code>parseUrl</code><br />
							<code>toJson</code><br />
							<code>innerHtml</code><br />
							<code>HtmlElement</code>
						</div>
					</div>

					<h2>The Web Platform</h2>
					<p>
						This is not a new convention. The DOM and browser APIs have always preserved acronym casing:
					</p>

					<div class="examples">
						<table>
							<thead>
								<tr>
									<th>Acronym</th>
									<th>Web platform APIs</th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>HTML</td>
									<td><code>HTMLElement</code>, <code>innerHTML</code>, <code>outerHTML</code></td>
								</tr>
								<tr>
									<td>CSS</td>
									<td><code>CSSStyleSheet</code>, <code>CSSRule</code>, <code>CSS.supports()</code></td>
								</tr>
								<tr>
									<td>DOM</td>
									<td><code>DOMParser</code>, <code>DOMRect</code>, <code>DOMTokenList</code></td>
								</tr>
								<tr>
									<td>URL</td>
									<td><code>URL</code>, <code>URLSearchParams</code>, <code>createObjectURL</code></td>
								</tr>
								<tr>
									<td>URI</td>
									<td><code>encodeURI</code>, <code>encodeURIComponent</code></td>
								</tr>
								<tr>
									<td>JSON</td>
									<td><code>JSON.parse()</code>, <code>toJSON</code></td>
								</tr>
								<tr>
									<td>XML</td>
									<td><code>XMLDocument</code>, <code>XMLSerializer</code></td>
								</tr>
								<tr>
									<td>SVG</td>
									<td><code>SVGElement</code>, <code>SVGPathElement</code></td>
								</tr>
								<tr>
									<td>GPU</td>
									<td><code>GPUDevice</code>, <code>GPUBuffer</code>, <code>GPUTexture</code></td>
								</tr>
								<tr>
									<td>RTC</td>
									<td><code>RTCPeerConnection</code>, <code>RTCDataChannel</code></td>
								</tr>
								<tr>
									<td>IDB</td>
									<td><code>IDBDatabase</code>, <code>IDBObjectStore</code></td>
								</tr>
								<tr>
									<td>USB</td>
									<td><code>USB</code>, <code>USBDevice</code></td>
								</tr>
								<tr>
									<td>HID</td>
									<td><code>HID</code>, <code>HIDDevice</code></td>
								</tr>
								<tr>
									<td>MIDI</td>
									<td><code>MIDIAccess</code>, <code>MIDIInput</code></td>
								</tr>
							</tbody>
						</table>
					</div>

					<h2>The Two Variants</h2>
					<p>
						Like camelCase and UpperCamelCase, ACROCase has two forms.
						When an acronym starts an identifier, its casing depends on which form you're using:
					</p>
					<div class="examples">
						<table>
							<thead>
								<tr>
									<th></th>
									<th>acroCase</th>
									<th>UpperACROCase</th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>Acronym at start</td>
									<td><code>urlString</code></td>
									<td><code>URLString</code></td>
								</tr>
								<tr>
									<td>Acronym in middle</td>
									<td><code>parseURL</code></td>
									<td><code>ParseURL</code></td>
								</tr>
								<tr>
									<td>Mixed</td>
									<td><code>htmlToJSON</code></td>
									<td><code>HTMLToJSON</code></td>
								</tr>
							</tbody>
						</table>
					</div>

					<h2>Not Acronyms</h2>
					<p>
						A few common abbreviations look like acronyms but are not treated as such by the web platform.
						These follow normal camelCase rules.
					</p>

					<h3>Id, not ID</h3>
					<p>
						The DOM consistently uses <code>Id</code>: <code>getElementById</code>, <code>elementId</code>, <code>clientId</code>.
						This is not an acronym for "identifier." It is an abbreviation, and it follows normal casing.
					</p>
					<div class="comparison">
						<div class="do">
							<h4>Correct</h4>
							<code>userId</code>, <code>getElementById</code>
						</div>
						<div class="dont">
							<h4>Wrong</h4>
							<code>userID</code>, <code>getElementByID</code>
						</div>
					</div>

					<h3>Intl, not INTL</h3>
					<p>
						The Internationalization API is <code>Intl</code>, not <code>INTL</code>.
					</p>

					<h2>Chaining Acronyms</h2>
					<p>
						Placing two acronyms next to each other produces identifiers that are hard to parse visually.
						The web platform has run into this problem and handled it inconsistently.
					</p>
					<p>
						The Web Crypto API titlecases all of its acronyms to avoid sequences
						like <code>AESCBC</code> or <code>RSAOAEP</code>:
					</p>
					<ul>
						<li><code>AesCbcParams</code> instead of <code>AESCBCParams</code></li>
						<li><code>RsaOaepParams</code> instead of <code>RSAOAEPParams</code></li>
						<li><code>HmacKeyGenParams</code> instead of <code>HMACKeyGenParams</code></li>
					</ul>
					<p>
						WebRTC does the same for sub-protocol names:
					</p>
					<ul>
						<li><code>RTCDtlsTransport</code> instead of <code>RTCDTLSTransport</code></li>
						<li><code>RTCRtpSender</code> instead of <code>RTCRTPSender</code></li>
					</ul>
					<p>
						When naming new code, restructure to avoid the problem.
						If you must chain acronyms, titlecasing the second one is the established web platform precedent.
					</p>

					<h2>ESLint Plugin</h2>
					<p>
						Enforce ACROCase automatically with <code>eslint-plugin-acrocase</code>:
					</p>
					<pre><code>{`npm install eslint-plugin-acrocase --save-dev`}</code></pre>
					<pre><code>{`{
  "plugins": ["acrocase"],
  "rules": {
    "acrocase/acrocase": "error"
  }
}`}</code></pre>
					<p>
						The rule is auto-fixable. It ships with a dictionary of common acronyms
						and can be extended with project-specific ones:
					</p>
					<pre><code>{`{
  "acrocase/acrocase": ["error", {
    "acronyms": ["GCP", "NATS"]
  }]
}`}</code></pre>
					<p>
						If you use ESLint's built-in <code>camelcase</code> rule, disable it.
						It enforces lowercase acronyms, which conflicts with ACROCase.
					</p>

					<h2>Dictionary</h2>
					<p>
						A machine-readable <a href="https://github.com/brainkim/acrocase/blob/main/dictionary.json">dictionary.json</a> lists
						all recognized acronyms with their expansions and web platform usage.
					</p>

					<footer>
						<p>
							ACROCase is a naming convention for code that respects the
							distinction between acronyms and words.
						</p>
					</footer>
				</main>
			</body>
		</html>
	);
}
