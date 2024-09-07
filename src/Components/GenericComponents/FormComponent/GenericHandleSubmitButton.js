import { useId } from "react";
import { HandleFormButton } from "./HandleFormButton";


export const GenericHandleSubmitButton = ({
    queryFunction,
    enableVerify = false,
    VerifyAlertContentComponent = undefined,
    ErrorComponent,
    SuccessComponent,
    navigateTo,
    ButtonText = undefined,
    queryKeyValue,
    CutomButtonComponent = undefined,
}) => {
    const id = useId()
    const mutationQueryFunction = async (token, khID = null) => {
        return await queryFunction(token, khID)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
    };

    return (
        <form id={id} onSubmit={handleSubmit}>
            <HandleFormButton
                navigateTo={navigateTo}
                ErrorComponent={ErrorComponent}
                SuccessComponent={SuccessComponent}
                addButtonText={ButtonText}
                querryFunction={mutationQueryFunction}
                queryKeyValue={queryKeyValue}
                enableVerify={enableVerify}
                VerifyAlertContentComponent={VerifyAlertContentComponent}
                CutomButtonComponent={CutomButtonComponent}
                id={id}
            />
        </form>
    )
}