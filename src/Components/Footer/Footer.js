// Footer.js
import React from 'react';

const Footer = ({ isSidebarOpen }) => {
  return (
    <footer
      style={{
        backgroundColor: '#f8f8f8',
        padding: 16,
        textAlign: 'center',
        position: 'fixed',
        bottom: 0,
        marginLeft : isSidebarOpen?'235px' : '0',
        width: isSidebarOpen ? 'calc(100% - 200px)' : '100%',
        transition: 'width 0.3s ease',
      }}
    >
      &copy; 2023 Your App. All rights reserved.
    </footer>
  );
};

export default Footer;
