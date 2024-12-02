import './DirectoryItemStyles';
import {BackgroundImage, DirectoryItemBody, DirectoryItemContainer} from "./DirectoryItemStyles.jsx";
import {useNavigate} from "react-router-dom";

const DirectoryItem = ({category}) => {
    const {title, imageUrl, routes}= category;
    const navigate = useNavigate();
    const NavigationHandler = ()=> navigate(routes)
    return (
        <DirectoryItemContainer onClick={NavigationHandler}>
            <BackgroundImage imageUrl={imageUrl}></BackgroundImage>
            <DirectoryItemBody>
                <h2>{title}</h2>
                <p>Shop Now</p>
            </DirectoryItemBody>
        </DirectoryItemContainer>
    );
};

export default DirectoryItem;
