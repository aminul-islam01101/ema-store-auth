import { createContext } from 'react';
import { UserValue } from '../Models/models';

const AuthContext = createContext({} as UserValue);
export default AuthContext;
