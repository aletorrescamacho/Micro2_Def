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


export default function Club1Page(){

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
            checkSubscription("1", data.suscripciones); 
          }
        });
      }
    });

    return unsubscribe;
  }, []);

  function checkSubscription(clubId, suscripciones) {
    setIsSubscribed(suscripciones.includes(clubId));
  }

  async function handleSubscribe() {
    const userDocRef = doc(db, "usuarios", user.uid);
    const userDoc = await getDoc(userDocRef);
    const data = userDoc.data();
    const suscripciones = data.suscripciones;

    if (!suscripciones.includes("1")) {
      await updateDoc(userDocRef, {
        suscripciones: [...suscripciones, "1"],
      });
      setIsSubscribed(true);
    }
  }

  async function handleUnsubscribe() {
    const userDocRef = doc(db, "usuarios", user.uid);
    const userDoc = await getDoc(userDocRef);
    const data = userDoc.data();
    const suscripciones = data.suscripciones;

    const updatedSuscripciones = suscripciones.filter((id) => id !== "1");
    await updateDoc(userDocRef, {
      suscripciones: updatedSuscripciones,
    });
    setIsSubscribed(false);
  }

return (<div className="Club1Page">
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
  <h2 className="titulo-pag">Club de los Aventureros</h2>
  <img src="https://picsum.photos/id/191/367/267" alt="Imagen" className="img-pag"/>
  <p className="pa">
Embárcate en una aventura inolvidable explorando lugares misteriosos y descubriendo tesoros ocultos junto a otros entusiastas. Recorre enigmáticas ruinas, ciudades perdidas y demás escenarios fascinantes mientras descifras enigmas y acertijos que te conducirán a valiosas reliquias, objetos históricos y culturales, o incluso tesoros mágicos. Forja amistades inquebrantables con otros exploradores que comparten tu pasión por la aventura y vive una experiencia única llena de adrenalina, conocimiento y emociones trepidantes.</p>
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
            title="The Witcher 3: Wild Hunt"
            description="Un épico juego de rol de mundo abierto con una trama envolvente y gráficos impresionantes."
            genero="Genero: RPG"
            id="1"
            /> 
            <VideoCard className="card2v"
            title="The Legend of Zelda: Breath of the Wild"
            description="Una aventura épica con un vasto mundo, rompecabezas desafiantes y una historia cautivadora."
            genero="Genero: Aventura"
            id="3"
            /> 
            <VideoCard className="card3v"
            title="Assassin's Creed Valhalla"
            description="Una aventura vikinga con combates, exploración y una historia intrigante."
            genero="Genero: Acción/Aventura"
            id="11"
            /> 
            
        </div>
        </div>
  </div>
    </div>
</div>
    
)}