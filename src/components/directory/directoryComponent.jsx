import CategoryItem from "../category-item/categoryItem.jsx";
import './directoryComponentsStyles.scss';
const DirectoryComponent = ({categories}) => {
    return (
        <div className={'directory-container'}>
            {categories.map((category) =>
                <CategoryItem key={category.id} category={category}/>
            )}
        </div>
    );
};

export default DirectoryComponent;
