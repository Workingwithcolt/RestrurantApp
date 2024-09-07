import React from 'react';
import { Dialog, DialogContent } from '@mui/material';
import DialogHeader from "../../GenericComponents/Layout/DialogHeader"

const GenericDialog = ({ content, open, setOpen, title }) => {
    const handleClose = () => {
        setOpen(false);
    };

    return (
        <Dialog open={open} onClose={handleClose} maxWidth="md" fullWidth>
            <DialogHeader title={title} handleCancel={handleClose} />
            <DialogContent dividers>
                {content}
            </DialogContent>
        </Dialog>
    );
};

export default GenericDialog;