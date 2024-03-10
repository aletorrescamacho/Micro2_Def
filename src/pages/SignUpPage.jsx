import SignUp from "../components/auth/SignUp"
import "./SignUpPage.css"


export default function SignUpPage(){
    return (
        <div>
            <div>
            <img
                className="img"
                alt="Rectangle"
                src="https://cdn.animaapp.com/projects/65ebe95db13f1ed0c04d491e/releases/65ebe969fdcccf060bbd37f6/img/rectangle-2@2x.png"
            />
            </div>
            <h1 className="tit-su">¡Regístrate!</h1>
        <div className="main-div">
            <SignUp />
            <p className="p-sincuenta">¿Ya tienes cuenta?</p>
            <a className="si" href="/">Sign In</a>
        </div>
        </div>
    );

}