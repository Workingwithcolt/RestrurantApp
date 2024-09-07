import { ADMIN_USER_LEVEL_NAME, MODERATOR_LEVEL_NAME, USER_USER_LEVEL_NAME } from "./ConstantProperties";
import { NO_DATA, SchemaTypes, known_Custom_Types } from "./ExtraProperties";
import { useMediaQuery, useTheme } from "@mui/material";

export const USER_MUST_BE_PRESENT = "UserMustBePresent";
export const USER_MUST_BE_ABSENT = "UserMustBeAbsent";
export const CONTENT_TYPE = 'Content-Type';

export const FETCHING_ITEMS_LIMIT = 50;

export function deepCopyObject(fromObject) {
    return JSON.parse(JSON.stringify(fromObject));
}
export function getInitials(inputString) {
    const words = inputString.split(' ');
    let abbreviation = '';
    for (const word of words) {
        abbreviation += word[0];
    }

    return abbreviation;
}

export const getBackgroundColor = (userLevel) => {
    switch (userLevel) {
        case ADMIN_USER_LEVEL_NAME:
            return 'lightblue';
        case MODERATOR_LEVEL_NAME:
            return 'lightcoral';
        case USER_USER_LEVEL_NAME:
            return 'Thistle';
        default:
            return 'lightgrey';
    }
};


export const getInitialInputProps = (props) => {
    var controlProps = {
        required: props.data.item.required,
        placeholder: props.data.item.displayName
    }

    switch (props.data.item.type) {
        case SchemaTypes.String:
            controlProps.type = SchemaTypes.String;
            break;
        case SchemaTypes.Number:
            controlProps.type = SchemaTypes.Number;
            break;
        case SchemaTypes.DATE:
            controlProps.type = SchemaTypes.DATE;
            break;
        case SchemaTypes.radio:
            controlProps.type = SchemaTypes.radio;
            break;
        case SchemaTypes.file:
            controlProps.type = SchemaTypes.file;
            break;
        case SchemaTypes.DROP_DOWN:
            controlProps.type = SchemaTypes.DROP_DOWN;
            break;
        case SchemaTypes.checkbox:
            controlProps.type = SchemaTypes.checkbox;
            break;
        case SchemaTypes.headline:
            controlProps.type = SchemaTypes.headline;
            break;
        case SchemaTypes.IMAGE:
            controlProps.type = SchemaTypes.IMAGE;
            break;
        case SchemaTypes.USER_LEVEL_DROPDOWN:
            controlProps.type = SchemaTypes.USER_LEVEL_DROPDOWN;
            break;
        case SchemaTypes.TextArea:
            controlProps.type = SchemaTypes.TextArea
            break;
        case SchemaTypes.KN_PAN:
        case SchemaTypes.KN_PIN:
        case SchemaTypes.HSNCODE:
        case SchemaTypes.GSTRATE:
        case SchemaTypes.QUANTITY:
        case SchemaTypes.SALERATE:
        case SchemaTypes.PHONE_NUMBER:
        case SchemaTypes.KN_GSTIN:
        case SchemaTypes.ALPHA_NUM:
        case SchemaTypes.DESIGNATION:
        case SchemaTypes.CITY:
        case SchemaTypes.EMAIL:
        case SchemaTypes.ITEMCODE:
        case SchemaTypes.PINCODE:
        case SchemaTypes.URL:
            controlProps.pattern = known_Custom_Types[props.data.item.type];
            break;
        default:
            break;
    }

    if (props.currentValue) {
        controlProps.value = props.currentValue
    } else {
        controlProps.value = "";
    }

    if (props.disabled) {
        controlProps.disabled = props.disabled;
    }

    if (props.data.item.maxLength) {
        controlProps.maxLength = props.data.item.maxLength;
    }

    if (props.data.item.min) {
        controlProps.min = props.data.item.min
    }

    if (props.data.item.accept) {
        controlProps.accept = props.data.item.accept
    }
    return controlProps;
}

export const DecodeServerError = (error) => {
    var messageRegex = /Message: (.+)/;
    var extractedMessage = null
    try {
        var match = error.match(messageRegex);
        extractedMessage = match ? match[1] : null;
    } catch (e) {
        extractedMessage = "SomeThing Went Wrong !!"
    }
    return extractedMessage;
}

export const SMALL_SCREEN = 'isSmallScreen';
export const MEDIUM_SCREEN = 'isMediumScreen';
export const LARGE_SCREEN = 'isLargeScreen';
export const EXTRA_LARGE_SCREEN = 'isExtraLargeScreen';

export const useScreenSize = () => {
    const theme = useTheme();

    const isSmallScreen = useMediaQuery(theme.breakpoints.between('xs', 'sm'));
    const isMediumScreen = useMediaQuery(theme.breakpoints.between('sm', 'md'));
    const isLargeScreen = useMediaQuery(theme.breakpoints.between('md', 'lg'));
    const isExtraLargeScreen = useMediaQuery(theme.breakpoints.between('lg', 'xl'));

    if (isSmallScreen) {
        return SMALL_SCREEN;
    } else if (isMediumScreen) {
        return MEDIUM_SCREEN;
    } else if (isLargeScreen) {
        return LARGE_SCREEN;
    } else if (isExtraLargeScreen) {
        return EXTRA_LARGE_SCREEN;
    } else {
        return 'Not Defined';
    }
}
export function getCategoryOptions(categoryObject) {
    return categoryObject.map((category) => ({
        value: category,
        label: category,
    }));
}




export const addContryCode = (code, phoneNumber) => {
    if (phoneNumber?.length <= 2) {
        return phoneNumber;
    }
    return phoneNumber?.startsWith(code) ? phoneNumber : (code + "" + phoneNumber);
}

export function stringToColor(string) {
    let hash = 0;
    let i;

    for (i = 0; i < string.length; i += 1) {
        hash = string.charCodeAt(i) + ((hash << 5) - hash);
    }

    let color = '#';

    for (i = 0; i < 3; i += 1) {
        const value = (hash >> (i * 8)) & 0xff;
        color += `00${value.toString(16)}`.slice(-2);
    }

    return color;
}

//   This function ensures that when data is displayed in rows, any incomplete
//   row is completed with skeletons, and if there are remaining items that
//   don't fill a new row, it adds enough skeletons to fill that row too.

//   For example, if we are displaying data in rows of 4 items each:
//  If we have 18 items, that means we can fill 4 complete rows (4 * 4 = 16)
//  There will be 2 items in the next row.
//  To complete this row, we need 2 skeletons.
//  Additionally, if the requirement is to fill an entire row whenever it is partially filled,
//  then another 4 skeletons might be needed for the next row.

const getSkeletonCount = (count, dataLength = 0) => {
    const mod = dataLength % count;
    return (count - mod) + count
}

export function getDataWithSkeleton(data = [], showSkeleton, count = 1) {
    const returnData = [];

    returnData.push(data);

    const SkeletonCount = getSkeletonCount(count, data.length);
    const skeletons = [];

    for (let i = 0; i < SkeletonCount; i++) {
        skeletons.push({ showSkeleton: true });
    }

    if (showSkeleton) {
        returnData.push(skeletons);
    }

    return returnData;
}

const replaceDoubledEntries = (groupArray, payload) => {
    const existingObject = groupArray.find(obj => obj[payload.uniqueIdProp] === payload.value[payload.uniqueIdProp]);
    existingObject ? Object.assign(existingObject, payload.value) : groupArray.push(payload.value);
}

export const ADD_PROPS_TYPE = "Add_Property";
export const REMOVE_PROPS_TYPE = "Remove_Property";
export const REMOVE_ITEM_FILEDATA = "Remove_Item_FileDatas";
export const REMOVE_PROPS = "Remove_All_Property";
export const ADD_GROUP_PROPS = "Add_Group_Property";
export const REMOVE_GROUP_PROPS = "Remove_Group_Property";
export const UPDATE_GROUP_PROPS_TYPE = "Update_Group_Property";

export const formReducer = (state, action) => {
    var currentState = deepCopyObject(state);

    switch (action.type) {
        case ADD_PROPS_TYPE:
            currentState[action.payload.name] = action.payload.value;
            if (currentState[action.payload.name] === '') delete currentState[action.payload.name];
            break;
        case ADD_GROUP_PROPS:
            if (Object.keys(action.payload.value).length === 0) break;
            if (!currentState[action.payload.name]) {
                currentState[action.payload.name] = [];
            }
            currentState.isGroupEdited = true;
            if (action.payload.uniqueIdProp) {
                replaceDoubledEntries(currentState[action.payload.name], action.payload);
                break;
            }
            currentState[action.payload.name].push(action.payload.value);
            break;
        case REMOVE_GROUP_PROPS:
            currentState.isGroupEdited = true;
            currentState[action.name].splice(action.index, 1);
            break;
        case REMOVE_PROPS_TYPE:
            delete currentState[action.payload];
            break;
        case UPDATE_GROUP_PROPS_TYPE:
            currentState.isGroupEdited = true;
            const currentObject = currentState[action.payload.groupName][action.payload.index];
            currentObject[action.payload.name] = action.payload.value;
            break;
        case REMOVE_PROPS:
            currentState = {}
            break;
        default:

    }
    if (action.afterDispatch) {
        currentState = action.afterDispatch(currentState, action.payload, action.type, action.propList)
    }

    return currentState;
};

export const FileReducer = (file, action) => {
    var newFiles = [...file];

    switch (action.type) {
        case SchemaTypes.IMAGE:
        case SchemaTypes.file:
            newFiles.push(action.payload.e);
            break;
        case REMOVE_ITEM_FILEDATA:
            let indexToRemove = newFiles.findIndex(element => element.name === action.element);
            if (indexToRemove !== -1) {
                newFiles.splice(indexToRemove, 1);
            }
            break;
        default:
    }
    return newFiles;
}


export const checkValue = (value) => {
    if (value === undefined || value === "" || value === null) {
        return NO_DATA
    }
    return value
}

export const inValidatePattern = (pattern, helperText, inputValue) => {
    var error = false
    if (pattern) {
        error = !new RegExp(pattern).test(inputValue);
    }

    if (inputValue === "") {
        error = false;
    }

    return error ? helperText || 'Enter valid Input' : '';
}
