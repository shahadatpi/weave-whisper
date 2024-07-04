import {ComponentPreview, Previews} from '@react-buddy/ide-toolbox'
import {PaletteTree} from './palette'
import Navigation from "../Routes/Navigation/Navigation.jsx";

const ComponentPreviews = () => {
    return (
        <Previews palette={<PaletteTree/>}>
            <ComponentPreview path="/Navigation">
                <Navigation/>
            </ComponentPreview>
        </Previews>
    )
}

export default ComponentPreviews