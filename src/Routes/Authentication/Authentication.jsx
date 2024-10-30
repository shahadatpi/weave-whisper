import SignUp from "../../components/SignUpForm/SignUp.jsx";
import SignIn from "../../components/SignInForm/SignIn.jsx";
import './authentication-styles.scss';
const Authentication = () => {

    return (
        <div className={'authentication-container'}>
            <SignIn></SignIn>
            <SignUp></SignUp>
        </div>
    );
};

export default Authentication;
