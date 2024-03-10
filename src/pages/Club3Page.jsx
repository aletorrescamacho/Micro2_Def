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



export default function Club3Page(){

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
            checkSubscription("3", data.suscripciones); 
          }
        });
      }
    });

    return unsubscribe;
  }, []);

  function checkSubscription(clubId, suscripciones) {
    setIsSubscribed(suscripciones.includes("3")); 
  }

  async function handleSubscribe() {
    const userDocRef = doc(db, "usuarios", user.uid);
    const userDoc = await getDoc(userDocRef);
    const data = userDoc.data();
    const suscripciones = data.suscripciones;

    if (!suscripciones.includes("3")) {
      await updateDoc(userDocRef, {
        suscripciones: [...suscripciones, "3"],
      });
      setIsSubscribed(true);
    }
  }

  async function handleUnsubscribe() {
    const userDocRef = doc(db, "usuarios", user.uid);
    const userDoc = await getDoc(userDocRef);
    const data = userDoc.data();
    const suscripciones = data.suscripciones;

    const updatedSuscripciones = suscripciones.filter((id) => id !== "3");
    await updateDoc(userDocRef, {
      suscripciones: updatedSuscripciones,
    });
    setIsSubscribed(false);
  }


return (<div className="Club3Page">
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
  <h2 className="titulo-pag">Club de Constructores</h2>
  <img src="https://picsum.photos/id/299/367/267" alt="Imagen" className="img-pag"/>
  <p className="pa">
  Sumérgete en un universo de posibilidades infinitas en Minecraft. Comparte tus creaciones más originales, desde estructuras majestuosas hasta mecanismos ingeniosos, y da rienda suelta a tu imaginación. Diseña asombrosas obras de arquitectura, desde colosales castillos hasta ciudades futuristas, y deja huella en este mundo virtual. Colabora con otros jugadores en proyectos épicos, uniendo fuerzas para construir maravillas que superen tus expectativas. </p>
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
            title="Minecraft"
            description="Un mundo abierto de construcción y exploración donde puedes crear tus propias aventuras."
            genero="Genero: Sandbox"
            id="7"
            /> 
            <VideoCard className="card2v"
            title="Fortnite"
            description="Batallas estratégicas en línea con campeones y habilidades únicas."
            genero="Genero: Battle Royale"
            id="8"
            /> 
            <VideoCard className="card3v"
            title="Animal Crossing: New Horizons"
            description="Una vida tranquila en una isla paradisíaca con actividades relajantes."
            genero="Genero: Simulación"
            id="14"
            /> 
            
        </div>
        </div>
  </div>
    </div>
</div>
    
)}