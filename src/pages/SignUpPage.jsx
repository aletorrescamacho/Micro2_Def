import SignUp from "../components/auth/SignUp"


export default function SignUpPage(){
    return (
        <div>
            <div>SignUp Page</div>
            <a href="/home">home</a>
            <a href="/">SignIn</a>
            <SignUp />
        </div>
    );

}