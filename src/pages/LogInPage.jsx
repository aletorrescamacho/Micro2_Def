import SignIn from "../components/auth/SignIn"
import "./LogInPage.css"

export default function LogInPage(){
    return (
        <div>
            <div>
            <img
                className="img"
                alt="Rectangle"
                src="https://cdn.animaapp.com/projects/65ebe95db13f1ed0c04d491e/releases/65ebe969fdcccf060bbd37f6/img/rectangle-2@2x.png"
            />
            </div>
            <h1 className="tit-is">Inicia Sesión</h1>
        <div className="cont-main-su">
            <SignIn />
            <br></br>
            <p className="p-sincuenta">¿No tienes cuenta?</p>
            <a className="su" href="/SignUp">Sign Up</a>
        </div>
        </div>

    );

}