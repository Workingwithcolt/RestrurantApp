import React from 'react';
import { Paper, Typography, Box, Avatar } from '@mui/material';
import CardActionButtons from '../GenericComponents/DataView/CardActionButtons';
import { useNavigate } from 'react-router-dom';
import { commonFontSize, commonFontWeight, EDIT_RESTRAURANT, RESTRAURANTS, UPDATE_ON_RESTAURENT } from '../../Helpers/ConstantProperties';
import { serviceHelpers } from '../../Helpers/ServiceHelpers';
import { GenericErrorComponent, GenericSuccessComponent } from '../GenericComponents/FormComponent/GenericAlertComponent';
import { checkValue, getInitials, stringToColor } from '../../Helpers/helpers';
import GenericSkeleton from '../GenericComponents/DataView/GenericSkeleton';
import Grid2 from '@mui/material/Unstable_Grid2/Grid2';

const RestraurantCard = ({ item }) => {
    const navigate = useNavigate();

    const successMessage = "Restaurent Successfully Deleted";

    const deleteRestaurentQueryFunction = async (auth) => {
        return await serviceHelpers.deleteRestaurent(auth, item.id);
    };

    const onDelete = {
        ErrorComponent: ({ error }) => <GenericErrorComponent error={error} />,
        SuccessComponent: ({ data }) => <GenericSuccessComponent data={data} message={successMessage} />,
        navigateTo: RESTRAURANTS,
        queryFunction: deleteRestaurentQueryFunction,
        queryKeyValue: UPDATE_ON_RESTAURENT,
    };

    const onEdit = () => {
        navigate(EDIT_RESTRAURANT, { state: item });
    };

    if (item.showSkeleton) return <GenericSkeleton />;

    const removeExtraSpace = {
        m: 0, p: 0
    }

    return (
        <Paper key={item.id} sx={{ padding: '0.3rem', minWidth: 0 }} elevation={2}>
            <Grid2 container alignItems="center" spacing={2}>
                <Grid2 xs={12} sm={4} md={3} lg={3.5}>
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <Avatar sx={{ bgcolor: stringToColor(item.restaurantName), width: 35, height: 35, marginRight: 2, fontSize: commonFontSize }}>
                            {getInitials(item.restaurantName)}
                        </Avatar>
                        <Grid2 lg={12} {...removeExtraSpace}>
                            <Grid2 {...removeExtraSpace}>
                                <Typography
                                    variant="subtitle2"
                                    className='text-break text-wrap'
                                    color={"primary.main"}
                                    sx={{
                                        fontWeight: commonFontWeight,
                                        textAlign: { xs: 'left' }
                                    }}
                                >
                                    {checkValue(item.restaurantName)}
                                </Typography>
                            </Grid2>
                            <Grid2 {...removeExtraSpace}>
                                <Typography
                                    className='text-break text-wrap'
                                    variant="body2"
                                    sx={{
                                        textAlign: { xs: 'left' },
                                        color: 'text.secondary'
                                    }}
                                >
                                    {checkValue(item.address)}
                                </Typography>
                            </Grid2>
                        </Grid2>
                    </Box>
                </Grid2>
                <Grid2 xs={12} sm={3} md={2} lg={3.5}>
                    <Typography
                        variant="body2"
                        sx={{
                            textAlign: { xs: 'left', sm: 'center' },
                            paddingLeft: { xs: '0.3rem' },
                            color: 'text.secondary'
                        }}
                    >
                        {checkValue(item.phoneNumber)}
                    </Typography>
                </Grid2>
                <Grid2 xs={12} sm={6} md={4} lg={3}>
                    <Typography
                        variant="body2"
                        sx={{
                            textAlign: { xs: 'left', },
                            paddingLeft: { xs: '0.3rem' },
                            color: 'text.secondary'
                        }}
                        className='text-truncate'
                    >
                        {checkValue(item.restaurantEmail)}
                    </Typography>
                </Grid2>
                <Grid2 xs={12} sm={6} md={3} lg={2} sx={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}>
                    <CardActionButtons onEdit={onEdit} onDelete={onDelete} />
                </Grid2>
            </Grid2>
        </Paper>
    );
};

export default RestraurantCard;