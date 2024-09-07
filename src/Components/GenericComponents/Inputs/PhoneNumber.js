import { Typography } from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import { MuiTelInput } from 'mui-tel-input';
import { inValidatePattern } from "../../../Helpers/helpers";

export const PhoneNumberInput = ({ props, controlProps }) => {
    const required = controlProps.required;

    const handleChange = (newValue) => {
        props.onChange({ name: props.data.item.name, value: newValue });

        props.data.item.error = inValidatePattern(controlProps.pattern, props.data.item.helperText, newValue);
    };

    return (
        <Grid2 container spacing={1} direction={'column'} {...props.data.attributes} p={1} width={'100%'}>
            <Grid2>
                <Typography className="fw-semibold">
                    {props.data.item.displayName} {required ? "*" : ''}
                </Typography>
            </Grid2>
            <Grid2 >
                <MuiTelInput
                    className="bg-light"
                    size="small"
                    fullWidth
                    value={props.currentValue} onChange={handleChange}
                    defaultCountry="IN"
                    inputProps={{
                        inputMode:props.data.inputMode,
                        pattern: controlProps.pattern,
                        className: "form-control " + props.data.inputFieldClass,
                        id: "floatingInput" + props.data.item.name,
                        name: props.data.item.name,
                        required: controlProps.required
                    }}
                    helperText={ props.data.item.error}
                    error={!!props.data.item.error && props.data.item.error !== ''}
                />
            </Grid2>
        </Grid2>
    );
};