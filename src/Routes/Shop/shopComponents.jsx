import {useContext} from "react";
import {ProductsContext} from "../../Context/productContext.jsx";
import ProductCard from "../../components/productCard/productCard.jsx";
import './shopContainer.scss';

const Shop = () => {
    const {products} = useContext(ProductsContext);
    return (
        <div className={'products-container'}>
            {products.map((product) => (
                <ProductCard key={product.id} product={product}></ProductCard>
            ))}
        </div>
    );
};

export default Shop;

