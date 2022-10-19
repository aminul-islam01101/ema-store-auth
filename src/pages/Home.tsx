import { Box, Typography } from '@mui/material';
import { deepOrange } from '@mui/material/colors';
import { Link } from 'react-router-dom';
import HeroImage from '../assets/images/hero.jpg';
import CustomButton from '../components/Button';
import Form from './Form';

const Home = () => (
    <Box className="container grid grid-cols-2 items-center justify-center gap-5 p-16">
        <Box className="space-y-6 p-5" sx={{ boxShadow: 2 }}>
            <Typography sx={{ color: deepOrange[500] }} variant="subtitle1">
                sale upto 70% off
            </Typography>
            <Typography variant="h2">sale upto 70% off</Typography>
            <Typography variant="subtitle1">New Collection for fall</Typography>
            <p>Discover all the new arrivals of ready-to-wear collection.</p>
            <Link className="no-underline" to="/shop">
                <CustomButton />
            </Link>
        </Box>

        <Box>
            <img className="w-full" src={HeroImage} alt="" />
        </Box>
        <Form />
    </Box>
);

export default Home;
