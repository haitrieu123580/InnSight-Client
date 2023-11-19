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

const TypeRoom = ({ open, onClose, onAddTypeRoom, onUpdateTypeRoom, typeroom, setTypeRoom }) => {
  const classes = useStyles();
  
  return (
    <Dialog open={open} onClose={onClose}>
      {typeroom ? (
            <DialogTitle>Cập nhật loại phòng</DialogTitle>
          ) : (
            <DialogTitle>Thêm loại phòng</DialogTitle>
          )}
      
      <DialogContent>
        <DialogContentText>
          <TextField
            style={{ marginTop: '8px', width: '550px' }}
            label="Tên loại phòng"
            value={typeroom ? typeroom.name : ''}
            onChange={(e) => setTypeRoom({ ...typeroom, name: e.target.value })}
            className={classes.customInput}
          />
          <br />
          <TextField
            style={{ marginTop: '15px', width: '550px' }}
            label="Mô tả"
            value={typeroom ? typeroom.description : ''}
            onChange={(e) => setTypeRoom({ ...typeroom, description: e.target.value })}
            className={classes.customInput}
          />
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Hủy</Button>
        {typeroom ? (
          <Button onClick={onUpdateTypeRoom}>Lưu</Button>
        ) : (
          <Button onClick={onAddTypeRoom}>Thêm loại phòng</Button>
        )}
      </DialogActions>
    </Dialog>
  );
};

export default TypeRoom;
