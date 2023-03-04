import React, { Fragment, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { productDelete, productsFetchAdmin } from '../../../redux/Slice/productsSlice';
import Box from '@mui/material/Box';
import { DataGrid} from '@mui/x-data-grid';
import { Link, useNavigate } from 'react-router-dom';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import './productsList.scss'
import { deleteUser, usersFetch } from '../../../redux/Slice/usersSlice';

const UsersList = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const { users } = useSelector((state) => state.users);
  
  const deleteUserHandler = (id) => {
    dispatch(deleteUser(id));
    navigate('/admin/users') 
  };
  useEffect(() => {
    dispatch(usersFetch());
  }, [dispatch]);
  const rows =
  users &&
  users.map((user) => {
      return {
        id: user._id,
        avatar:user.avatar.url,
        email: user.email,
        name: user.name,
        role: user.isAdmin,
      };
    });
  const columns = [
    { field: 'id', headerName: 'User ID', minWidth: 160, flex: 0.8 },
    {
      field: 'avatar',
      headerName: 'Avatar',
      minWidth: 20,
      flex: 0.3,
      renderCell: (params) => <img src={params.value} alt=""/>,
    },
    {
      field: 'email',
      headerName: 'Email',
      minWidth: 100,
      flex: 1,
    },
    {
      field: 'name',
      headerName: 'Name',
      minWidth: 100,
      flex: 0.5,
    },

    {
      field: 'role',
      headerName: 'isAdmin',
      type: 'number',
      minWidth: 120,
      flex: 0.3,
      cellClassName: (params) => {
        return params.getValue(params.id, 'role') === 'isAdmin'
          ? 'greenColor'
          : 'redColor';
      },
    },

    {
      field: 'actions',
      flex: 0.3,
      headerName: 'Actions',
      minWidth: 120,
      type: 'number',
      sortable: false,
      renderCell: (params) => {
        return (
          <Fragment>
            <Link to={`/admin/users/edit-user/${params.getValue(params.id, 'id')}`}>
              <EditIcon />
            </Link>

          
              <DeleteIcon onClick={() =>
                deleteUserHandler(params.getValue(params.id, 'id'))
              }/>
           
          </Fragment>
        );
      },
    },
  ];


  return (
    <Box sx={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={10}
        rowsPerPageOptions={[10]}
        checkboxSelection
        disableSelectionOnClick
        experimentalFeatures={{ newEditingApi: true }}
      />
    </Box>
  );
};

export default UsersList;
