/* eslint-disable @typescript-eslint/no-misused-promises */
/* eslint-disable react/jsx-no-constructed-context-values */
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { useState } from 'react';
import auth from '~/firebase/firebase.config';
import { UserContextProps } from '~/Models/models';
import AuthContext from './AuthContext';

const UserContext = ({ children }: UserContextProps) => {
    const [user] = useState<string | null>(null);
    const createUser = (email: string, password: string) =>
        createUserWithEmailAndPassword(auth, email, password);
    const signIn = (email: string, password: string) =>
        signInWithEmailAndPassword(auth, email, password);
    const logOut = () => signOut(auth);
    // const value = useMemo(() => ({ authInfo }), []) as UserValue;
    return (
        <AuthContext.Provider value={{ user, createUser, signIn, logOut }}>
            {children}
        </AuthContext.Provider>
    );
};

export default UserContext;
