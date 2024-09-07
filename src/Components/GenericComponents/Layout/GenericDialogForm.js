import React from 'react';
import { Dialog } from "@mui/material";
import GenericForm from "../FormComponent/GenericForm";
import { GenericVerifyComponent } from "../VerifyComponent/FirmVerifyComponent";
import { GenericErrorComponent, GenericSuccessComponent } from "../FormComponent/GenericAlertComponent";
import DialogHeader from './DialogHeader';

function GenericDialogForm({
    dialog,
    setOpen,
    title,
    handleCancel,
    dialogTitle,
    queryFunction,
    formPropertyList,
    queryKeyValue,
    navigateOnSuccess,
    successMessage,
    currentData = {},
    enableClear = true,
    enableVerify = true,
    VerifyAlertComponent = GenericVerifyComponent,
    addButtonText = "Add"
}) {
    const FormProperties = {
        ErrorComponent: ({ error }) => <GenericErrorComponent error={error} />,
        SuccessComponent: ({ data }) => <GenericSuccessComponent data={data} message={successMessage} />,
        addButtonText: addButtonText,
        navigateTo: navigateOnSuccess,
        queryKeyValue: queryKeyValue,
        enableVerify: enableVerify,
        VerifyAlertComponent: VerifyAlertComponent,
        queryFunction: queryFunction,
        buttonClasses: "",
        handleCancel: handleCancel,
        formTitle: dialogTitle,
        propertyList: formPropertyList,
        currentData: currentData,
        enableClear: enableClear
    }

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <Dialog
            open={dialog}
            maxWidth="md"
            onClose={handleClose}
        >
            <DialogHeader title={title} handleCancel={handleClose} />
            <GenericForm {...FormProperties} />
        </Dialog>
    );
}

export default GenericDialogForm;