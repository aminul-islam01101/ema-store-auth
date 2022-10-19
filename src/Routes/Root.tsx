import { Outlet, useLoaderData } from 'react-router-dom';
import UserContext from '~/Contexts/UserContext';
import Header from '../components/Header';
import ProductContext from '../Contexts/ProductContext';
import { ShoppingCartProvider } from '../Contexts/ShoppingCardContext';
import { IProducts } from '../Models/models';

function Root() {
    const products = useLoaderData() as IProducts;

    return (
        <div className="min-h-screen">
            <UserContext>
                <ShoppingCartProvider>
                    <ProductContext.Provider value={products}>
                        <Header />
                        <Outlet />
                    </ProductContext.Provider>
                </ShoppingCartProvider>
            </UserContext>
        </div>
    );
}

export default Root;
