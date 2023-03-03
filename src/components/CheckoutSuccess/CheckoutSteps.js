import React, { Fragment } from 'react';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import LibraryAddCheckIcon from '@mui/icons-material/LibraryAddCheck';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import './CheckoutSteps.scss';

const CheckoutSteps = ({ activeStep }) => {
  const steps = [
    {
      label: <h2>Shipping Details</h2>,
      icon: <LocalShippingIcon />,
    },
    {
      label: <h2>Confirm Order</h2>,
      icon: <LibraryAddCheckIcon />,
    },
    {
      label: <h2>Payment</h2>,
      icon: <AccountBalanceIcon />,
    },
  ];

  const stepStyles = {
    boxSizing: 'border-box',
  };

  return (
    <Fragment>
      <div activeStep={activeStep} style={stepStyles}>
        {steps.map((item, index) => (
          <div
            key={index}
            active={activeStep === index ? true : false}
            completed={activeStep >= index ? true : false}
          >
            <div
              style={{
                color: activeStep >= index ? 'tomato' : 'rgba(0, 0, 0, 0.649)',
              }}
            >
              {' '}
              {item.icon}
              {item.label}
            </div>
          </div>
        ))}
      </div>
    </Fragment>
  );
};

export default CheckoutSteps;
