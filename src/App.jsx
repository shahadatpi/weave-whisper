import {Routes, Route} from "react-router-dom";
import './assets/categories.styles.scss'
import Home from "./Routes/Home/HomeComponent.jsx";
import Navigation from "./Routes/Navigation/Navigation.jsx";
import Authentication from "./Routes/Authentication/Authentication.jsx";
const App = () => {
    return (
        <Routes>
            <Route path="/" element={<Navigation/>}>
                <Route index element={<Home/>}></Route>
                <Route path={'auth'} element={<Authentication/>}></Route>
            </Route>
        </Routes>
    )
}

export default App
