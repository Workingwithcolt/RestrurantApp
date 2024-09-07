import { Button, Menu, MenuItem, Tabs } from "@mui/material";
import { useState } from "react";
import NavItemTabButton from "./NavItemTabButton";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

function DetailPaneWithDropdown({ item, tabData, paneID }) {
    const [showMenu, setShowMenu] = useState(null);
    const [selectedTabIndex, setSelectedTabIndex] = useState(0);

    const selectedTab = tabData[selectedTabIndex];

    const handleTabChange = (tabIndex) => {
        setSelectedTabIndex(tabIndex);
        handleClose();
    };

    const handleClick = (event) => {
        setShowMenu(event.currentTarget);
    };

    const handleClose = () => {
        setShowMenu(null);
    };

    return (
        <>
            <Button color="inherit"
                className="top-0 end-0 position-absolute d-sm-none m-2 d-flex align-items-center"
                aria-controls="dropdown-menu"
                aria-haspopup="true"
                onClick={handleClick}
                variant="text"
                sx={{
                    maxWidth: '40%',
                }}
            >
                <span style={{
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    whiteSpace: 'nowrap',
                }}>
                    {selectedTab.name}
                </span>
                <KeyboardArrowDownIcon />
            </Button>
            <Menu
                id="dropdown-menu"
                anchorEl={showMenu}
                open={Boolean(showMenu)}
                onClose={handleClose}
            >
                {tabData.map((tab, index) => (
                    <MenuItem key={tab.id} onClick={() => handleTabChange(index)}>
                        {tab.name}
                    </MenuItem>
                ))}
            </Menu>

            <Tabs
                className="nav nav-tabs d-none d-sm-flex"
                id={paneID}
                value={selectedTabIndex}
                onChange={(event, value) => handleTabChange(value)}
            >
                {tabData.map((tab, index) => (
                    <NavItemTabButton
                        key={tab.id}
                        active={selectedTabIndex === index}
                        id={tab.id}
                        name={tab.name}
                        onClick={() => handleTabChange(index)}
                    />
                ))}
            </Tabs>
            <div className="tab-content" id={paneID + "Content"}>
                {tabData.map((tab) => (
                    <div
                        key={tab.id}
                        role="tabpanel"
                        hidden={selectedTab.id !== tab.id}
                        id={`${tab.id}-tab-pane`}
                    >
                        {tab.Component ? <tab.Component item={item} /> : <div>{tab.name}</div>}
                    </div>
                ))}
            </div>
        </>
    );
}


export default DetailPaneWithDropdown;
