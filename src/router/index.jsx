import { createBrowserRouter } from 'react-router-dom';
import { DefaultLayout, GuestLayout } from '../layouts';
import { Home, Cart, Products, Detail, About, Contact } from '../pages';

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
                path: '/product/:id/detail',
                element: <Detail />,
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
