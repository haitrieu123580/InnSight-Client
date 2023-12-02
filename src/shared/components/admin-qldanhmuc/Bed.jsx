import React from 'react';
import { Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, TextField, Button } from '@mui/material';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
  customInput: {
      '& .css-1t8l2tu-MuiInputBase-input-MuiOutlinedInput-input': {
          height: '50px',
      },
  },
}));

const Bed = ({ open, onClose, onAddBed, onUpdateBed, bed, setBed }) => {
  const classes = useStyles();
  
  return (
    <Dialog open={open} onClose={onClose}>
      {bed ? (
            <DialogTitle>Cập nhật loại giường</DialogTitle>
          ) : (
            <DialogTitle>Thêm loại giường</DialogTitle>
          )}
      
      <DialogContent>
        <DialogContentText>
          <TextField
            style={{ marginTop: '8px', width: '550px' }}
            label="Tên loại giường"
            value={bed ? bed.name : ''}
            onChange={(e) => setBed({ ...bed, name: e.target.value })}
            className={classes.customInput}
          />
          <br />
          <TextField
            style={{ marginTop: '15px', width: '550px' }}
            label="Mô tả"
            value={bed ? bed.description : ''}
            onChange={(e) => setBed({ ...bed, description: e.target.value })}
            className={classes.customInput}
          />
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Hủy</Button>
        {bed ? (
          <Button onClick={onUpdateBed}>Lưu</Button>
        ) : (
          <Button onClick={onAddBed}>Thêm loại giường</Button>
        )}
      </DialogActions>
    </Dialog>
  );
};

export default Bed;
