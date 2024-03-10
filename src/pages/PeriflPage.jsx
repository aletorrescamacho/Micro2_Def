import React, { useState, useEffect } from "react";
import {
  getAuth,
  onAuthStateChanged
} from "firebase/auth";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { db } from "../firebase";
import { auth } from "../firebase";
import "./PerfilPage.css"

const EditProfile = () => {
  const [user, setUser] = useState(null);
  const [profile, setProfile] = useState({
    nombre: "",
    apellido: "",
    vjp: "",
  });

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);

      if (currentUser) {
        const userDoc = doc(db, "usuarios", currentUser.uid);
        getDoc(userDoc).then((docSnapshot) => {
          if (docSnapshot.exists()) {
            setProfile(docSnapshot.data());
          }
        });
      }
    });

    return unsubscribe;
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfile({ ...profile, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const userDoc = doc(db, "usuarios", user.uid);
      await updateDoc(userDoc, profile);

      // Mostrar mensaje de éxito
      window.alert("Perfil actualizado correctamente");

      window.location.href = "/home";

    } catch (error) {
      console.log(error);
      window.alert("Error al actualizar el perfil.");
    }
  };

  const videojuegos = ["The Witcher 3: Wild Hunt", "Red Dead Redemption 2", "The Legend of Zelda: Breath of the Wild", "Dark Souls III", "Super Mario Odyssey", "OverWatch", "Minecraft", "Fortnite", "FIFA 22", "Call of Duty: Warzone", "Assasin's Creed Valhalla", "Cyberpunk 2077", "Among Us", "Animal Crossing: New Horizons", "League of Legends", "Genshin Impact", "Apex Legends", "World of Warcrafts", "Control", "Hades"]

  return (
    <div>
       <div>
    <a href="/home">
    <img
        className="img"
        alt="Rectangle"
        src="https://cdn.animaapp.com/projects/65ebe95db13f1ed0c04d491e/releases/65ebe969fdcccf060bbd37f6/img/rectangle-2@2x.png"
    />
    </a>
    </div>
      <h1 className="titu-edp">Editar perfil</h1>
      <form onSubmit={handleSubmit}>
        <div className="flex-box">
        <label htmlFor="nombre" className="subt">Nombre:</label>
        <input
          type="text"
          id="nombre"
          name="nombre"
          value={profile.nombre}
          onChange={handleChange}
        />
        <br></br>
        <label className="subt" htmlFor="apellido">Apellido:</label>
        <input
          type="text"
          id="apellido"
          name="apellido"
          value={profile.apellido}
          onChange={handleChange}
        />
        <br></br>
        <label className="subt" htmlFor="vjp">Videojuego Preferido:</label>
        <select id = "vjp" name = "vjp" value={profile.vjp} onChange={handleChange}>
                {videojuegos.map((videojuego) => (
                    <option key={videojuego} value={videojuego}>
                    {videojuego}
                    </option>
                ))}</select>
        <br></br>
        <button className="bt" type="submit">Guardar cambios</button>
        </div>
      </form>
    </div>
  );
};

export default EditProfile;