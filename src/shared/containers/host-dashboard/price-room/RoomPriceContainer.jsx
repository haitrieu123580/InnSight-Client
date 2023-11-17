import React, { useState } from "react";
import NavHost from "../../../components/nav-host/NavHost";
import { Button, Fab, ListSubheader, Skeleton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { List, ListItem } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { Link } from "react-router-dom";
import EditRoomModal from "../../../components/edit-room-modal/EditRoomModal";
const RoomPriceContainer = () => {
  const rooms = [
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
  ];
  const [roomList, setRoomList] = useState(rooms);
  const [isEditModalOpen, setEditModalOpen] = useState(false);
  const [editedRoom, setEditedRoom] = useState(null);
  const handleAddRoom = (newRoom) => {
    setRoomList([...roomList, newRoom]);
  };
  const handleOpenEditModal = (room) => {
    setEditedRoom(room);
    setEditModalOpen(true);
  };
  const handleSaveChanges = (updatedRoom) => {
    // Update the roomList with the edited room
    const updatedList = roomList.map((room) =>
      room.roomType_id === updatedRoom.roomType_id ? updatedRoom : room
    );
    setRoomList(updatedList);
  };
  const handleCloseEditModal = () => {
    setEditModalOpen(false);
    setEditedRoom(null);
  };


  return (
    <div>
      <NavHost />
      <div className="px-48 py-5">
        <div className="flex justify-between ">
          <h1>Danh sách phòng nghỉ</h1>
          <Link to="/host/add-room">
            <Button variant="text" size="small" color="primary">
              <AddIcon />
              <span className="text-sm">Thêm phòng mới</span>
            </Button>
          </Link>
        </div>
        <div className={"bg-white min-h-screen"}>
          {rooms ? (
            rooms.map((room) => (
              <div
                key={room.roomType_id}
                className="flex flex-col  py-5 border-2 px-10 my-5 rounded-md"
              >
                <div className="flex items-center justify-between">
                  <h2 className="font-bold text-xl pb-5">
                    Tên phòng:{" "}
                    <span className="font-bold text-[blue]">{room.name}</span>
                  </h2>
                  <div>
                      <Button onClick={handleOpenEditModal}>Chỉnh sửa</Button>
                      <Button>Xóa</Button>
                  </div>
                </div>
                <div className="flex justify-between">
                  <div className="">
                    <h2 className="font-bold text-lg pb-2">
                      Loại giường:{" "}
                      <span className="font-medium">{room.bed_type}</span>
                    </h2>
                    <h2 className="font-bold text-lg pb-2">
                      Diện tích:{" "}
                      <span className="font-medium">{room.room_area}</span>
                    </h2>
                    <h2 className="font-bold text-lg pb-2">
                      Số Người lớn:{" "}
                      <span className="font-medium">{room.adult_count}</span>
                    </h2>
                    <h2 className="font-bold text-lg pb-2">
                      Số Trẻ em:{" "}
                      <span className="font-medium">{room.children_count}</span>
                    </h2>
                  </div>
                  <div>
                    <List
                      subheader={
                        <h2 className="font-bold text-lg pl-3">Tiện nghi</h2>
                      }
                    >
                      {room.room_amenity?.map((amenity) => (
                        <ListItem key={amenity.id}>
                          <span className="font-medium">{amenity.name}</span>
                        </ListItem>
                      ))}
                    </List>
                  </div>
                  <div>
                    <h2 className="font-bold text-lg">
                      Số phòng này:{" "}
                      <span className="font-medium">{room.count}</span>
                    </h2>
                  </div>
                  <div className="flex flex-col item-center">
                    <h2 className="font-bold text-lg">
                      Giá: <span className="font-medium">{room.price}</span>
                    </h2>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <Skeleton variant="rectangular" width={210} height={118} />
          )}
          {isEditModalOpen && (
            <EditRoomModal
              room={editedRoom}
              onSaveChanges={handleSaveChanges}
              onClose={handleCloseEditModal}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default RoomPriceContainer;
