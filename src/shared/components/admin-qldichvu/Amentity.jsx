import React, { useState } from 'react';
import { Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, TextField, Button } from '@mui/material';

const Amentity = ({ open, onClose, onAddAmentity, onUpdateAmentity, amentity, setAmentity }) => {
  return (
    <Dialog open={open} onClose={onClose}>
    {amentity ? (
      <DialogTitle>Cập nhật tiện ích</DialogTitle>
      ) : (
      <DialogTitle>Thêm tiện ích</DialogTitle>
      )}
      <DialogContent>
        <DialogContentText>
          <TextField
            style={{ marginTop: '8px', width: '550px' }}
            label="Tên tiện ích"
            value={amentity ? amentity.name : ''}
            onChange={(e) => setAmentity({ ...amentity, name: e.target.value })}
          />
        </DialogContentText>
      </DialogContent>
      <DialogActions>
      <Button onClick={onClose}>Hủy</Button>
        {amentity ? (
          <Button onClick={onUpdateAmentity}>Lưu</Button>
        ) : (
          <Button onClick={onAddAmentity}>Thêm dịch vụ</Button>
        )}
      </DialogActions>
    </Dialog>
  );
};

export default Amentity;
