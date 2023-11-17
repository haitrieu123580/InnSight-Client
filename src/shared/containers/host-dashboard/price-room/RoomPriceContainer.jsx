import React, { useState } from "react";
import NavHost from "../../../components/nav-host/NavHost";
import { ListSubheader, Skeleton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { List, ListItem } from "@mui/material";
const RoomPriceContainer = () => {
  const roomList = [
    {
      roomType_id: 1,
      name: "Phòng Giường đôi",
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

  return (
    <div>
      <NavHost />
      <div className="px-48 py-5">
        <h1>Danh sách phòng nghỉ</h1>
        <div className={"bg-white min-h-screen"}>
          {roomList ? (
            roomList.map((room) => (
              <div
                key={room.roomType_id}
                className="flex justify-between py-5 border-2 px-10 my-5 rounded-md"
              >
                <div className="">
                  <h2 className="font-bold">
                    Tên phòng: <span className="font-medium">{room.name}</span>
                  </h2>
                  <List
                    subheader={
                      <ListSubheader className="font-bold">
                        Tiện nghi:
                      </ListSubheader>
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
                  <h2 className="font-bold">
                    Diện tích:{" "}
                    <span className="font-medium">{room.room_area}</span>
                  </h2>
                  <h2 className="font-bold">
                    Số Người lớn:{" "}
                    <span className="font-medium">{room.adult_count}</span>
                  </h2>
                  <h2 className="font-bold">
                    Số Trẻ em:{" "}
                    <span className="font-medium">{room.children_count}</span>
                  </h2>
                </div>
                <div>
                  <h2 className="font-bold">
                    Số phòng này:{" "}
                    <span className="font-medium">{room.count}</span>
                  </h2>
                </div>
                <div className="flex flex-col item-center">
                  <h2 className="font-bold text-xl">
                    Giá: <span className="font-medium">{room.price}</span>
                  </h2>
                  <button>
                    <CloseIcon />
                    Xóa
                  </button>
                  <button>
                    <CloseIcon />
                    Chỉnh sửa
                  </button>
                </div>
              </div>
            ))
          ) : (
            <Skeleton variant="rectangular" width={210} height={118} />
          )}
        </div>
      </div>
    </div>
  );
};

export default RoomPriceContainer;
