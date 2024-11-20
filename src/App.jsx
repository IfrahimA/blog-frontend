import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Blog } from './pages/Blog';
import { Signup } from './pages/Signup';
import { Login } from './pages/Login';

import { AuthContextProvider } from './contexts/AuthContext';

const router = createBrowserRouter([
	{
		path: '/',
		element: <Blog />,
	},
	{
		path: '/signup',
		element: <Signup />,
	},
	{
		path: '/login',
		element: <Login />,
	},
]);

const queryClient = new QueryClient();

export function App() {
	return (
		<QueryClientProvider client={queryClient}>
			<AuthContextProvider>
				<RouterProvider router={router} />
			</AuthContextProvider>
		</QueryClientProvider>
	);
}
