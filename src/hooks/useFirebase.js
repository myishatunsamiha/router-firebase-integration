import { useEffect, useState } from "react";
import app from './../firebase.init';
import { getAuth, GoogleAuthProvider, signInWithPopup, onAuthStateChanged, signOut } from "firebase/auth";


const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

const useFirebase = () => {
    const [user, setUser] = useState({});

    useEffect(() => {
        onAuthStateChanged(auth, user => {
            setUser(user);
        })
    }, []);

    const signInWithGoogle = (event) => {
        signInWithPopup(auth, googleProvider)
            .then(res => {
                const user = res.user;
                console.log(user);
                setUser(user);
            })
            .catch(err => {
                console.error(err.message);
            })
    }

    const handleSignOut = () => {
        signOut(auth)
            .then(() => {
                setUser('');
            })
    }
    // return {user:user, setUser:setUser};
    return { user, setUser, signInWithGoogle, handleSignOut };
}

export default useFirebase;