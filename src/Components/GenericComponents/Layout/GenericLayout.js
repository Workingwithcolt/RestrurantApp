import React from 'react';
import Box from '@mui/material/Box';
import Appbar from '../../Nav/Appbar';
import { Toolbar } from '@mui/material';
import { drawerWidth } from '../../../Helpers/ConstantProperties';
import DrawerMenu from '../../Menu/DrawerMenu';

function GenericLayout({ Component }) {

    return (
        <>
            <Appbar />
            <Box display={"flex"} flexDirection={"column"} className="h-100 overflow-auto" >
                <Box>
                    <Toolbar />
                </Box>
                <Box display={"flex"} sx={{ flexGrow: 1 }} className="overflow-auto">
                    <Box
                        component="nav"
                        sx={{ width: { lg: drawerWidth }, flexShrink: { sm: 0 } }}
                        aria-label="mailbox folders">
                        <DrawerMenu />
                    </Box>
                    <Box sx={{ flexGrow: 1 }} className="overflow-auto">
                        {
                            Component
                        }
                    </Box>
                </Box>
            </Box>
        </>
    );
}

export default GenericLayout;
