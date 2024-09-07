import { useLocation } from "react-router-dom";
import { GenericErrorComponent, GenericSuccessComponent } from "../GenericComponents/FormComponent/GenericAlertComponent";
import { UPDATE_ON_RESTAURENT } from "../../Helpers/ConstantProperties";
import { GenericEditForm } from "../GenericComponents/FormComponent/GenericEditForm";
import { serviceHelpers } from "../../Helpers/ServiceHelpers";
import { restraurantProps } from "../../Helpers/ExtraProperties";

export const EditRestraurant = () => {
    const location = useLocation();

    let SuccessMsg = "Restraurant Edited Successfully"

    const editRestaurentQueryFunction = async (state, auth) => {
        return await serviceHelpers.updateRestaurent(auth, state, location.state.id)
    }

    const EditProps = {
        ErrorComponent: ({ error }) => <GenericErrorComponent error={error} />,
        SuccessComponent: ({ data }) => <GenericSuccessComponent data={data} message={SuccessMsg} />,
        navigateTo: "/restraurants",
        queryKeyValue: UPDATE_ON_RESTAURENT,
        formTitle: "Edit Restraurant",
        propertyList: restraurantProps,
        currentData: location.state,
        queryFunction: editRestaurentQueryFunction,
    }

    return <GenericEditForm
        {...EditProps}
    />
}