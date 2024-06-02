
import './assets/categories.styles.scss'
import DirectoryComponent from "./components/directory/directoryComponent.jsx";
const App = () => {

    const categories = [
        {
            "id": 1,
            "title": "hats",
            "imageUrl": "https://i.ibb.co/SVdKk7v/Hat-Stock-Photo.webp"
        },
        {
            "id": 2,
            "title": "jackets",
            "imageUrl": "https://i.ibb.co/ZVJ1Dg5/Rain-Jackets-3x2-1-1024x683.jpg"
        },
        {
            "id": 3,
            "title": "sneakers",
            "imageUrl": "https://i.ibb.co/s3kVpjb/sneakers.webp"
        },
        {
            "id": 4,
            "title": "womens",
            "imageUrl": "https://i.ibb.co/7SdjGbw/womens.jpg"
        },
        {
            "id": 5,
            "title": "mens",
            "imageUrl": "https://i.ibb.co/9qhM68q/mens.jpg"
        }
    ];
    return (
        <>
           <DirectoryComponent categories={categories} />
        </>
    )
}

export default App
