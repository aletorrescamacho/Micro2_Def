import React, {useState} from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";
import { db } from "../../firebase";
import {doc, setDoc} from "firebase/firestore";

const handleSubmit = async (nombre, apellido, username, email, password, vjp) => {
    try {

      const userCredential = await createUserWithEmailAndPassword(auth, email, password);

      const uid = userCredential.user.uid;
  
      const usuariosRef = doc(db, "usuarios", uid);
      await setDoc(usuariosRef, {
      nombre,
      apellido,
      username,
      email,
      vjp,
      suscripciones: [],
    });
  
    window.location.href = "/home";
  
    } catch (error) {
      console.log(error);
      window.alert("Error. Opciones: 1)Correo inválido. 2)Correo en uso. 3)Contraseña menor a 6 caracteres.");
      
    }

  };
    
  

const SignUp  = () => {
    
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [lastname,setLastname] = useState('');
    const [username, setUsername] = useState('');
    const [vjp,setVjp] = useState('');


    const videogames = ["The Witcher 3: Wild Hunt", "Red Dead Redemption 2", "The Legend of Zelda: Breath of the Wild", "Dark Souls III", "Super Mario Odyssey", "OverWatch", "Minecraft", "Fortnite", "FIFA 22", "Call of Duty: Warzone", "Assasin's Creed Valhalla", "Cyberpunk 2077", "Among Us", "Animal Crossing: New Horizons", "League of Legends", "Genshin Impact", "Apex Legends", "World of Warcrafts", "Control", "Hades"]

    const handleChange = (e) => {
        setVjp(e.target.value);
      };

    const signUp = (e) => {
        e.preventDefault();
        handleSubmit(name,lastname,username,email,password,vjp)
    }
    
    return (
        <div className = "sign-up-container">
            <form onSubmit = {signUp}>
                <h1>Regístrate y conviértete en un Gamer Élite!</h1>
                <input type = "text" placeholder = "Ingrese su nombre" value = {name} onChange = {(e) => setName(e.target.value)}></input>
                <br></br>
                <input type = "text" placeholder = "Ingrese su apellido" value = {lastname} onChange = {(e) => setLastname(e.target.value)}></input>
                <br></br>
                <input type = "text" placeholder = "Ingrese su nombre de usuario" value = {username} onChange = {(e) => setUsername(e.target.value)}></input>
                <br></br>
                <label htmlFor="vjp">Videojuego favorito:</label>
                <br></br>
                <select value={vjp} onChange={handleChange}>
                {videogames.map((game) => (
                    <option key={game} value={game}>
                    {game}
                    </option>
                ))}
                </select>
                <br></br>
                <input type = "email" placeholder = "Ingresa el correo electrónico" value = {email} onChange = {(e) => setEmail(e.target.value)}></input>
                <br></br>
                <input type = "password" placeholder = "Ingresa la contraseña" value = {password} onChange = {(e) => setPassword(e.target.value)}></input>
                <br></br>
                <button type = "submit">Regístrate</button>
            </form>
        </div>
    );
};

export default SignUp;