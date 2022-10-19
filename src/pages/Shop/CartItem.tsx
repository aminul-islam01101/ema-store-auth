import { Button } from '@mui/material';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { useContext } from 'react';
import ProductContext from '../../Contexts/ProductContext';
import { useShoppingCart } from '../../Contexts/ShoppingCardContext';
import { CartItemType, ProductProps } from '../../Models/models';
import formatCurrency from '../../Utilities/formateCurrency';

const CartItem = ({ id, quantity }: CartItemType) => {
    const { removeQuantity } = useShoppingCart();
    const Products = useContext(ProductContext);
    const item = Products.find((itemId) => itemId.id === id) as ProductProps;

    // !item && null;
    const { img, price, stock } = item;

    return (
        <div>
            <Card sx={{ display: 'flex' }}>
                <CardMedia
                    component="img"
                    sx={{ width: 151 }}
                    image={img}
                    alt="Live from space album cover"
                />
                <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                    <CardContent sx={{ flex: '1 0 auto' }}>
                        <h3>{stock}</h3>
                        <h3>{formatCurrency(price)}</h3>

                        <div>
                            <span>{quantity} in cart</span>
                        </div>
                        <div>
                            <Button
                                variant="contained"
                                color="primary"
                                onClick={() => removeQuantity(id)}
                            >
                                x
                            </Button>
                        </div>
                    </CardContent>
                </Box>
            </Card>
        </div>
    );
};

export default CartItem;
