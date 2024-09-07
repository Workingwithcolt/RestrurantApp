import { getInitialInputProps } from "../../Helpers/helpers";
import { TextInput } from "../GenericComponents/Inputs/TextInput";
import { SchemaTypes } from "../../Helpers/ExtraProperties";
import { PhoneNumberInput } from "../GenericComponents/Inputs/PhoneNumber";

function AddProperty(props) {
  let controlProps = getInitialInputProps(props);
  switch (props.data.item.type) {
    case SchemaTypes.PHONE_NUMBER:
      return (
        <PhoneNumberInput props={props} controlProps={controlProps} />
      )
    default:
      return <TextInput props={props} controlProps={controlProps} />;
  }
}

export default AddProperty;