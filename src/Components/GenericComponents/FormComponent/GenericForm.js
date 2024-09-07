import React, { useId, useReducer, useRef } from 'react';
import { ADD_GROUP_PROPS, ADD_PROPS_TYPE, deepCopyObject, FileReducer, formReducer, REMOVE_GROUP_PROPS, REMOVE_ITEM_FILEDATA, REMOVE_PROPS, REMOVE_PROPS_TYPE, UPDATE_GROUP_PROPS_TYPE } from '../../../Helpers/helpers';
import AddProperty from '../../AddProperties/AddProperty';
import { HandleFormButton } from './HandleFormButton';
import Grid2 from '@mui/material/Unstable_Grid2/Grid2';
import { SchemaTypes } from '../../../Helpers/ExtraProperties';
import CenteredPaper from '../Layout/CenteredPaper';
import GenericFormHeader from './GenericFormHeader';
import { AddPropertyGroups } from '../../AddProperties/AddPropertyGroups';


const GenericForm = ({
    queryFunction,
    queryKeyValue,
    ErrorComponent,
    SuccessComponent,
    GroupDetailsComponent,
    formClass = " p-2 text-dark bg-opacity-10 rounded-2  ",
    addButtonText,
    navigateTo,
    handleCancel,
    buttonClasses,
    enableVerify = false,
    VerifyAlertComponent = undefined,
    formTitle,
    propertyList,
    currentData,
    CustomButtonComponent = undefined,
    clearButtonText = 'Clear',
    enableClear = false,
    showAlertDialog,
    afterDispatch = () => { }
    //through that method u have access of changing the state with the any value input , dropdown etc..
}) => {
    const [state, dispatch] = useReducer(formReducer, currentData);
    const [file, setfile] = useReducer(FileReducer, []);
    const formRef = useRef();
    const id = useId()

    const handleDelete = (element, data) => {
        formRef.current.reset();
        if (
            data.item.type === SchemaTypes.IMAGE
            || data.item.type === SchemaTypes.file) {
            setfile({ type: REMOVE_ITEM_FILEDATA, element });
        } else {
            dispatch({ type: REMOVE_PROPS_TYPE, payload: data.item.name });
        }
    }

    const handleClear = () => {
        dispatch({ type: REMOVE_PROPS });
        formRef.current.reset();
    }

    const Onchange = (e, data) => {
        switch (data.item.type) {
            case SchemaTypes.IMAGE || SchemaTypes.file:
                setfile({
                    type: data.item.type,
                    payload: { e: e, name: data.item.name }
                });
                break;
            default:
                var obj = { type: ADD_PROPS_TYPE, payload: e }
                if (data.manageState) {
                    obj = { afterDispatch: afterDispatch, payload: e, type: data.item.type }
                }
                dispatch(obj);
        }

    }

    const GetCurrentValue = (data) => {
        if (
            data.item.type === SchemaTypes.IMAGE
            || data.item.type === SchemaTypes.file) {
            return file.find(item => item.name === data.item.name);
        } else {
            return state[data.item.name] ? state[data.item.name] : null
        }
    }

    const handleSubmit = async (e) => {
        const form = e.currentTarget;
        e.preventDefault();
        if (form.checkValidity() === true) {

        } else {
            form.classList.add("was-validated");
        }
    };

    const mutationQueryFunction = async (auth) => {
        return await queryFunction(state, auth, file)
    }

    var groups = [];
    var singleProps = [];

    propertyList.forEach((data) => {
        if (data.groupName) {
            groups.push(data);
        }
        else {
            singleProps.push(data);
        }
    });

    return (
        <div>
            <GenericFormHeader title={formTitle} />
            <CenteredPaper>
                <form
                    id={id}
                    ref={formRef}
                    onSubmit={handleSubmit}
                    className={"needs-validation " + formClass}
                    noValidate
                >
                    <div className='navbar-nav-scroll'>
                        <Grid2 container>
                            {singleProps.map((data, index) => {
                                return (
                                    <AddProperty
                                        deleteField={(element) => {
                                            handleDelete(element, data);
                                        }}
                                        key={index}
                                        data={data}
                                        currentValue={GetCurrentValue(data)}
                                        onChange={(e) => {
                                            Onchange(e, data)
                                        }}
                                    />
                                );
                            })}
                            {groups.map((data) => {
                                return (
                                    <AddPropertyGroups
                                        deleteField={(element) => handleDelete(element)}
                                        key={data.groupName}
                                        propList={deepCopyObject(data.group)}
                                        data={data}
                                        state={state}
                                        afterDispatch={afterDispatch}
                                        formRef={formRef}
                                        onChange={(e) => {
                                            dispatch({ type: ADD_GROUP_PROPS, payload: { name: data.groupName, value: e, uniqueIdProp: data.uniqueIdProp } });
                                        }}
                                    />
                                )
                            })}
                        </Grid2>
                    </div>
                    {GroupDetailsComponent && <div>
                        <GroupDetailsComponent data={state} clearField={(propName, index) => dispatch({ type: REMOVE_GROUP_PROPS, name: propName, index: index })}
                            editProp={(e, propName, index, groupName) => dispatch({ type: UPDATE_GROUP_PROPS_TYPE, payload: { name: propName, index: index, value: e, groupName: groupName } })}
                        />
                    </div>}
                    <HandleFormButton
                        navigateTo={navigateTo}
                        ErrorComponent={ErrorComponent}
                        SuccessComponent={SuccessComponent}
                        addButtonText={addButtonText}
                        querryFunction={mutationQueryFunction}
                        queryKeyValue={queryKeyValue}
                        enableVerify={enableVerify}
                        buttonClasses={buttonClasses}
                        VerifyAlertContentComponent={VerifyAlertComponent}
                        CutomButtonComponent={CustomButtonComponent}
                        handleCancel={handleCancel}
                        showAlertDialog={showAlertDialog}
                        enableClear={enableClear}
                        handleClear={handleClear}
                        clearButtonText={clearButtonText}
                        id={id}
                    />
                </form>
            </CenteredPaper>
        </div>
    )
}
export default GenericForm;
