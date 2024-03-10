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
import VideoJuego1 from "./pages/VideoJuego1";
import VideoJuego2 from "./pages/VideoJuego2";
import VideoJuego3 from "./pages/VideoJuego3";
import VideoJuego4 from "./pages/VideoJuego4";
import VideoJuego5 from "./pages/VideoJuego5";
import VideoJuego6 from "./pages/VideoJuego6";
import VideoJuego7 from "./pages/VideoJuego7";
import VideoJuego8 from "./pages/VideoJuego8";
import VideoJuego9 from "./pages/VideoJuego9";
import VideoJuego10 from "./pages/VideoJuego10";
import VideoJuego11 from "./pages/VideoJuego11";
import VideoJuego12 from "./pages/VideoJuego12";
import VideoJuego13 from "./pages/VideoJuego13";
import VideoJuego14 from "./pages/VideoJuego14";
import VideoJuego15 from "./pages/VideoJuego15";
import VideoJuego16 from "./pages/VideoJuego16";
import VideoJuego17 from "./pages/VideoJuego17";
import VideoJuego18 from "./pages/VideoJuego18";
import VideoJuego19 from "./pages/VideoJuego19";
import VideoJuego20 from "./pages/VideoJuego20";
import VideoJuegoError from "./pages/VideoJuegoError";



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

{
    path: "/VideoJuego1",
    element: <VideoJuego1/>
},

{
    path: "/VideoJuego2",
    element: <VideoJuego2/>
},

{
    path: "/VideoJuego3",
    element: <VideoJuego3/>
},

{
    path: "/VideoJuego4",
    element: <VideoJuego4/>
},

{
    path: "/VideoJuego5",
    element: <VideoJuego5/>
},

{
    path: "/VideoJuego6",
    element: <VideoJuego6/>
},

{
    path: "/VideoJuego7",
    element: <VideoJuego7/>
},

{
    path: "/VideoJuego8",
    element: <VideoJuego8/>
},

{
    path: "/VideoJuego9",
    element: <VideoJuego9/>
},

{
    path: "/VideoJuego10",
    element: <VideoJuego10/>
},

{
    path: "/VideoJuego11",
    element: <VideoJuego11/>
},

{
    path: "/VideoJuego12",
    element: <VideoJuego12/>
},

{
    path: "/VideoJuego13",
    element: <VideoJuego13/>
},

{
    path: "/VideoJuego14",
    element: <VideoJuego14/>
},

{
    path: "/VideoJuego15",
    element: <VideoJuego15/>
},

{
    path: "/VideoJuego16",
    element: <VideoJuego16/>
},

{
    path: "/VideoJuego17",
    element: <VideoJuego17/>
},

{
    path: "/VideoJuego18",
    element: <VideoJuego18/>
},

{
    path: "/VideoJuego19",
    element: <VideoJuego19/>
},

{
    path: "/VideoJuego20",
    element: <VideoJuego20/>
},

{
    path: "/VideoJuegoError",
    element: <VideoJuegoError/>
},



]
)