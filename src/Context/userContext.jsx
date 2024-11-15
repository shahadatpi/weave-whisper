import {createContext, useEffect, useState} from "react";
import {createUserDocumentFromAuth, onAuthStateChangedListener} from "../Utilities/Firebase/FirebaseUtilities.js";


export const UserContext = createContext({
    currentUser: null,
    setCurrentUser: () => {}

});
// eslint-disable-next-line react/prop-types
export const UserProvider = ({children}) => {
    const [currentUser, setCurrentUser] = useState(null);
    const value = {currentUser, setCurrentUser};
    useEffect(() => {
        const  unSubscribe =  onAuthStateChangedListener((user)=>{
              if (user){
                  createUserDocumentFromAuth(user);
              }
               setCurrentUser(user);
        });
        return unSubscribe;
    }, [])
    return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
}