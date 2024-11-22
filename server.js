import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

import { createServer } from 'vite';

import express from 'express';
import dotenv from 'dotenv';
dotenv.config();

const __dirname = path.dirname(fileURLToPath(import.meta.url));

async function createDevServer() {
	const app = express();

	const vite = await createServer({
		server: { middlewareMode: true },
		appType: 'custom',
	});
	app.use(vite.middlewares);

	app.use('*', async (req, res, next) => {
		try {

            //Reading the original HTML file
			const templateHtml = fs.readFileSync(
				path.resolve(__dirname, 'index.html'),
				'utf-8'
			);

			const template = await vite.transformIndexHtml(
				req.originalUrl,
				templateHtml
			);
            
			const { render } = await vite.ssrLoadModule('/src/entry-server.jsx');

			const appHtml = await render();
			const html = template.replace(`<!--ssr-outlet-->`, appHtml);
			res.status(200).set({ 'Content-Type': 'text/html' }).end(html);
		} catch (error) {
			vite.ssrFixStacktrace(error);
			next(error);
		}
	});
	return app;
}

const app = await createDevServer();
app.listen(process.env.PORT, () => {
	console.log(`ssr dev server running on http://localhost:${process.env.PORT}`);
});
