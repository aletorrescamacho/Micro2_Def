import "./HomePage.css";
import { Card } from "../components/Card";


export default function HomePage(){
return (<div className="HomePage">
    <div>
    <img
        className="img"
        alt="Rectangle"
        src="https://cdn.animaapp.com/projects/65ebe95db13f1ed0c04d491e/releases/65ebe969fdcccf060bbd37f6/img/rectangle-2@2x.png"
    />
    <button className="BotonPerfil">Perfil</button>
    </div>
    <div className="container">
        <div className="mult-cards">
            <Card className="card1"
                imgSrc="https://picsum.photos/id/17/300/200"
                imgAlt="Card Image 1"
                title="Club de lo Aventureros"
                description="Explora lugares misteriosos y descubre tesoros ocultos con otros entusiastas de la aventura."
                buttonText="Ver más"
                link="/"
                subs = "No subscrito"
                />
            <Card className="card2"
                imgSrc="https://picsum.photos/id/4/300/200"
                imgAlt="Card Image 2"
                title="Club de   Estrategias"
                description="Reúnete con estrategas brillantes para debatir tácticas, resolver enigmas y conquistar mundos virtuales."
                buttonText="Ver más"
                link="/"
                subs = "No subscrito"
            />
            <Card className="card3"
            imgSrc="https://picsum.photos/id/43/300/200"
            imgAlt="Card Image 3"
            title="Club de Constructores"
            description="Comparte tus creaciones en Minecraft, diseña estructuras asombrosas y colabora en proyectos épicos."
            buttonText="Ver más"
            link="/"
            subs = "No subscrito"
            />
            <Card className="card4"
            imgSrc="https://picsum.photos/id/96/300/200"
            imgAlt="Card Image 4"
            title="Club de Fútbol Virtual"
            description="Forma parte de un equipo virtual, compite en torneos y demuestra tus habilidades en FIFA 22."
            buttonText="Ver más"
            link="/"
            subs = "No subscrito"
            />
            <Card className="card5"
            imgSrc="https://picsum.photos/id/156/300/200"
            imgAlt="Card Image 5"
            title="Club de Cazadores de Zombis"
            description="Únete a otros supervivientes en la lucha contra hordas de no muertos en juegos como Left 4 Dead o Resident Evil"
            buttonText="Ver más"
            link="/"
            subs = "No subscrito"
            />
        </div>
    </div>
</div>


)

}