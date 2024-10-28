import {useState} from "react";
import {createAuthUserWithEmailAndPassword,createUserDocumentFromAuth} from "../../Utilities/Firebase/FirebaseUtilities.js";
import FormInput from "../formInput/FormInput.jsx";
import Button from "../Button/buttonComponent.jsx";
import './Sign-Up.scss';
const defaultFormFields = {
    displayName: '',
    email: '',
    password:'',
    confirmPassword:'',
}

const SignUp = () => {
    const [formFields, setFormFields] = useState(defaultFormFields);
    const {displayName,email, password, confirmPassword} = formFields;
    console.log(formFields);
    const resetFormFields = () =>{
        setFormFields(defaultFormFields);
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (password !== confirmPassword) {
            alert("Passwords don't match");
            return;
        }
        try{
            const {user} = await createAuthUserWithEmailAndPassword(email, password);
            await createUserDocumentFromAuth(user, {displayName});
            resetFormFields();
        }catch(err){
            if (err.code === 'auth/email-already-in-use') {
                alert("Email already in use");
            }else {
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
            <h2>Don't Have an Account?</h2>
            <span>Sign Up With Your Email</span>
            <form onSubmit={handleSubmit}>

                <FormInput label={'Display Name'} required onChange={handleChange} name="displayName" value={displayName} type="text"/>
                <FormInput label={'Email'} required onChange={handleChange} name="email" value={email}  type="email"/>
                <FormInput label={'Password'} required onChange={handleChange} name="password" value={password} type="password"/>
                <FormInput label={'Confirm Password'} required onChange={handleChange} name="confirmPassword" value={confirmPassword} type="password"/>
                <Button type={'submit'}>Sign Up</Button>
            </form>
        </div>
    );
};

export default SignUp;
