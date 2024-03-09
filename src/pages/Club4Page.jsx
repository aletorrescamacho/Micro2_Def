import "./Club1Page.css";
import { VideoCard } from "../components/VideoCard";


export default function Club4Page(){
return (<div className="Club4Page">
        <div>
    <a href="/home">
    <img
        className="img"
        alt="Rectangle"
        src="https://cdn.animaapp.com/projects/65ebe95db13f1ed0c04d491e/releases/65ebe969fdcccf060bbd37f6/img/rectangle-2@2x.png"
    />
    </a>
    <button className="BotonPerfil">Perfil</button>
    </div>
    <div className="contenedor-flex">
  <h2 className="titulo-pag">Club de Fútbol Virtual</h2>
  <img src="https://picsum.photos/id/886/367/267" alt="Imagen" className="img-pag"/>
  <p className="pa">
Forma parte de un equipo virtual y vive la emoción de la competición en FIFA 22. Únete a jugadores apasionados por el fútbol y forma un equipo virtual con el que competir en torneos online. Demuestra tus habilidades en el campo, desarrolla estrategias ganadoras y experimenta la adrenalina de la victoria. Comparte la pasión por el fútbol con tus compañeros, celebra los goles y aprende de las derrotas. Forja amistades duraderas y vive la experiencia única de competir en equipo en el mundo virtual de FIFA 22.</p>
<div className="botones">
    <button className="ba">Subscribirse</button>
    <button className="ba">Retirarse</button>
  </div>
  <div className="div-videojuegos">
    <h2 className="t-videojuego">Videojuegos:</h2>
    <div className="container1">
        <div className="mult-cards1">
            <VideoCard className="card1v"
            title="FIFA 22"
            description="El simulador de fútbol más popular con equipos reales y modos de juego variados."
            genero="Genero: Deportes"
            id="9"
            /> 
            <VideoCard className="card2v"
            title="Call of Duty: Warzone"
            description="Un juego de disparos en línea con acción frenética y mapas enormes."
            genero="Genero: Battle Royale"
            id="10"
            /> 
            <VideoCard className="card3v"
            title="World of Warcraft"
            description="Un vasto mundo de fantasía con razas, clases y misiones épicas."
            genero="Genero: MMORPG"
            id="18"
            /> 
            
        </div>
        </div>
  </div>
    </div>
</div>
    
)}