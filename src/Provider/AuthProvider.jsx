import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from "../Firebase/firebase.config";

export const Authcontext = createContext()
const auth = getAuth(app);

export default function AuthProvider({ children }) {

    const [user, setuser] = useState(null)
    const [loading,setloading]=useState(true)

    const createUser = (email, password) => {
        setloading(true)
        return createUserWithEmailAndPassword(auth, email, password);
    }
    const login = (email, password) => {
        setloading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }
    const logout = () => {
        setloading(true)
        return signOut(auth);
    }

    useEffect(() => {
        const unsubcribe = onAuthStateChanged(auth, currentuser => {
            setloading(false)
            setuser(currentuser)
            console.log('user ase nki', currentuser)
        })
        return () => {
            return unsubcribe();
        }
    }, [])

    const authinfo = {
        user,
        createUser,
        login,
        logout,
        loading,
    }
    return (
        <Authcontext.Provider value={authinfo}>
            {
                children
            }
        </Authcontext.Provider>
    )
}