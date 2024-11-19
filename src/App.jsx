import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Blog } from './pages/Blog';
import { Signup } from './pages/Signup';

const router = createBrowserRouter([
	{
		path: '/',
		element: <Blog />,
	},
	{
		path: '/signup',
		element: <Signup />,
	},
]);

const queryClient = new QueryClient();

export function App() {
	return (
		<QueryClientProvider client={queryClient}>
			<RouterProvider router={router} />
		</QueryClientProvider>
	);
}
