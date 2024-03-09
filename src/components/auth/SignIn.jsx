import React, {useState} from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
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
        </div>
    );
};

export default SignIn;
