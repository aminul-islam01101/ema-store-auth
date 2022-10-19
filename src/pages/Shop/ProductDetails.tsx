import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { useParams } from 'react-router-dom';
import storedItems from '../../../public/products.json';
import { useShoppingCart } from '../../Contexts/ShoppingCardContext';
import { ProductProps } from '../../Models/models';
import formatCurrency from '../../Utilities/formateCurrency';

const ProductDetails = () => {
    const { shopId } = useParams();

    const products = storedItems.find((product) => product.id === shopId) as ProductProps;
    const { img, category, stock, price, id } = products;
    const { getQuantity, increaseQuantity, decreaseQuantity, removeQuantity } = useShoppingCart();
    const quantity = getQuantity(id);
    // get items from context

    return (
        <Card sx={{ display: 'flex' }}>
            <CardMedia
                component="img"
                sx={{ width: 151 }}
                image={img}
                alt="Live from space album cover"
            />
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                <CardContent sx={{ flex: '1 0 auto' }}>
                    <h3>{category}</h3>
                    <h3>{stock}</h3>
                    <h3>{formatCurrency(price)}</h3>
                    {quantity === 0 ? (
                        <Button
                            variant="contained"
                            color="primary"
                            onClick={() => increaseQuantity(id)}
                        >
                            add to cart
                        </Button>
                    ) : (
                        <>
                            <div>
                                <Button
                                    variant="contained"
                                    color="secondary"
                                    onClick={() => decreaseQuantity(id)}
                                >
                                    -
                                </Button>
                                <span>{quantity} in cart</span>
                                <Button
                                    variant="contained"
                                    color="primary"
                                    onClick={() => increaseQuantity(id)}
                                >
                                    +
                                </Button>
                            </div>
                            <div>
                                <Button
                                    className="bg-red-700"
                                    variant="contained"
                                    color="primary"
                                    onClick={() => removeQuantity(id)}
                                >
                                    Remove
                                </Button>
                            </div>
                        </>
                    )}
                </CardContent>
            </Box>
        </Card>
    );
};

export default ProductDetails;

//  {quantity ? (
//         <>
//           <div>
//             <StyledButton on text={'-'} />
//             <span>{quantity} in cart</span>
//             <StyledButton text={'+'} />
//           </div>
//           <div>
//             <StyledButton bgColor='#ff2600' text={'Remove'} />
//           </div>
//         </>
//       ) : (
//         <StyledButton text={'add to cart'} />
//       )}
