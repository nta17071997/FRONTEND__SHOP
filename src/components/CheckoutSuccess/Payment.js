import React, { Fragment } from 'react';
import CheckoutSteps from './CheckoutSteps';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import './Payment.scss';
import { Link } from 'react-router-dom';

const Payment = () => {
  return (
    <Fragment>
      <CheckoutSteps activeStep={2} />
      <div className="orderSuccess">
        <CheckCircleIcon />

        <h2>Your Order has been Placed successfully </h2>
        <Link to="/orders">View Orders</Link>
      </div>
    </Fragment>
  );
};

export default Payment;
