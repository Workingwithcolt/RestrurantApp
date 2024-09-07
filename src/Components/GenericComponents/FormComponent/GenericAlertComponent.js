import { DialogContent } from "@mui/material"
import { DecodeServerError } from "../../../Helpers/helpers"

export const GenericErrorComponent = ({ error }) => {
    let errMessage = DecodeServerError(error)
    return (<DialogContent>{errMessage}</DialogContent>)
}

export const GenericSuccessComponent = ({ data, message }) => {
    let SuccessMsg = ` ${message}  with id ${data.id}`
    return (<DialogContent>{SuccessMsg}</DialogContent>)
}