import React from 'react';
import { Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, TextField, Button } from '@mui/material';

const View = ({ open, onClose, onAddView, onUpdateView, view, setView }) => {
    
  return (
    <Dialog open={open} onClose={onClose}>
      {view ? (
            <DialogTitle>Cập nhật tầm nhìn</DialogTitle>
          ) : (
            <DialogTitle>Thêm tầm nhìn</DialogTitle>
          )}
      
      <DialogContent>
        <DialogContentText>
          <TextField
            style={{ marginTop: '8px', width: '550px' }}
            label="Tầm nhìn hướng đi đâu?"
            value={view ? view.name : ''}
            onChange={(e) => setView({ ...view, name: e.target.value })}
          />
          <br />
          <TextField
            style={{ marginTop: '15px', width: '550px' }}
            label="Mô tả"
            value={view ? view.description : ''}
            onChange={(e) => setView({ ...view, description: e.target.value })}
          />
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Hủy</Button>
        {view ? (
          <Button onClick={onUpdateView}>Lưu</Button>
        ) : (
          <Button onClick={onAddView}>Thêm tầm nhìn</Button>
        )}
      </DialogActions>
    </Dialog>
  );
};

export default View;
