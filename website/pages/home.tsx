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
						The web platform has hundreds of APIs that contain acronyms.
						With remarkable consistency, those acronyms are kept uppercase:
						<code>innerHTML</code>, <code>XMLDocument</code>, <code>toJSON</code>, <code>encodeURIComponent</code>.
						ACROCase is simply a name for the convention that already exists.
					</p>

					<h2>Acronyms in Web APIs</h2>
					<p>
						Across the DOM, CSS Object Model, and every major browser API, acronyms retain their original casing.
						This pattern holds whether the acronym appears at the start, middle, or end of an identifier.
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
									<td><code>HTMLElement</code>, <code>HTMLCollection</code>, <code>innerHTML</code>, <code>outerHTML</code></td>
								</tr>
								<tr>
									<td>CSS</td>
									<td><code>CSSStyleSheet</code>, <code>CSSRule</code>, <code>CSSStyleDeclaration</code></td>
								</tr>
								<tr>
									<td>DOM</td>
									<td><code>DOMParser</code>, <code>DOMRect</code>, <code>DOMTokenList</code>, <code>DOMException</code></td>
								</tr>
								<tr>
									<td>SVG</td>
									<td><code>SVGElement</code>, <code>SVGPathElement</code>, <code>SVGRectElement</code></td>
								</tr>
								<tr>
									<td>URL</td>
									<td><code>URL</code>, <code>URLSearchParams</code>, <code>URLPattern</code>, <code>createObjectURL</code></td>
								</tr>
								<tr>
									<td>URI</td>
									<td><code>encodeURI</code>, <code>decodeURI</code>, <code>encodeURIComponent</code></td>
								</tr>
								<tr>
									<td>JSON</td>
									<td><code>JSON.parse()</code>, <code>JSON.stringify()</code>, <code>toJSON</code></td>
								</tr>
								<tr>
									<td>XML</td>
									<td><code>XMLDocument</code>, <code>XMLSerializer</code>, <code>XMLHttpRequest</code></td>
								</tr>
								<tr>
									<td>GPU</td>
									<td><code>GPUDevice</code>, <code>GPUBuffer</code>, <code>GPUTexture</code>, <code>GPUAdapter</code></td>
								</tr>
								<tr>
									<td>RTC</td>
									<td><code>RTCPeerConnection</code>, <code>RTCDataChannel</code>, <code>RTCSessionDescription</code></td>
								</tr>
								<tr>
									<td>IDB</td>
									<td><code>IDBDatabase</code>, <code>IDBObjectStore</code>, <code>IDBTransaction</code></td>
								</tr>
								<tr>
									<td>USB</td>
									<td><code>USB</code>, <code>USBDevice</code>, <code>USBConfiguration</code></td>
								</tr>
								<tr>
									<td>HID</td>
									<td><code>HID</code>, <code>HIDDevice</code>, <code>HIDConnectionEvent</code></td>
								</tr>
								<tr>
									<td>MIDI</td>
									<td><code>MIDIAccess</code>, <code>MIDIInput</code>, <code>MIDIOutput</code></td>
								</tr>
								<tr>
									<td>GATT</td>
									<td><code>BluetoothRemoteGATTServer</code>, <code>BluetoothRemoteGATTService</code></td>
								</tr>
								<tr>
									<td>BYOB</td>
									<td><code>ReadableStreamBYOBReader</code>, <code>ReadableStreamBYOBRequest</code></td>
								</tr>
								<tr>
									<td>VTT</td>
									<td><code>VTTCue</code>, <code>VTTRegion</code></td>
								</tr>
								<tr>
									<td>XR</td>
									<td><code>XRSystem</code>, <code>XRSession</code>, <code>XRFrame</code></td>
								</tr>
								<tr>
									<td>DTMF</td>
									<td><code>RTCDTMFSender</code>, <code>RTCDTMFToneChangeEvent</code></td>
								</tr>
							</tbody>
						</table>
					</div>

					<p>
						This is not a handful of cherry-picked examples.
						There are over a hundred <code>HTML*Element</code> interfaces, over eighty <code>SVG*</code> interfaces, over fifty <code>CSS*</code> interfaces, and over thirty each for <code>GPU*</code>, <code>RTC*</code>, and <code>XR*</code>.
						The pattern is the default, not the exception.
					</p>

					<h2>Abbreviations That Are Not Acronyms</h2>
					<p>
						Not everything short is an acronym. The web platform draws a clear line
						between acronyms (which stay uppercase) and abbreviations (which follow normal casing).
					</p>

					<h3>Id</h3>
					<p>
						<code>Id</code> is an abbreviation for "identifier," not an acronym.
						The DOM uses it consistently: <code>getElementById</code>, <code>elementId</code>, <code>clientId</code>, <code>requestId</code>.
						Writing <code>userID</code> is wrong by web platform convention.
					</p>

					<h3>Intl</h3>
					<p>
						The Internationalization API is <code>Intl</code>, not <code>INTL</code>.
						It follows normal PascalCase as an abbreviation, not an acronym.
					</p>

					<h2>Where It Breaks Down</h2>
					<p>
						The convention is not perfectly consistent.
						Every exception tells a story about what happens when acronyms collide.
					</p>

					<h3>XMLHttpRequest</h3>
					<p>
						The most famous API on the web gets its own acronyms wrong.
						<code>XML</code> is uppercase, but <code>Http</code> is titlecased.
						By the web platform's own rules, it should be <code>XMLHTTPRequest</code>.
					</p>
					<p>
						But read <code>XMLHTTP</code> out loud. Where does <code>XML</code> end and <code>HTTP</code> begin?
						This is the original sin of acronym chaining: two uppercase acronyms next to each other
						produce an unreadable wall of capitals. The titlecasing of <code>Http</code> was a readability compromise,
						and it happened so early in the web's history that it became the name everyone knows.
					</p>

					<h3>The Web Crypto API</h3>
					<p>
						AES, RSA, HMAC, and SHA are universally recognized as acronyms.
						But the Web Crypto API titlecases all of them:
					</p>
					<ul>
						<li><code>AesCbcParams</code>, not <code>AESCBCParams</code></li>
						<li><code>RsaOaepParams</code>, not <code>RSAOAEPParams</code></li>
						<li><code>HmacKeyGenParams</code>, not <code>HMACKeyGenParams</code></li>
					</ul>
					<p>
						The same chaining problem drove this decision. Most crypto parameter types
						combine two acronyms (AES+CBC, RSA+OAEP), and the team chose to titlecase everything
						for internal consistency rather than mix styles. This means even <code>AesKeyGenParams</code>
						is titlecased, where <code>AESKeyGenParams</code> would have been perfectly readable.
					</p>

					<h3>WebRTC Sub-Protocols</h3>
					<p>
						WebRTC keeps <code>RTC</code> uppercase in every interface name: <code>RTCPeerConnection</code>, <code>RTCDataChannel</code>, <code>RTCDTMFSender</code>.
						But when a second acronym follows <code>RTC</code>, it gets titlecased:
					</p>
					<ul>
						<li><code>RTCDtlsTransport</code>, not <code>RTCDTLSTransport</code></li>
						<li><code>RTCRtpSender</code>, not <code>RTCRTPSender</code></li>
						<li><code>RTCSctpTransport</code>, not <code>RTCSCTPTransport</code></li>
					</ul>
					<p>
						Unlike the Crypto API, WebRTC only titlecases where chaining actually occurs.
						<code>RTCDTMF</code> would be unreadable, so <code>RTCDTMFSender</code> is... wait.
						That one actually keeps <code>DTMF</code> uppercase. The inconsistency runs deep.
					</p>

					<h3>The Pattern</h3>
					<p>
						Every exception to uppercase acronyms in the web platform exists because two acronyms
						ended up next to each other. The solution is always the same: titlecase one of them.
						The convention itself is never in question. The problem is always chaining.
					</p>
					<p>
						When naming new code, restructure to avoid adjacent acronyms.
						When that is not possible, titlecasing the second acronym is the established precedent.
					</p>

					<h2>The Convention</h2>
					<p>
						ACROCase is camelCase with one rule: known acronyms keep their uppercase form.
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
									<td>Acronym at end</td>
									<td><code>imageURL</code></td>
									<td><code>ImageURL</code></td>
								</tr>
								<tr>
									<td>Multiple acronyms</td>
									<td><code>htmlToJSON</code></td>
									<td><code>HTMLToJSON</code></td>
								</tr>
							</tbody>
						</table>
					</div>
					<p>
						When an acronym starts a camelCase identifier, it is lowercased
						like any other first word: <code>urlString</code>, <code>httpRequest</code>, <code>jsonData</code>.
						In UpperACROCase (PascalCase with acronyms), it stays uppercase: <code>URLString</code>, <code>HTTPRequest</code>, <code>JSONData</code>.
					</p>

					<h2>ESLint Plugin</h2>
					<p>
						<code>eslint-plugin-acrocase</code> enforces the convention automatically:
					</p>
					<pre><code>{`npm install eslint-plugin-acrocase --save-dev`}</code></pre>
					<pre><code>{`{
  "plugins": ["acrocase"],
  "rules": {
    "acrocase/acrocase": "error"
  }
}`}</code></pre>
					<p>
						The rule is auto-fixable. It ships with a <a href="https://github.com/brainkim/acrocase/blob/main/dictionary.json">dictionary</a> of
						139 acronyms sourced from web platform APIs and common programming usage.
						Add project-specific acronyms through configuration:
					</p>
					<pre><code>{`{
  "acrocase/acrocase": ["error", {
    "acronyms": ["GCP", "NATS"]
  }]
}`}</code></pre>
					<p>
						If you use ESLint's built-in <code>camelcase</code> rule, disable it.
						It enforces lowercase acronyms, which contradicts the web platform.
					</p>

					<footer>
						<p>
							ACROCase is a name for a convention the web platform established decades ago.
						</p>
					</footer>
				</main>
			</body>
		</html>
	);
}
