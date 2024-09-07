import React, { useContext } from 'react';
import { List, ListItem, ListItemText, Toolbar, Drawer, Divider } from '@mui/material';
import { NavLink, useLocation } from 'react-router-dom';
import { drawerWidth } from '../../Helpers/ConstantProperties';
import { MenuContext } from '../Contexts/MenuContext';
import { menuItems } from '../../Helpers/ExtraProperties';
import { PRIMARY_COLOR, SECONDARY_COLOR } from '../../Helpers/ConstantProperties'

export default function DrawerMenu() {
    const { mobileOpen, handleDrawerClose, handleDrawerTransitionEnd } = useContext(MenuContext);
    const location = useLocation();
    const currentPath = location.pathname;

    const handleClick = (e,disabledPath) => {
        if(disabledPath) e.preventDefault()
    }

    const drawer = (
        <div style={{ backgroundColor: PRIMARY_COLOR }}>
            <Toolbar />
            <List>
                {menuItems.map((item, index) => {
                    const isMenuSelected = item.path === currentPath;
                    const disabledPath = !item.path
                    return (
                        <div key={index} className='ms-1'>
                            <ListItem
                                key={index}
                                disablePadding
                                className={`p-0 mt-1 mb-1 rounded-start ${isMenuSelected ? 'bg-white text-primary' : ''}`}
                                style={{
                                    backgroundColor: isMenuSelected ? SECONDARY_COLOR : PRIMARY_COLOR,
                                    opacity: disabledPath ? 0.5 : 1,
                                    pointerEvents: disabledPath ? 'none' : 'auto',
                                }}
                            >
                                <NavLink
                                    onClick={(e) => handleClick(e, disabledPath)}
                                    to={item.path}
                                    className="text-decoration-none text-center w-100 p-2 d-block"
                                    style={{
                                        color: isMenuSelected ? PRIMARY_COLOR : SECONDARY_COLOR,
                                        textDecoration: 'none',
                                    }}
                                >
                                    <ListItemText
                                        primary={
                                            <strong>{item.text}</strong>
                                        }
                                    />
                                </NavLink>
                            </ListItem>
                            {index < menuItems.length - 1 && <Divider style={{ height: '0.125rem', margin: 'auto', backgroundColor: SECONDARY_COLOR }} />}
                        </div>
                    );
                })}
            </List>
        </div>
    );

    return (
        <>
            <Drawer
                variant="temporary"
                open={mobileOpen}
                onTransitionEnd={handleDrawerTransitionEnd}
                onClose={handleDrawerClose}
                ModalProps={{
                    keepMounted: true, // Better open performance on mobile.
                }}
                sx={{
                    display: { xs: 'block', sm: 'block', md: 'block', lg: 'none' },
                    '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                }}
            >
                {drawer}
            </Drawer>
            <Drawer
                variant="permanent"
                sx={{
                    display: { xs: 'none', sm: 'none', md: 'none', lg: 'block' },
                    '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                }}
                open
            >
                {drawer}
            </Drawer>
        </>
    );
}
