import React from 'react';
import { Outlet } from 'react-router-dom';

const Products = () => {
  
  return (
    <div>
      <div className="d-flex align-items-center justify-content-between mb-3">
        <h2>Orders</h2>
       
      </div>
      <Outlet />
    </div>
  );
};

export default Products;
