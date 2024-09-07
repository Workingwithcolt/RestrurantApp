import { IconButton, Button, Box } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import AddCircleOutlineRoundedIcon from '@mui/icons-material/AddCircleOutlineRounded';

const ActionButtons = ({ isEditing, onEdit, onDelete, onCancel, enableAdd = false, onAdd = () => { } }) => {
    if (enableAdd) {
        return (
            <Box display="flex" alignItems="center">
                <IconButton onClick={() => onAdd()}>
                    <AddCircleOutlineRoundedIcon color="success" />
                </IconButton>
            </Box>
        );
    }

    if (isEditing) return <Button color='error' onClick={onCancel}>Cancel</Button>;

    return (
        <Box display="flex" alignItems="center">
            <IconButton onClick={onEdit}>
                <EditIcon color="success" />
            </IconButton>
            <IconButton onClick={onDelete}>
                <DeleteIcon color="error" />
            </IconButton>
        </Box>
    );
}

export default ActionButtons;
