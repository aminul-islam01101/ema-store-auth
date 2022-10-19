/* eslint-disable react/jsx-props-no-spreading */
import { useShoppingCart } from '../Contexts/ShoppingCardContext';
import CartItem from './Shop/CartItem';

const Orders = () => {
    const { cartItems } = useShoppingCart();

    console.log(cartItems);

    return (
        <div className="mt-20">
            {cartItems ? (
                <div>
                    {cartItems.map((item) => (
                        <CartItem key={item.id} {...item} />
                    ))}
                </div>
            ) : (
                <div>nothing selected</div>
            )}
        </div>
    );
};

export default Orders;
