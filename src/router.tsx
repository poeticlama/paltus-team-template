import {createBrowserRouter} from "react-router";
import LoginPage from "./pages/LoginPage.tsx";
import HomePage from "./pages/HomePage.tsx";
import PrivateRoute from "./components/auth/PrivateRoute.tsx";
import RootErrorPage from "./pages/RootErrorPage.tsx";

const router =createBrowserRouter([
    {
        path: '/',
        errorElement: <RootErrorPage />,
        children: [
            {
                index: true,
                element: <HomePage />,
            },
            {
                path: '/login',
                element: <LoginPage />,
            },
            {
                path: '/private',
                element: <PrivateRoute />,
                children: [], // Place all your private routes here
            }
        ]
    },
]);

export default router;
