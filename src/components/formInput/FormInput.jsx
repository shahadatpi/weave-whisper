import './formInputStyles';
import {Group, Input, FormInputLabel} from "./formInputStyles";
const FormInput = ({label, ...otherProps})=>{
    return (
        <Group>
            <Input {...otherProps}/>
            {label && <FormInputLabel shrink={otherProps.value.length}>{label}</FormInputLabel>}
        </Group>
    )
};

export default FormInput;