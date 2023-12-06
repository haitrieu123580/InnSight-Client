import React, { useState } from 'react';
import { Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, TextField, Button } from '@mui/material';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
  customInput: {
      '& .css-1t8l2tu-MuiInputBase-input-MuiOutlinedInput-input': {
          height: '50px',
      },
  },
}));

const Amentity = ({ open, onClose, onAddAmentity, onUpdateAmentity, amentity, setAmentity }) => {
  const classes = useStyles();

  return (
    <Dialog open={open} onClose={onClose}>
    {amentity?.id ? (
      <DialogTitle>Cập nhật tiện ích</DialogTitle>
      ) : (
      <DialogTitle>Thêm tiện ích</DialogTitle>
      )}
      <DialogContent>
        <DialogContentText>
          <TextField
            style={{ marginTop: '8px', width: '550px', height: '50px' }}
            label="Tên tiện ích"
            value={amentity ? amentity.name : ''}
            onChange={(e) => setAmentity({ ...amentity, name: e.target.value })}
            className={classes.customInput}
          />
        </DialogContentText>
      </DialogContent>
      <DialogActions>
      <Button onClick={onClose}>Hủy</Button>
        {amentity?.id ? (
          <Button onClick={onUpdateAmentity}>Lưu</Button>
        ) : (
          <Button onClick={onAddAmentity}>Thêm tiện ích</Button>
        )}
      </DialogActions>
    </Dialog>
  );
};

export default Amentity;
