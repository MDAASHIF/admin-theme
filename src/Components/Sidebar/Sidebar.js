// Sidebar.js
import React from 'react';
import { List, ListItem, ListItemText } from '@mui/material';
import { Link } from 'react-router-dom';

const Sidebar = ({ isOpen, onClose }) => {
  return (
    <div
      style={{
        width: 200,
        backgroundColor: '#3CD0E2',
        padding: 16,
        position: 'fixed',
        top: 64,
        bottom: 0,
        left: isOpen ? 0 : -280, // Offscreen when closed
        transition: 'left 0.3s ease',
      }}
    >
      <List>
        <ListItem  component={Link} to="/home" onClick={onClose}>
          <ListItemText primary="Home" />
        </ListItem>
        <ListItem  component={Link} to="/about" onClick={onClose}>
          <ListItemText primary="About" />
        </ListItem>
        <ListItem  component={Link} to="/contact" onClick={onClose}>
          <ListItemText primary="Contact" />
        </ListItem>
      </List>
    </div>
  );
};

export default Sidebar;
