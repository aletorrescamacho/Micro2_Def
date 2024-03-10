import "./Club1Page.css";
import { VideoCard } from "../components/VideoCard";


export default function Club5Page(){
return (<div className="Club5Page">
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
  <h2 className="titulo-pag">Club de Cazadores de Zombis</h2>
  <img src="https://picsum.photos/id/863/367/267" alt="Imagen" className="img-pag"/>
  <p className="pa">
  En la lucha por la supervivencia, no estás solo. Únete a otros supervivientes en una batalla épica contra hordas de no muertos en juegos como Left 4 Dead o Resident Evil. Forja alianzas inquebrantables con tus compañeros, trabajando en equipo para superar obstáculos y afrontar peligros inimaginables. Comparte recursos, estrategias y munición para asegurar la supervivencia del grupo. Experimenta la adrenalina de cada batalla, la tensión constante y la satisfacción de cada victoria contra las fuerzas del mal. </p>
<div className="botones">
    <button className="ba">Subscribirse</button>
    <button className="ba">Retirarse</button>
  </div>
  <div className="div-videojuegos">
    <h2 className="t-videojuego">Videojuegos:</h2>
    <div className="container1">
        <div className="mult-cards1">
            <VideoCard className="card1v"
            title="Red Dead Redemption 2"
            description="Un juego de vaqueros ambientado en el Salvaje Oeste con una narrativa profunda y un vasto mundo abierto."
            genero="Genero: Acción/Aventura"
            id="2"
            /> 
            <VideoCard className="card2v"
            title="Among Us"
            description="Un juego de engaño y deducción en el espacio con amigos o desconocidos."
            genero="Genero: Multijugador"
            id="13"
            /> 
            <VideoCard className="card3v"
            title="Apex Legends"
            description="Combates en equipo en un mundo futurista con héroes y habilidades únicas."
            genero="Battle Royale"
            id="17"
            /> 
            
        </div>
        </div>
  </div>
    </div>
</div>
    
)}