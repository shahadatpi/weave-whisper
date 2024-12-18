import { useContext, Fragment } from 'react';

import {CategoriesContext} from "../../Context/categoriesContext.jsx";
import CategoryPreview from "../../components/CategoryPreview/CategoryPreview.jsx";

const CategoriesPreview = () => {
    const { categoriesMap } = useContext(CategoriesContext);

    return (
        <Fragment>
            {Object.keys(categoriesMap).map((title) => {
                const products = categoriesMap[title];
                return (
                    <CategoryPreview key={title} title={title} products={products} />
                );
            })}
        </Fragment>
    );
};

export default CategoriesPreview;