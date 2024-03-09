import React, {useState} from "react";
import { signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../../firebase";

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
          console.log(user); 
      
          window.location.href = "/home"; 
        } catch (error) {
          console.log(error);
        }
      };
    
    return (
        <div className = "sign-in-container">
            <form onSubmit = {signIn}>
                <h1>Inicia Sesión</h1>
                <input type = "email" placeholder = "Ingresa el correo electrónico" value = {email} onChange = {(e) => setEmail(e.target.value)}></input>
                <br></br>
                <input type = "password" placeholder = "Ingresa la contraseña" value = {password} onChange = {(e) => setPassword(e.target.value)}></input>
                <br></br>
                <button type = "submit">Inicia Sesión</button>
            </form>
            <br></br>
            <label htmlFor = "sesionConGoogle">Inicia Sesión con Google.</label>
            <button onClick={signInWithGoogle}>Inicia Sesión con Google</button>
        </div>
    );
};

export default SignIn;
