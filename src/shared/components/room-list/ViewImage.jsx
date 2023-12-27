import React from 'react';
import { Box, Modal } from '@mui/material';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { useState } from 'react';

const ViewImage = ({ open, onClose,  hotel }) => {
  const [index, setIndex] = useState(0);
  const handleBackClick = () => {
    setIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : hotel?.hotelImages.length - 1));
  };
  const handleForwardClick = () => {
    setIndex((prevIndex) => (prevIndex < hotel?.hotelImages.length - 1 ? prevIndex + 1 : 0));
  };

  return (
    <Modal open={open} onClose={onClose}>
      <Box sx={style}>
        <h1 style={lable}>{hotel?.hotelName}</h1>
        <div style={containerStyle}>
          <button><ArrowBackIosIcon onClick={handleBackClick}/></button>
          <img src={hotel.hotelImages[index]} alt="" style={image} />
          <button><ArrowForwardIosIcon onClick={handleForwardClick}/></button>
        </div>
      </Box>
    </Modal>
  );
};

export default ViewImage;

const image = {
  height: '590px',
  maxWidth: '700px',
};
const containerStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
};
const lable = {
  color: '#006600',
  fontWeight: 'bold',
  fontSize: '18px',
  marginLeft : '350px' 
};
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 900,
  height: 650,
  bgcolor: 'background.paper',
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
};

