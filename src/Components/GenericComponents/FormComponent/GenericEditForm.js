import { GenericVerifyComponent } from "../VerifyComponent/FirmVerifyComponent"
import GenericForm from "./GenericForm"
import { useNavigate } from "react-router-dom";

export const GenericEditForm = (
    {
        ErrorComponent,
        SuccessComponent,
        navigateTo,
        queryKeyValue,
        formTitle,
        propertyList,
        currentData,
        queryFunction,
        GroupDetailsComponent,
        afterDispatch = () => { }
    }
) => {

    const navigateOnCancel = useNavigate()

    const EditProps = {
        ErrorComponent: ErrorComponent,
        SuccessComponent: SuccessComponent,
        addButtonText: "Edit",
        navigateTo: navigateTo,
        queryKeyValue: queryKeyValue,
        enableVerify: true,
        VerifyAlertComponent: GenericVerifyComponent,
        formTitle: formTitle,
        propertyList: propertyList,
        currentData: currentData,
        queryFunction: queryFunction,
        handleCancel: () => navigateOnCancel(navigateTo),
        GroupDetailsComponent: GroupDetailsComponent,
        afterDispatch: afterDispatch,
    }

    return (
        <GenericForm
            {...EditProps}
        />
    )
}