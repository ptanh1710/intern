import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// Scss Global
import './components/style/global.scss';
// Router
import router from './router';
import ShopProvider from './context/ShopContext';

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <ShopProvider>
            <RouterProvider router={router} />
            <ToastContainer
                position="top-right"
                autoClose={2500}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover={false}
                theme="light"
            />
        </ShopProvider>
    </React.StrictMode>,
);
