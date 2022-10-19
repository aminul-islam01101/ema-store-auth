import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { FC } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { IProduct } from '../../Models/models';
import formatCurrency from '../../Utilities/formateCurrency';

// const ProductCard = ({ name, seller, price, ratings, img, id }: ProductProps) => {
const ProductCard: FC<IProduct> = ({ product }: IProduct) => {
    const { name, seller, price, ratings, img, id } = product;
    const navigate = useNavigate();

    const handleNavigate = () => {
        navigate('/orders');
    };

    return (
        <Card className="h-full w-full">
            <div>
                <CardMedia component="img" height="194" image={img} alt="Paella dish" />
                <div className="flex flex-col justify-between">
                    <CardHeader title={name} subheader={`price: ${formatCurrency(price)}`} />
                    <CardContent>
                        <Typography variant="body2" color="text.secondary">
                            {`Manufacturer: ${seller}`}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            {`Rating: ${ratings}/5`}
                        </Typography>
                    </CardContent>
                </div>
            </div>

            <div className="mt-auto">
                <Link to={`/shop/${id}`}>
                    <button type="button" className="button mt-10 w-full">
                        Shop Now
                    </button>
                </Link>
                <button type="button" className="button mt-10" onClick={handleNavigate}>
                    review cart
                </button>
            </div>
        </Card>
    );
};

export default ProductCard;
