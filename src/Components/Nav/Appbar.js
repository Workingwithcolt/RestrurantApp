import React, { useState, useContext } from "react";
import { AppBar, Toolbar, IconButton, Typography, Menu, MenuItem } from "@mui/material";
import LogoutButton from "./LogoutButton";
import { AuthContext } from "../Auth/Auth";
import { AccountCircle } from "@mui/icons-material";
import { MenuContext } from "../Contexts/MenuContext";
import MenuIcon from '@mui/icons-material/Menu';

const Appbar = () => {
    const [anchorEl, setAnchorEl] = useState(null);
    const { currentUserObject } = useContext(AuthContext);
    const { handleDrawerToggle } = useContext(MenuContext);

    const handleMenuOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
    };

    const menuItems = [
        { label: "Logout", component: <LogoutButton onClose={handleMenuClose} /> },
    ];

    var CurrentRole = "";

    return (
        <AppBar
            position="fixed"
            sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
            className="container-fluid w-100 bg-light">
            <Toolbar>
                <IconButton
                    onClick={handleDrawerToggle}
                    edge="start"
                    color="inherit"
                    aria-label="open drawer"
                    sx={{ mr: 2, display: { xs: 'block', sm: 'block', md: 'block', lg: 'none' } }}
                >
                    <MenuIcon className="fs-2" color="primary" />
                </IconButton>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>

                </Typography>
                <div>
                    <div className="d-flex">
                        <div className="border-start d-none d-md-block border-black"></div>
                        <div>
                            <IconButton
                                size="large"
                                aria-label="account of current user"
                                aria-controls="menu-appbar"
                                aria-haspopup="true"
                                onClick={handleMenuOpen}
                                color="inherit"
                            >
                                <AccountCircle className="fs-2" color="warning" />
                            </IconButton>
                        </div>
                        <div className="d-flex flex-column text-wrap w-75 d-none d-md-block text-body fw-medium text-truncate">
                            <div className="text-truncate">{currentUserObject.displayName}</div>
                            <div className="fw-normal">
                                {CurrentRole}
                            </div>
                        </div>
                    </div>
                    <Menu
                        id="menu-appbar"
                        anchorEl={anchorEl}
                        open={Boolean(anchorEl)}
                        onClose={handleMenuClose}
                        className="p-2"
                    >
                        {menuItems.map((item, index) => (
                            <MenuItem key={index} className="px-2 menu-item">
                                {item.component || item.label}
                            </MenuItem>
                        ))}
                    </Menu>
                </div>
            </Toolbar>
        </AppBar>
    );
};

export default Appbar;