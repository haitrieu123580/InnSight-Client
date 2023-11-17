import React, { useState } from 'react';

const EditRoomModal = ({ room, onSaveChanges, onClose }) => {
  const [editedRoom, setEditedRoom] = useState({ ...room });

  const handleInputChange = (e) => {
    setEditedRoom({ ...editedRoom, [e.target.name]: e.target.value });
  };

  const handleSaveChanges = () => {
    // Call the parent function to save the changes
    onSaveChanges(editedRoom);
    onClose();
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
      {/* Modal content */}
      <h2>Edit Room</h2>
      {/* Form fields for editing room details */}
      {/* Example: */}
      <input
        type="text"
        name="name"
        value={editedRoom.name || ''}
        onChange={handleInputChange}
        placeholder="Room Name"
      />
      {/* Add more form fields as needed */}
      <button onClick={handleSaveChanges}>Save Changes</button>
      <button onClick={onClose}>Close</button>
    </div>
    </div>
  );
};

export default EditRoomModal;