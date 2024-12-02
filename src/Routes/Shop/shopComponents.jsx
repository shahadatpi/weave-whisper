import {Route, Routes} from "react-router-dom";
import CategoriesPreview from "../CategoriesPreview/CategoriesPreview.jsx";
import './shopContainer.scss';
import Category from "../Category/Category.jsx";

const Shop = () => {
    return (
        <Routes>
            <Route index element={<CategoriesPreview/>}></Route>
            <Route path={':category'} element={<Category/>}></Route>
        </Routes>
    );
};

export default Shop;

