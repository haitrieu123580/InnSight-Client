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

const Service = ({ open, onClose, onAddService, onUpdateService, service, setService }) => {
  const classes = useStyles();
    
  return (
    <Dialog open={open} onClose={onClose}>
      {service ? (
            <DialogTitle>Cập nhật dịch vụ</DialogTitle>
          ) : (
            <DialogTitle>Thêm dịch vụ</DialogTitle>
          )}
      
      <DialogContent>
        <DialogContentText>
          <TextField
            style={{ marginTop: '8px', width: '550px', height: '50px' }}
            label="Tên dịch vụ"
            value={service ? service.name : ''}
            onChange={(e) => setService({ ...service, name: e.target.value })}
            className={classes.customInput}
          />
          <br />
          <TextField
            style={{ marginTop: '15px', width: '550px', height: '50px' }}
            label="Mô tả"
            value={service ? service.description : ''}
            onChange={(e) => setService({ ...service, description: e.target.value })}
            className={classes.customInput}
          />
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Hủy</Button>
        {service ? (
          <Button onClick={onUpdateService}>Lưu</Button>
        ) : (
          <Button onClick={onAddService}>Thêm dịch vụ</Button>
        )}
      </DialogActions>
    </Dialog>
  );
};

export default Service;
