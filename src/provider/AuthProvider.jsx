import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { createContext, useState } from 'react';
import { auth } from '../firebase/irebase_init';

export const AuthContext = createContext(null);

const AuthProvider = ({children}) => {
  const [user, setuser] = useState(null);
  const [loading, setloading] = useState(true);

   //singup
   const createUser = (email, password) => {
    setloading(true);
    return createUserWithEmailAndPassword(auth, email, password);
   }

   // signin 
   const signInUser = (email, password) =>{
    setloading(true);
    return signInWithEmailAndPassword(auth, email, password)
   }

    const userInfo = {
        user,
        loading,
        createUser,
        signInUser
    }   

    return (
        <AuthContext.Provider value={userInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;