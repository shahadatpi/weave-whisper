import {signInWithGooglePopup} from "../../Utilities/Firebase/FirebaseUtilities.js";
import {createUserDocumentFromAuth} from "../../Utilities/Firebase/FirebaseUtilities.js";
import {useRef} from "react";

const SignIn = () => {
    const logGoogleUser = async()=>{
        const {user}  = await signInWithGooglePopup();
        const userDocRef = await createUserDocumentFromAuth(user);
    }
    return (
        <div>
            <h1>Sign Page</h1>
            <button onClick={logGoogleUser}>Sign In With GooglePopup</button>
        </div>
    );
};

export default SignIn;
