import React, { useState } from 'react';
import { List, ListItem, ListItemText, Collapse, ListItemIcon } from '@mui/material';
import { Link, useLocation } from 'react-router-dom';
import DashboardIcon from '@mui/icons-material/Dashboard';
import PersonIcon from '@mui/icons-material/Person';
import InfoIcon from '@mui/icons-material/Info';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import MailIcon from '@mui/icons-material/Mail';
import SettingsIcon from '@mui/icons-material/Settings';

const Sidebar = ({ isOpen, onClose }) => {
  const location = useLocation();

  const isLinkActive = (to) => {
    return location.pathname === to;
  };

  const [isAboutSubMenuOpen, setAboutSubMenuOpen] = useState(false);

  const handleAboutSubMenuToggle = () => {
    setAboutSubMenuOpen(!isAboutSubMenuOpen);
  };

  return (
    <div
      style={{
        width: 200,
        backgroundColor: 'LightSlateGray',
        position: 'fixed',
        top: 64,
        bottom: 0,
        left: isOpen ? 0 : -280, // Offscreen when closed
        transition: 'left 0.3s ease',
      }}
    >
      <List>
        <ListItem
          component={Link}
          to="/admin/dashboard"
          sx={{
            backgroundColor: isLinkActive('/admin/dashboard') ? '#A9A9A9' : 'transparent',
            color: 'white',
            '&:hover': {
              backgroundColor: 'LightBlue',
            },
          }}
        >
          <ListItemIcon>
            <DashboardIcon />
          </ListItemIcon>
          <ListItemText primary="Dashboard" />
        </ListItem>
        <ListItem
          component={Link}
          to="/admin/user-list"
          sx={{
            backgroundColor: isLinkActive('/admin/user-list') ? '#A9A9A9' : 'transparent',
            color: 'white',
            '&:hover': {
              backgroundColor: 'LightBlue',
            },
          }}
        >
          <ListItemIcon>
            <PersonIcon />
          </ListItemIcon>
          <ListItemText primary="User" />
        </ListItem>
        <ListItem
          sx={{
            backgroundColor: isLinkActive('/about') ? '#A9A9A9' : 'transparent',
            color: 'white',
            '&:hover': {
              backgroundColor: 'LightBlue',
            },
          }}
          onClick={handleAboutSubMenuToggle}
        >
          <ListItemIcon>
            <InfoIcon />
          </ListItemIcon>
          <ListItemText primary="About" />
          {isAboutSubMenuOpen ? <ExpandLessIcon /> : <ExpandMoreIcon />}
        </ListItem>
        <Collapse in={isAboutSubMenuOpen}>
          <List >
            <ListItem
              component={Link}
              to="/about/item1"
              sx={{
                backgroundColor: isLinkActive('/about/item1') ? '#A9A9A9' : 'transparent',
                color: 'white',
                '&:hover': {
                  backgroundColor: 'LightBlue',
                },
              }}
            >
              <ListItemIcon>
                <MailIcon />
              </ListItemIcon>
              <ListItemText primary="Item 1" />
            </ListItem>
            <ListItem
              component={Link}
              to="/about/item2"
              sx={{
                backgroundColor: isLinkActive('/about/item2') ? '#A9A9A9' : 'transparent',
                color: 'white',
                '&:hover': {
                  backgroundColor: 'LightBlue',
                },
              }}
            >
              <ListItemIcon>
                <SettingsIcon />
              </ListItemIcon>
              <ListItemText primary="Item 2" />
            </ListItem>
            {/* Add more sub-menu items as needed */}
          </List>
        </Collapse>
      </List>
    </div>
  );
};

export default Sidebar;
