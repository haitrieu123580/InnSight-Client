import React from 'react';
import { Dialog, DialogContent, DialogTitle } from '@mui/material';
import DoneIcon from '@mui/icons-material/Done';

const ViewAmenity = ({ open, onClose,  amenity }) => {
  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle sx={lable}>Các tiện ích của {amenity?.roomName}</DialogTitle>
      <DialogContent>
        {amenity?.roomAmenities.map((_, index) => (
          <div key={index} className='text-xl w-1/2' style={item}>
            <DoneIcon sx={icon}/> {amenity?.roomAmenities[index]}
          </div>
        ))}
      </DialogContent>
    </Dialog>
  );
};
export default ViewAmenity;
const item = {
  fontSize: '18px',
  with: '50%',
}
const icon ={
  color: '#336600',
};
const lable = {
  color: '#000',
  fontWeight: 'bold',
  fontSize: '20px',
};