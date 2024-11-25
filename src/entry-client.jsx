import { hydrateRoot } from 'react-dom/client';
import { StrictMode } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { routes } from './routes.jsx';
import { App } from './App.jsx';

const router = createBrowserRouter(routes);

hydrateRoot(
	document.getElementById('root'),
	<StrictMode>
		<App>
			<RouterProvider router={router} />
		</App>
	</StrictMode>
);
