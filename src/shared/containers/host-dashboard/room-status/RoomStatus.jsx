import React, { useState } from "react";
import NavHost from "../../../components/nav-host/NavHost";
import {
  Button,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { Link } from "react-router-dom";
const RoomStatusContainer = () => {
  let rooms = [
    {
      roomType_id: 1,
      name: "Phòng Giường đôi",
      bed_type: "Giường đôi",
      count: 3,
      price: 700000,
      room_area: 40,
      adult_count: 2,
      children_count: 1,
      room_amenity: [
        {
          id: 1,
          name: "Bồn tắm nóng",
        },
        {
          id: 2,
          name: "Bồn tắm nóng",
        },
        {
          id: 3,
          name: "Bồn tắm nóng",
        },
      ],
    },
    
    {
      roomType_id: 2,
      name: "Phòng giường đơn",
      bed_type: "Giường đôi",
      count: 3,
      price: 300000,
      room_area: 1212,
      adult_count: 2,
      children_count: 1,
      room_amenity: [
        {
          id: 1,
          name: "Bồn tắm nóng",
        },
        {
          id: 2,
          name: "Bồn tắm nóng",
        },
        {
          id: 3,
          name: "Bồn tắm nóng",
        },
      ],
    },{
      roomType_id: 3,
      name: "Phòng giường đơn",
      bed_type: "Giường đơn",
      count: 3,
      price: 300000,
      room_area: 30,
      adult_count: 2,
      children_count: 1,
      room_amenity: [
        {
          id: 1,
          name: "Bồn tắm nóng",
        },
        {
          id: 2,
          name: "Bồn tắm nóng",
        },
        {
          id: 3,
          name: "Bồn tắm nóng",
        },
      ],
    },
  ];
  const [roomList, setRoomList] = useState(rooms);
  const [selectedRoomIndex, setSelectedRoomIndex] = useState(null);
  const [open, setOpen] = React.useState(false);
  const handleOpenModal = (index) => {
    setSelectedRoomIndex(roomList[index]);
    setOpen(true);
  };
  const handleCloseModal = () => setOpen(false);
  const handleRoomAreaChange = (event) => {
    const updatedRooms = [...roomList];
    updatedRooms[selectedRoomIndex].room_area = event.target.value;
    console.log(updatedRooms)
    setRoomList(updatedRooms);
  };

  
  return (
    <div>
      <NavHost />
      <div className="px-48 py-5">
        <div className="flex justify-between ">
          <h1>Lịch</h1>
          <Link to="/host/add-room">
            <Button variant="text" size="small" color="primary">
              <AddIcon />
              <span className="text-sm">Thêm phòng mới</span>
            </Button>
          </Link>
        </div>
        
      </div>
    </div>
  );
};

export default RoomStatusContainer;
