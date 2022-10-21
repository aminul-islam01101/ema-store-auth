/* eslint-disable react/jsx-no-constructed-context-values */
import {
    createUserWithEmailAndPassword,
    GoogleAuthProvider,
    onAuthStateChanged,
    sendEmailVerification,
    sendPasswordResetEmail,
    signInWithEmailAndPassword,
    signInWithPopup,
    signOut,
    updateProfile,
    User,
} from 'firebase/auth';
import { useEffect, useState } from 'react';
import auth from '~/firebase/firebase.config';
import { ProfileProps, UserContextProps } from '~/Models/models';
import AuthContext from './AuthContext';

const UserContext = ({ children }: UserContextProps) => {
    // hooks
    const [user, setUser] = useState<User | null>(null);
    const [loading, setLoading] = useState(true);

    // create user functionality
    const createUser = (email: string, password: string) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    };
    // signIn functionality
    const signIn = (email: string, password: string) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    };
    // logout functionality
    const logOut = () => {
        setLoading(true);
        return signOut(auth);
    };
    // verifyMail functionality
    const verifyMail = () => sendEmailVerification(auth.currentUser as User);

    // reset pass functionality
    const sendPassResetEmail = (email: string) => sendPasswordResetEmail(auth, email);

    // update profile functionality
    const updateUserProfile = (profile: ProfileProps) =>
        updateProfile(auth.currentUser as User, profile);

    // useEffect observer
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (firebaseUser) => {
            console.log(firebaseUser);
            if (firebaseUser?.emailVerified) {
                setUser(firebaseUser);
            } else {
                setUser(null);
            }

            setLoading(false);
        });

        return () => unsubscribe();
    }, []);

    // google authentication
    const provider = new GoogleAuthProvider();
    const googleSignIn = () => {
        setLoading(true);
        return signInWithPopup(auth, provider);
    };

    // const value = useMemo(() => ({ authInfo }), []) as UserValue;
    return (
        <AuthContext.Provider
            value={{
                verifyMail,
                user,
                loading,
                createUser,
                signIn,
                logOut,
                setLoading,
                sendPassResetEmail,
                updateUserProfile,
                googleSignIn,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};

export default UserContext;
