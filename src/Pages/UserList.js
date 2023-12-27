import React, { useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import TextField from '@mui/material/TextField';
import SearchIcon from '@mui/icons-material/Search';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';
import { Breadcrumbs, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';

const UserList = () => {
  const columns = [
    { field: 'id', headerName: 'ID', flex: 1 },
    { field: 'firstName', headerName: 'First Name', flex: 2 },
    { field: 'lastName', headerName: 'Last Name', flex: 2 },
    { field: 'age', headerName: 'Age', flex: 1 },
    { field: 'Action', headerName: 'Action', flex: 1 },
  ];

  const initialRows = [
    { id: 1, firstName: 'John', lastName: 'Doe', age: 25 },
    { id: 2, firstName: 'Jane', lastName: 'Doe', age: 30 },
    
    // Add more rows as needed
  ];

  const [rows, setRows] = useState(initialRows);
  const [searchText, setSearchText] = useState('');

  const handleSearch = (event) => {
    const searchValue = event.target.value.toLowerCase();
    setSearchText(searchValue);

    const filteredRows = initialRows.filter((row) =>
      Object.values(row).some((value) => String(value).toLowerCase().includes(searchValue))
    );

    setRows(filteredRows);
  };

  return (
    <>
      <Breadcrumbs aria-label="breadcrumb">
        <Link underline="hover" color="inherit" href="/">
          Admin
        </Link>
        <Typography color="text.primary">Use List</Typography>
      </Breadcrumbs>
      <Box sx={{ display: 'flex', flexDirection: 'column', width: '100%', marginBottom: 10 }}>
        <Box sx={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center', marginBottom: 2 }}>
          <TextField
            label="Search"
            variant="standard"
            value={searchText}
            onChange={handleSearch}
            style={{ marginRight: 2 }}
          />
          <IconButton>
            <SearchIcon />
          </IconButton>
          <Button  component={Link}
          to="/admin/user-add" variant="contained" color="primary" style={{ marginRight: 10, marginLeft: 10 }}>
            <PersonAddAltIcon />
          </Button>
        </Box>
        <DataGrid
          columns={columns.map((column) => ({
            ...column,
            headerClassName: 'custom-header',
          }))}
          rows={rows}
          pageSize={5}
          // pagination
          classes={{ cell: 'custom-cell' }}
          autoHeight
          disableExtendRowFullWidth
          sx={{
            flex: 1,
            '.custom-header': {
              backgroundColor: '#2196F3 !important',
              color: 'white',
              fontWeight: 'bold',
              borderRight: '1px solid white', // 1px white border initially
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              transition: 'border 0.3s ease', // Add transition for smooth hover effect
              '&:hover': {
                borderRight: '1px solid transparent', // No border on hover
                backgroundColor: '#1565C0', // Change background color on hover
              },
            },
            '.custom-cell': {
              width: '100% !important',
              display: 'flex',
              alignItems: 'center',
            },
          }}
        />
      </Box>
    </>
  );
};

export default UserList;
