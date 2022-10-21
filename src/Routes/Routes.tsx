import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';
import SignUp from '~/pages/SignUp';
import Error from '../pages/Error';
import Home from '../pages/Home';
import Inventory from '../pages/Inventory';
import Login from '../pages/Login';
import Orders from '../pages/Orders';
import ProductDetails from '../pages/Shop/ProductDetails';
import Shop from '../pages/Shop/Shop';
import PrivateRoute from './PrivateRoute';
import Root from './Root';

// export default Roots;
const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<Root />} errorElement={<Error />}>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/shop/:shopId" element={<ProductDetails />} />

            <Route
                path="/orders"
                element={
                    <PrivateRoute>
                        <Orders />
                    </PrivateRoute>
                }
            />
            <Route path="/inventory" element={<Inventory />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
        </Route>
    )
);
export default router;
