import { useMemo } from 'react';
import { UserContextProps, UserValue } from '~/Models/models';
import AuthContext from './AuthContext';

const UserContext = ({ children }: UserContextProps) => {
    const user = useMemo(() => ({ userName: 'something' }), []) as UserValue;
    return <AuthContext.Provider value={user}>{children}</AuthContext.Provider>;
};

export default UserContext;
