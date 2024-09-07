import { useReducer, useRef } from "react";
import AddProperty from "./AddProperty";
import { ADD_PROPS_TYPE, formReducer, REMOVE_PROPS } from "../../Helpers/helpers";
import { Button } from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import { ADD_PROPERTY_GROUP_COLOR } from "../../Helpers/ConstantProperties";

export function AddPropertyGroups(props) {
    const [state, dispatch] = useReducer(formReducer, {});
    const divRef = useRef()
    const onChange = (e, data) => {
        var obj = { type: ADD_PROPS_TYPE, payload: e }

        if (data.manageState) {
            obj = { afterDispatch: props.afterDispatch, payload: e, type: data.item.type, propList: props.propList }
        }
        dispatch(obj);
    };

    const handleSubmit = () => {
        props.onChange(state);
        dispatch({ type: REMOVE_PROPS })
    }

    return (
        <Grid2 container display="flex"
            sx={{
                width: '100%',
                backgroundColor: ADD_PROPERTY_GROUP_COLOR,
                pb: { xs: 2, lg: 0 },
                justifyContent: { xs: 'center' }
            }}
            ref={divRef}
        >
            {props.propList.map((element, index) => {
                return (
                    <AddProperty deleteField={props.deleteField}
                        required={props.required}
                        key={index}
                        data={element}
                        currentValue={state[element.item.name] ? state[element.item.name] : null}
                        onChange={(e) => onChange(e, element)}
                    />
                );
            })}
            <Button variant="contained" color="success" sx={{ alignSelf: "center", mt: { sm: 0, lg: 2 } }} onClick={handleSubmit}>
                +
            </Button>
        </Grid2>

    );
}
