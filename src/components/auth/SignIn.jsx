import React, {useState} from "react";
import { signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../../firebase";
import {doc, getDoc} from "firebase/firestore";
import { db } from "../../firebase";
import "./SignIn.css"

const SignIn  = () => {
    
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const signIn = (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password).then((userCredential) => {
            console.log(userCredential)
            window.location.href = "/home";
        }).catch((error) => {
            console.log(error)
            window.alert("Error. Opciones: 1)Correo no registrado. 2)Contraseña inválida.");
        });
    }


  const signInWithGoogle = async () => {
    try {
      const provider = new GoogleAuthProvider();
      const result = await signInWithPopup(auth, provider);
      const user = result.user;

      const userDoc = await getDoc(doc(db, "usuarios", user.uid));

      if (userDoc.exists()) {
        // Usuario ya está registrado en Firestore, redireccionar a home
        window.location.href = "/home";
      } else {
        // El correo electrónico no está registrado en Firestore, mostrar error
        window.alert("Error: El correo electrónico no está registrado.");
      }
    } catch (error) {
      console.log(error);
      window.alert("Error al iniciar sesión con Google.");
    }
  };

    
    
    return (
        <div className = "sign-in-container">
          
            <form onSubmit = {signIn}>
              <div className="flex-box">
                <input className="campos" type = "email" placeholder = "Ingresa el correo electrónico" value = {email} onChange = {(e) => setEmail(e.target.value)}></input>
                <br></br>
                <input className="campos" type = "password" placeholder = "Ingresa la contraseña" value = {password} onChange = {(e) => setPassword(e.target.value)}></input>
                <br></br>
                <button className="bt" type = "submit">Inicia Sesión</button>
                <br></br>

                </div>
                
            </form>

            <button className="bt1" onClick={signInWithGoogle}>Inicia Sesión con Google</button>
        </div>
    );
};

export default SignIn;
