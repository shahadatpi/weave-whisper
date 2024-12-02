import DirectoryItem from "../DirectoryItem/DirectoryItem.jsx";
import './directoryComponentsStyles';
import {DirectoryContainer} from "./directoryComponentsStyles.jsx";
const DirectoryComponent = () => {
    const categories = [
        {
            "id": 1,
            "title": "hats",
            "imageUrl": "https://i.ibb.co/SVdKk7v/Hat-Stock-Photo.webp",
            "routes": 'shop/hats'
        },
        {
            "id": 2,
            "title": "jackets",
            "imageUrl": "https://i.ibb.co/ZVJ1Dg5/Rain-Jackets-3x2-1-1024x683.jpg",
            "routes": 'shop/jackets'
        },
        {
            "id": 3,
            "title": "sneakers",
            "imageUrl": "https://i.ibb.co/s3kVpjb/sneakers.webp",
            "routes": 'shop/sneakers'
        },
        {
            "id": 4,
            "title": "womens",
            "imageUrl": "https://i.ibb.co/7SdjGbw/womens.jpg",
            "routes": 'shop/womens'
        },
        {
            "id": 5,
            "title": "mens",
            "imageUrl": "https://i.ibb.co/9qhM68q/mens.jpg",
            "routes": 'shop/mens'
        }
    ];
    return (
        <DirectoryContainer>
            {categories.map((category) =>
                <DirectoryItem key={category.id} category={category}/>
            )}
        </DirectoryContainer>
    );
};

export default DirectoryComponent;

