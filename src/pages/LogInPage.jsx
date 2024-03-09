import SignIn from "../components/auth/SignIn"


export default function LogInPage(){
    return (
        <div>
            <div>LogIn Page</div>
            <a href="/home">home</a>
            <a href="/SignUp">SignUp</a>
            <SignIn />
        </div>
    );

}