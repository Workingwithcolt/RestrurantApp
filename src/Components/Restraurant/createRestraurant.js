import { serviceHelpers } from '../../Helpers/ServiceHelpers';
import { restraurantProps } from '../../Helpers/ExtraProperties';
import { NEW_PRODUCTS, UPDATE_ON_RESTAURENT } from '../../Helpers/ConstantProperties';
import GenericForm from '../GenericComponents/FormComponent/GenericForm';
import { GenericErrorComponent, GenericSuccessComponent } from '../GenericComponents/FormComponent/GenericAlertComponent';
import { GenericVerifyComponent } from '../GenericComponents/VerifyComponent/FirmVerifyComponent';

const CreateRestraurant = () => {
    const successMessage = "Restraurant Added SuccessFully "
    const queryFunction = async (state, auth) => {
        return await serviceHelpers.createResturent(auth, state)
    }

    const invalidateQueryKey = UPDATE_ON_RESTAURENT;

    const newFormProps = {
        formTitle: "Add Restraurant",
        propertyList: restraurantProps,
        queryFunction: queryFunction,
        queryKeyValue: invalidateQueryKey,
        navigateTo: NEW_PRODUCTS,
        ErrorComponent: ({ error }) => <GenericErrorComponent error={error} />,
        SuccessComponent: ({ data }) => <GenericSuccessComponent data={data} message={successMessage} />,
        addButtonText: "Add",
        enableVerify: true,
        VerifyAlertComponent: GenericVerifyComponent,
        buttonClasses: "",
        currentData: {},
        enableClear: true
    }

    return (
        <GenericForm
            {...newFormProps}
        />
    )
}
export default CreateRestraurant
