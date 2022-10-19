import { createContext } from 'react';
import { IProducts } from '../Models/models';

const ProductContext = createContext([] as IProducts);
export default ProductContext;
