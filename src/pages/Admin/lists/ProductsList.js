import React, { Fragment, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { productDelete, productsFetchAdmin } from '../../../redux/Slice/productsSlice';
import Box from '@mui/material/Box';
import { DataGrid} from '@mui/x-data-grid';
import { Link, useNavigate } from 'react-router-dom';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import './productsList.scss'

const ProductsList = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const { productsAdmin } = useSelector((state) => state.products);
  
  const deleteUserHandler = (id) => {
    dispatch(productDelete(id));
    navigate('/admin/products') 
  };
  useEffect(() => {
    dispatch(productsFetchAdmin());
  }, [dispatch]);
  const rows =
  productsAdmin &&
  productsAdmin.map((item) => {
      return {
        id: item._id,
        image: item.image.url,
        name: item.name,
        price: item.price,
        desc: item.desc,
      };
    });
  const columns = [
    { field: 'id', headerName: 'Product ID', minWidth: 100, flex: 0.5 },

    {
      field: 'image',
      headerName: 'Image',
      minWidth: 20,
      flex: 0.3,
      renderCell: (params) => <img src={params.value} alt=""/>,
    },
    {
      field: 'name',
      headerName: 'Name',
      minWidth: 60,
      flex: 0.5,
    },
    {
        field: 'price',
        headerName: 'Price',
        minWidth: 20,
        flex: 0.3,
      },
      {
        field: 'stock',
        headerName: 'Stock',
        minWidth: 20,
        flex: 0.3,
      },
      {
        field: 'desc',
        headerName: 'Description',
        minWidth: 40,
        flex: 0.5,
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
            <Link to={`/admin/products/edit-product/${params.getValue(params.id, 'id')}`}>
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
        rowsPerPageOptions={[20]}
        checkboxSelection
        disableSelectionOnClick
        experimentalFeatures={{ newEditingApi: true }}
      />
    </Box>
  );
};

export default ProductsList;
