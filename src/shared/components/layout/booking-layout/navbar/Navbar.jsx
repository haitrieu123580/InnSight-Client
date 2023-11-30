import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import { Link, useLocation } from 'react-router-dom';
import styles from './index.module.scss';

const steps = [
  { path: '/book/fill-info', label: 'Đặt phòng' },
  { path: '/book/check', label: 'Xem lại' },
  { path: '/book/pay', label: 'Thanh toán' },
  { path: '/book/invoice', label: 'Hóa đơn' },
];

const Navbar = () => {
  const location = useLocation();

  const activeStep = steps.findIndex((step) => location.pathname.includes(step.path));

  return (
    <div className={`hidden lg:flex  ${styles['navbar']}`}>
      <Link
        to={'/'}
        className={`flex-shrink-0 flex items-center justify-center px-4 lg:px-6 xl:px-8 ${styles['logo-text']}`}
      >
        InnSight
      </Link>
      <nav className="contents text-base md:text-sm lg:text-lg mr-auto">
        <Box sx={{ width: '60%' , paddingTop: '13px', paddingRight:'150px'}}>
          <Stepper activeStep={activeStep}>
            {steps.map(({ path, label }, index) => (
              <Step key={path}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
        </Box>
      </nav>
    </div>
  );
};

Navbar.defaultProps = {
  onPageNumberClick: () => {},
  page: null,
};

export default Navbar;
