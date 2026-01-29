/** @jsxImportSource @b9g/crank */
import {Router} from "@b9g/router";
import {renderer} from "@b9g/crank/html";
import {HomePage} from "./pages/home";

const router = new Router();

async function htmlResponse(element: unknown): Promise<Response> {
	const html = await renderer.render(element);
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
