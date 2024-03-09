import { createBrowserRouter } from "react-router-dom";
import LogInPage from "./pages/LogInPage";
import HomePage from "./pages/HomePage";


export const router = createBrowserRouter([{
    path: "/",
    element: <LogInPage/>
},
{
    path: "/home",
    element: <HomePage/>
},
]
)