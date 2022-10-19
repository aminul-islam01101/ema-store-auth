import storedItems from '../../../public/products.json';
import ProductCard from './ProductCard';

const Shop = () => (
    // const products = useLoaderData() as IProducts;

    <div className="grid grid-cols-[4fr_1fr]">
        <div className="container grid gap-3 md:grid-cols-2 xl:grid-cols-3">
            {storedItems.map((product) => (
                // <ProductCard {...product} key={product.id} />
                <ProductCard product={product} key={product.id} />
            ))}
        </div>
    </div>
);
export default Shop;
