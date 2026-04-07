import {Router} from "@b9g/router";
import {renderer} from "@b9g/crank/html";
import {type Element} from "@b9g/crank";
import {HomePage} from "./pages/home";

const router = new Router();

async function htmlResponse(element: unknown): Promise<Response> {
	const html = await renderer.render(element as Element);
	return new Response(`<!DOCTYPE html>${html}`, {
		headers: {"Content-Type": "text/html; charset=utf-8"},
	});
}

router.route("/").get(async () => {
	return htmlResponse(<HomePage />);
});

router.route("/*").all(() => {
	return new Response("Not Found", {status: 404});
});

declare const self: ServiceWorkerGlobalScope;
self.addEventListener("fetch", (event) => {
	event.respondWith(router.handle(event.request));
});

// ServiceWorker install event for static site generation
self.addEventListener("install", (event) => {
	event.waitUntil(generateStaticSite());
});

async function generateStaticSite() {
	if (import.meta.env.MODE !== "production") {
		return;
	}

	const staticBucket = await self.directories.open("public");

	const routes = ["/"];
	for (const route of routes) {
		const response = await fetch(route);
		if (response.ok) {
			const content = await response.text();
			const filePath = route === "/" ? "index.html" : `${route.slice(1)}/index.html`;
			const fileHandle = await staticBucket.getFileHandle(filePath, {
				create: true,
			});
			const writable = await fileHandle.createWritable();
			await writable.write(content);
			await writable.close();
		}
	}
}
