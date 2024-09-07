import React from 'react';
import Grid2 from '@mui/material/Unstable_Grid2/Grid2';
import { Typography, Paper } from '@mui/material';
import { commonFontSize, commonFontWeight } from '../../../Helpers/ConstantProperties';

const GenericTableHeading = ({ processData = [] }) => {
    return (
        <Paper elevation={1} className="py-2 mx-2 bg-primary-subtle rounded" sx={{ overflow: 'hidden' }}>
            <Grid2 container spacing={2} sx={{ textAlign: 'center', width: '100%', margin: 0 }}>
                {processData.map((heading, index) => (
                    <Grid2
                        key={index}
                        lg={heading.lg}
                        md={heading.md}
                        xs={12}
                        container
                        spacing={3}
                        direction="column"
                        alignItems="center"
                        sx={{ justifyContent: 'center' }}
                    >
                        <Typography
                            py={1}
                            fontSize={commonFontSize}
                            fontWeight={commonFontWeight}
                            noWrap
                        >
                            {heading.label}
                        </Typography>
                    </Grid2>
                ))}
            </Grid2>
        </Paper>
    );
};

export default GenericTableHeading;
