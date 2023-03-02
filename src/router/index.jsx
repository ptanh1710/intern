import { createBrowserRouter } from 'react-router-dom';
import { DefaultLayout, GuestLayout } from '../layouts';
import { Home, Cart, Products, About, Contact } from '../pages';

const router = createBrowserRouter([
    {
        path: '/',
        element: <DefaultLayout />,
        children: [
            {
                path: 'home',
                element: <Home />,
            },
            {
                path: '/',
                element: <Home />,
            },
            {
                path: '/cart',
                element: <Cart />,
            },
            {
                path: '/products',
                element: <Products />,
                children: [],
            },
            {
                path: '/about',
                element: <About />,
            },
            {
                path: '/contact',
                element: <Contact />,
            },
        ],
    },
    {},
]);

export default router;
