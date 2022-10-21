/* eslint-disable react/jsx-no-constructed-context-values */
import {
    createUserWithEmailAndPassword,
    onAuthStateChanged,
    sendEmailVerification,
    sendPasswordResetEmail,
    signInWithEmailAndPassword,
    signOut,
    User,
} from 'firebase/auth';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import auth from '~/firebase/firebase.config';
import { UserContextProps } from '~/Models/models';
import AuthContext from './AuthContext';

const UserContext = ({ children }: UserContextProps) => {
    const [user, setUser] = useState<User | null>(null);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    const createUser = (email: string, password: string) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    };

    const signIn = (email: string, password: string) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    };

    const logOut = () => {
        setLoading(true);
        return signOut(auth);
    };
    const verifyMail = () => sendEmailVerification(auth.currentUser as User);
    const sendPassResetEmail = (email: string) => sendPasswordResetEmail(auth, email);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (firebaseUser) => {
            console.log(firebaseUser);
            if (firebaseUser?.emailVerified) {
                setUser(firebaseUser);
                navigate('/');
            } else {
                setUser(null);
            }

            setLoading(false);
        });

        return () => unsubscribe();
    }, [navigate]);

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
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};

export default UserContext;
