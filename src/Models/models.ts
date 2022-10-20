import { User, UserCredential } from 'firebase/auth';
import { ReactNode } from 'react';

export interface ProductProps {
    id: string;
    name: string;
    seller: string;
    price: number;
    ratings: number;
    img: string;
    stock: number;
    category: string;
}
export interface IProduct {
    product: ProductProps;
}
export type IProducts = ProductProps[];
export type ShoppingCartProviderProps = {
    children: ReactNode;
};
export type CartItemType = {
    id: string;
    quantity: number;
};

export type ShoppingCartValue = {
    getQuantity: (id: string) => number;
    increaseQuantity: (id: string) => void;
    decreaseQuantity: (id: string) => void;
    removeQuantity: (id: string) => void;
    cartItems?: CartItemType[];
    cartQuantity: number;
};
export type UserContextProps = {
    children: ReactNode;
};
// export type UserType = {
//     user: User | null;
// };
export interface UserValue {
    user: User | null;
    createUser: (email: string, password: string) => Promise<UserCredential>;
    signIn: (email: string, password: string) => Promise<UserCredential>;
    logOut: () => Promise<void>;
}
