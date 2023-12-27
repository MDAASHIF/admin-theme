// Header.js
import React from 'react';
import { AppBar, Toolbar, Typography, IconButton, Box, Menu, Tooltip, MenuItem } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import Avatar from '@mui/material/Avatar';

const Header = ({ onToggleSidebar }) => {
  const settings = ['Profile', 'Change Password', , 'Logout'];
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="static">
      <div style={{display:'flex'}}>
      <Toolbar>
        <Typography variant="h6" style={{ marginRight: 15 }}>
          Your App Name
        </Typography>
        <IconButton color="inherit" aria-label="menu" onClick={onToggleSidebar} edge="start">
          <MenuIcon />
        </IconButton>
      </Toolbar>
      <Box sx={{ flexGrow: 0, marginLeft: 'auto',marginRight:5,marginTop:1  }}>
        <Tooltip title="Open settings">
          <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
            <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
          </IconButton>
        </Tooltip>
        <Menu
          sx={{ mt: '45px' }}
          id="menu-appbar"
          anchorEl={anchorElUser}
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          keepMounted
          transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          open={Boolean(anchorElUser)}
          onClose={handleCloseUserMenu}
        >
          {settings.map((setting, index) => (
            <MenuItem key={index} onClick={handleCloseUserMenu}>
              {setting}
            </MenuItem>
          ))}
        </Menu>
      </Box>
      </div>
    </AppBar>
  );
};

export default Header;
