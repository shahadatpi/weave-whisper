import {useState} from "react";
import {
    signInWithGooglePopup,
    signInAuthWithEmailAndPassword
} from "../../Utilities/Firebase/FirebaseUtilities.js";
import FormInput from "../formInput/FormInput.jsx";
import Button, {BUTTON_TYPE_CLASSES} from "../Button/buttonComponent.jsx";
import './SignIn.scss';
const defaultFormFields = {
    email: '',
    password:'',
}

const SignIn = () => {
    const [formFields, setFormFields] = useState(defaultFormFields);
    const {email, password} = formFields;


    const resetFormFields = () =>{
        setFormFields(defaultFormFields);
    }

    const signInWithGoogle = async()=>{
         await signInWithGooglePopup();
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try{
            const {user} = await signInAuthWithEmailAndPassword(email, password);
            resetFormFields();
        }catch(err){
            switch (err.code){
                case 'auth/email-already-in-use':
                    alert('Incorrect password for corresponding email!');
                         break;
                    case 'auth/user-not-found':
                        alert('User not found!');
                        break;
                        default:
                            console.log(err);
            }
        }
    }
    const handleChange = (e)=>{
         const {name, value} = e.target;
         setFormFields({...formFields, [name]:value});
    }
    return (
        <div className={'sign-up-container'}>
            <h2>Already Have an Account?</h2>
            <span>Sign In With Your Email</span>
            <form onSubmit={handleSubmit}>
                <FormInput label={'Email'} required onChange={handleChange} name="email" value={email}  type="email"/>
                <FormInput label={'Password'} required onChange={handleChange} name="password" value={password} type="password"/>
                <div className={'buttons-container'}>
                    <Button type={'submit'}>Sign In</Button>
                    <Button type={'button'} onClick={signInWithGoogle} buttonType={BUTTON_TYPE_CLASSES.google}>Google Sign In</Button>
                </div>
            </form>
        </div>
    );
};

export default SignIn;
