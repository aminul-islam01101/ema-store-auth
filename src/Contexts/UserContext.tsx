/* eslint-disable react/jsx-no-constructed-context-values */
import {
    createUserWithEmailAndPassword,
    onAuthStateChanged,
    signInWithEmailAndPassword,
    signOut,
    User,
} from 'firebase/auth';
import { useEffect, useState } from 'react';
import auth from '~/firebase/firebase.config';
import { UserContextProps } from '~/Models/models';
import AuthContext from './AuthContext';

const UserContext = ({ children }: UserContextProps) => {
    const [user, setUser] = useState<User | null>(null);
    const [loading, setLoading] = useState(true);

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

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            console.log(currentUser);
            setUser(currentUser);
            setLoading(false);
        });

        return unsubscribe;
    }, []);

    // const value = useMemo(() => ({ authInfo }), []) as UserValue;
    return (
        <AuthContext.Provider value={{ user, loading, createUser, signIn, logOut }}>
            {children}
        </AuthContext.Provider>
    );
};

export default UserContext;
