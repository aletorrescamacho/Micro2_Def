/* eslint-disable no-unused-vars */
import "./HomePage.css";
import { Card } from "../components/Card";
import { useNavigate } from 'react-router-dom';
import React, { useState } from 'react';

export default function HomePage(){


    const [busqueda, setBusqueda] = useState('');

    const handleInputChange = (event) => {
      setBusqueda(event.target.value);
  
    
    };
  
    const handleSubmit = (event) => {
      event.preventDefault();
      window.alert(`Guardando la búsqueda: "${busqueda}"`)
      console.log(`Guardando la búsqueda: "${busqueda}"`);
      
  
      // Puedes realizar otras acciones aquí, como enviar la búsqueda a una API
    };
  
    const navigate = useNavigate();
  
    const handleButtonClick = () => {
      switch (busqueda) {
        case 'valor1':
          navigate("/Club1")
          break;
        case 'valor2':
          navigate("/Club2")
          break;
        default:
          navigate("/Club3")
      }
    };
  




return (<div className="HomePage">
    <div>
    <img
        className="img"
        alt="Rectangle"
        src="https://cdn.animaapp.com/projects/65ebe95db13f1ed0c04d491e/releases/65ebe969fdcccf060bbd37f6/img/rectangle-2@2x.png"
    />
    <a href="/PruebaBusqueda">
    <button className="BotonPerfil">Perfil</button>
    </a>

    </div>
    <div className="container">
        <div className="mult-cards">
            <div className="ca">
            <div className="barra-Busqueda">
                <h1 className="tit-bus">Barra de Búsqueda</h1>
                <form onSubmit={handleSubmit}>
                    <input type="text" value={busqueda} onChange={handleInputChange} placeholder="Introduce tu búsqueda" />
                    <button type="submit" onClick={handleButtonClick}>Buscar</button>
                </form>
                <p className="p-bus">¡Busca aquí todos tus juegos favoritos!</p>
            </div>
            </div>
            <Card className="card1"
                imgSrc="https://picsum.photos/id/17/300/200"
                imgAlt="Card Image 1"
                title="Club de lo Aventureros"
                description="Explora lugares misteriosos y descubre tesoros ocultos con otros entusiastas de la aventura."
                buttonText="Ver más"
                link="/Club1"
                subs = "No subscrito"
                id="1"
                />
            <Card className="card2"
                imgSrc="https://picsum.photos/id/4/300/200"
                imgAlt="Card Image 2"
                title="Club de   Estrategias"
                description="Reúnete con estrategas brillantes para debatir tácticas, resolver enigmas y conquistar mundos virtuales."
                buttonText="Ver más"
                link="/Club2"
                subs = "No subscrito"
                id="2"
            />
            <Card className="card3"
            imgSrc="https://picsum.photos/id/43/300/200"
            imgAlt="Card Image 3"
            title="Club de Constructores"
            description="Comparte tus creaciones en Minecraft, diseña estructuras asombrosas y colabora en proyectos épicos."
            buttonText="Ver más"
            link="/Club3"
            subs = "No subscrito"
            id="3"
            />
            <Card className="card4"
            imgSrc="https://picsum.photos/id/96/300/200"
            imgAlt="Card Image 4"
            title="Club de Fútbol Virtual"
            description="Forma parte de un equipo virtual, compite en torneos y demuestra tus habilidades en FIFA 22."
            buttonText="Ver más"
            link="/Club4"
            subs = "No subscrito"
            id="4"
            />
            <Card className="card5"
            imgSrc="https://picsum.photos/id/156/300/200"
            imgAlt="Card Image 5"
            title="Club de Cazadores de Zombis"
            description="Únete a otros supervivientes en la lucha contra hordas de no muertos en juegos como Left 4 Dead o Resident Evil"
            buttonText="Ver más"
            link="/Club5"
            subs = "No subscrito"
            id="5"
            />
            
        </div>
    </div>
</div>


)

}

