import { Button, Dialog, DialogActions } from "@mui/material"
import { useState } from "react"

export const CommonAlert = ({ handleRedirect, children, showAlertDialog = true }) => {
    const [open, setOpen] = useState(true);

    if (!showAlertDialog) return <>
        {children}
    </>

    return (
        <Dialog
            open={open}
            className="w-100"
            aria-labelledby="responsive-dialog-title"
        >
            {children}
            <DialogActions>
                <Button onClick={() => {
                    setOpen(false)
                    if (handleRedirect) { handleRedirect() }
                }} autoFocus>
                    ok
                </Button>
            </DialogActions>
        </Dialog>
    )
}