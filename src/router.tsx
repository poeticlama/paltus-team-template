import {createBrowserRouter} from "react-router";
import LoginPage from "./pages/LoginPage.tsx";
import HomePage from "./pages/HomePage.tsx";
import PrivateRoute from "./components/auth/PrivateRoute.tsx";

const router =createBrowserRouter([
    {
        path: '/',
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
]);

export default router;
