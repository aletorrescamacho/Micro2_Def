import "./Club1Page.css";
import { VideoCard } from "../components/VideoCard";
import React, { useState, useEffect } from 'react';
import {
  getAuth,
  onAuthStateChanged
} from "firebase/auth";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { db } from "../firebase";
import { auth } from "../firebase";


export default function Club4Page(){

  const [user, setUser] = useState(null);
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [suscripciones, setSuscripciones] = useState([]);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);

      if (currentUser) {
        const userDoc = doc(db, "usuarios", currentUser.uid);
        getDoc(userDoc).then((docSnapshot) => {
          if (docSnapshot.exists()) {
            const data = docSnapshot.data();
            checkSubscription("4", data.suscripciones);
          }
        });
      }
    });

    return unsubscribe;
  }, []);

  function checkSubscription(clubId, suscripciones) {
    setIsSubscribed(suscripciones.includes("4"));
  }

  async function handleSubscribe() {
    const userDocRef = doc(db, "usuarios", user.uid);
    const userDoc = await getDoc(userDocRef);
    const data = userDoc.data();
    const suscripciones = data.suscripciones;

    
    if (!suscripciones.includes("4")) {
      await updateDoc(userDocRef, {
        suscripciones: [...suscripciones, "4"], 
      });
      setIsSubscribed(true);
    }
  }

  async function handleUnsubscribe() {
    const userDocRef = doc(db, "usuarios", user.uid);
    const userDoc = await getDoc(userDocRef);
    const data = userDoc.data();
    const suscripciones = data.suscripciones;


    const updatedSuscripciones = suscripciones.filter((id) => id !== "4");
    await updateDoc(userDocRef, {
      suscripciones: updatedSuscripciones,
    });
    setIsSubscribed(false);
  }

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
{user && (
        <button onClick={isSubscribed ? handleUnsubscribe : handleSubscribe}>
          {isSubscribed ? "Desuscribirse" : "Suscribirse"}
        </button>
      )}
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