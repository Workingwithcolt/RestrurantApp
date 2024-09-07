import React from 'react';
import { Box, CardActions } from '@mui/material';
import { GenericHandleSubmitButton } from '../FormComponent/GenericHandleSubmitButton';
import EditRoundedIcon from '@mui/icons-material/EditRounded';
import DeleteRoundedIcon from '@mui/icons-material/DeleteRounded';
import { GenericVerifyComponent } from '../VerifyComponent/FirmVerifyComponent';
import { GenericButton } from '../Buttons/GenericButton';

const CardActionButtons = ({ onEdit, onDelete, known }) => {

  if (!onEdit || !onDelete) return <></>

  const onDeleteProps = {
    CutomButtonComponent: ({ onClick }) => (
      <GenericButton
        disable={known}
        IconsComponent={<DeleteRoundedIcon />}
        onClick={onClick}
        type={'submit'}
        ariaLable={'delete'}
        color="error"
        size="small"
      />
    ),
    enableVerify: true,
    VerifyAlertContentComponent: GenericVerifyComponent,
    ...onDelete
  }

  return (
    <Box className="d-flex justify-content-start align-items-center w-100">
      <CardActions className='w-100 justify-content-end'>
        <GenericButton
          IconsComponent={<EditRoundedIcon />}
          onClick={onEdit}
          type={'button'}
          ariaLable={'edit'}
          color="success"
          size="small"
        />
        <GenericHandleSubmitButton
          {...onDeleteProps}
        />
      </CardActions>
    </Box>
  );
};

export default CardActionButtons;