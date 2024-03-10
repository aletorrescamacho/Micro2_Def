import "./Club1Page.css";
import { VideoCard } from "../components/VideoCard";


export default function Club2Page(){
return (<div className="Club2Page">
        <div>
    <a href="/home">
    <img
        className="img"
        alt="Rectangle"
        src="https://cdn.animaapp.com/projects/65ebe95db13f1ed0c04d491e/releases/65ebe969fdcccf060bbd37f6/img/rectangle-2@2x.png"
    />
    </a>

    </div>
    <div className="contenedor-flex">
  <h2 className="titulo-pag">Club de Estrategia</h2>
  <img src="https://picsum.photos/id/304/367/267" alt="Imagen" className="img-pag"/>
  <p className="pa">
  En un entorno digital vibrante, donde las ideas se convierten en realidades virtuales, te invitamos a unirte a una comunidad de estrategas brillantes. Forja alianzas con mentes afines, intercambia ideas innovadoras y participa en debates apasionantes. Desarrolla tu ingenio y capacidad de resolución de problemas mientras te enfrentas a enigmas desafiantes y conquistas mundos virtuales. Experimenta la emoción de la colaboración y el logro en un espacio donde la creatividad y la estrategia se unen para dar vida a lo imposible.</p>
<div className="botones">
    <button className="ba">Subscribirse</button>
    <button className="ba">Retirarse</button>
  </div>
  <div className="div-videojuegos">
    <h2 className="t-videojuego">Videojuegos:</h2>
    <div className="container1">
        <div className="mult-cards1">
            <VideoCard className="card1v"
            title="Dark Souls III"
            description="Un juego desafiante con combates intensos y un mundo oscuro y misterioso."
            genero="Genero: Acción/RPG"
            id="4"
            /> 
            <VideoCard className="card2v"
            title="League of Legends"
            description="Batallas estratégicas en línea con campeones y habilidades únicas."
            genero="Genero: MOBA"
            id="15"
            /> 
            <VideoCard className="card3v"
            title="Genshin Impact"
            description="Un mundo de fantasía con personajes elementales y una jugabilidad cautivadora."
            genero="Genero: Acción/RPG"
            id="16"
            /> 
            
        </div>
        </div>
  </div>
    </div>
</div>
    
)}