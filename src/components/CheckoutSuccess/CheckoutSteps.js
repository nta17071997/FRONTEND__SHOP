import React, { Fragment } from 'react';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
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
      <Stepper className='mt-4' alternativeLabel activeStep={activeStep} style={stepStyles}>
        {steps.map((item, index) => (
          <Step
            key={index}
            active={activeStep === index ? true : false}
            completed={activeStep >= index ? true : false}
          >
            <StepLabel
              style={{
                color: activeStep >= index ? 'tomato' : 'rgba(0, 0, 0, 0.649)',
              }}
              icon={item.icon}
            >
              {item.label}
            </StepLabel>
          </Step>
        ))}
      </Stepper>
    </Fragment>
  );
};

export default CheckoutSteps;
