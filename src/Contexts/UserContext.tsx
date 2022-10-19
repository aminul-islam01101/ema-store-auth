/* eslint-disable @typescript-eslint/no-misused-promises */
/* eslint-disable react/jsx-no-constructed-context-values */
import { createUserWithEmailAndPassword, UserCredential } from 'firebase/auth';
import { useState } from 'react';
import auth from '~/firebase/firebase.config';
import { UserContextProps } from '~/Models/models';
import AuthContext from './AuthContext';

const UserContext = ({ children }: UserContextProps) => {
    const [user] = useState<string | null>(null);
    const createUser = (email: string, password: string): Promise<UserCredential> =>
        createUserWithEmailAndPassword(auth, email, password);

    // const value = useMemo(() => ({ authInfo }), []) as UserValue;
    return <AuthContext.Provider value={{ user, createUser }}>{children}</AuthContext.Provider>;
};

export default UserContext;
