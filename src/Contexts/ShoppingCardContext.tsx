/* eslint-disable react/jsx-no-constructed-context-values */
import { createContext, useContext, useState } from 'react';
import { CartItemType, ShoppingCartProviderProps, ShoppingCartValue } from '../Models/models';

const ShoppingCartContext = createContext({} as ShoppingCartValue);

export function useShoppingCart() {
    return useContext(ShoppingCartContext);
}

export function ShoppingCartProvider({ children }: ShoppingCartProviderProps) {
    const [cartItems, setCartItems] = useState<CartItemType[]>([]);

    function getQuantity(id: string) {
        return cartItems.find((item) => item.id === id)?.quantity || 0;
    }
    function increaseQuantity(id: string) {
        setCartItems((currItems) => {
            if (currItems.find((item) => item.id === id) == null) {
                return [...currItems, { id, quantity: 1 }];
            }
            return cartItems.map((item) => {
                if (item.id === id) {
                    return { ...item, quantity: item.quantity + 1 };
                }
                return item;
            });
        });
    }
    function decreaseQuantity(id: string) {
        setCartItems((currItems) => {
            if (currItems.find((item) => item.id === id)?.quantity === 1) {
                return currItems.filter((item) => item.id !== id);
            }
            return cartItems?.map((item) => {
                if (item.id === id) {
                    return { ...item, quantity: item.quantity - 1 };
                }
                return item;
            });
        });
    }
    function removeQuantity(id: string) {
        setCartItems((currItems) => currItems.filter((item) => item.id !== id));
    }
    const cartQuantity = cartItems.reduce((quantity, item) => item.quantity + quantity, 0);

    return (
        <ShoppingCartContext.Provider
            value={{
                getQuantity,
                increaseQuantity,
                decreaseQuantity,
                removeQuantity,
                cartQuantity,
                cartItems,
            }}
        >
            {children}
        </ShoppingCartContext.Provider>
    );
}
