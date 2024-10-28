import { createUserDocumentFromAuth, signInWithGooglePopup} from "../../Utilities/Firebase/FirebaseUtilities.js";
import SignUp from "../../components/SignUpForm/SignUp.jsx";
import FormInput from "../../components/formInput/FormInput.jsx";
const SignIn = () => {
    const logGoogleUser = async()=>{
        const {user}  = await signInWithGooglePopup();
        const userDocRef = await createUserDocumentFromAuth(user);
    }
    return (
        <div>
            <h1>Sign IN Page</h1>
            <button onClick={logGoogleUser}>Sign In With GooglePopup</button>
            <SignUp></SignUp>
        </div>
    );
};

export default SignIn;
