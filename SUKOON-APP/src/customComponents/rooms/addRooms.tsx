import React, { useState } from 'react';
import './addRooms.css'; // Create a CSS file for styling

interface AddRoomProps {
  onClose: () => void;
  onAddRoom: (newRoom: { name: string; image: string; devices: number }) => void;
}

const AddRoom: React.FC<AddRoomProps> = ({ onClose, onAddRoom }) => {
  const [roomName, setRoomName] = useState('');
  const [imageUrl, setImageUrl] = useState('');

  const handleSubmit = () => {
    if (!roomName || !imageUrl) {
      alert('Please fill in both fields before adding a room.');
      return;
    }

    const newRoom = {
      name: roomName,
      image: imageUrl,
      devices: 0, // Default to 0 devices for a new room
    };

    onAddRoom(newRoom);
    alert(`${roomName} has been successfully added.`);
    setRoomName('');
    setImageUrl('');
    onClose();
  };

  return (
    <div className="modal-overlay">
      <div className="modal-container">
        <h2 className="modal-header">Add a New Room</h2>
        <button className="modal-close" onClick={onClose}>
          &times;
        </button>
        <div className="modal-body">
          <div className="form-control">
            <label>Room Name</label>
            <input
              type="text"
              placeholder="Enter room name"
              value={roomName}
              onChange={(e) => setRoomName(e.target.value)}
            />
          </div>
          <div className="form-control">
            <label>Image URL</label>
            <input
              type="text"
              placeholder="Enter image URL"
              value={imageUrl}
              onChange={(e) => setImageUrl(e.target.value)}
            />
          </div>
        </div>
        <div className="modal-footer">
          <button className="btn btn-primary" onClick={handleSubmit}>
            Add Room
          </button>
          <button className="btn btn-secondary" onClick={onClose}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddRoom;
