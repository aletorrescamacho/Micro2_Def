import { createBrowserRouter } from "react-router-dom";
import LogInPage from "./pages/LogInPage";
import HomePage from "./pages/HomePage";
import SignUpPage from "./pages/SignUpPage"
import Club1Page from "./pages/Club1Page";
import Club2Page from "./pages/Club2Page";
import Club3Page from "./pages/Club3Page";
import Club4Page from "./pages/Club4Page";
import Club5Page from "./pages/Club5Page";
import PruebaBusqueda from "./pages/PruebaBusqueda";
import EditProfile from "./pages/PeriflPage";


export const router = createBrowserRouter([{
    path: "/",
    element: <LogInPage/>
},
{
    path: "/home",
    element: <HomePage/>
},
{
    path: "/SignUp",
    element: <SignUpPage/>
},
{
    path: "/Perfil",
    element: <EditProfile/>
},
{
    path: "/Club1",
    element: <Club1Page/>
},
{
    path: "/Club2",
    element: <Club2Page/>
},
{
    path: "/Club3",
    element: <Club3Page/>
},
{
    path: "/Club4",
    element: <Club4Page/>
},
{
    path: "/Club5",
    element: <Club5Page/>
},

{
    path: "/PruebaBusqueda",
    element: <PruebaBusqueda/>
},


]
)