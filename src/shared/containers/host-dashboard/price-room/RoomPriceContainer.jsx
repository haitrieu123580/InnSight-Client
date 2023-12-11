import React, { useEffect, useState } from "react";
import NavHost from "../../../components/nav-host/NavHost";
import { Button, Input, Skeleton } from "@mui/material";
import { List, ListItem } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import HostAction from "../../../../redux/host/action";
import ShowToastify from "../../../../utils/ShowToastify";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import styles from "./PriceRoom.module.scss";
import Constants from "../../../../utils/Contants";

const RoomPriceContainer = () => {
  const hotelId = JSON.parse(localStorage.getItem("hotelId"));
  const dispatch = useDispatch();
  const roomTypes = useSelector((state) => state.Host.roomTypes);
  const bedTypes = Constants.bedTypes;
  useEffect(() => {
    if (hotelId) {
      dispatch({
        type: HostAction.GET_ROOMTYPES,
        id: hotelId,
        onSuccess: () => {},
        onError: () => {
          ShowToastify.showErrorToast("Xảy ra lỗi, xin thử lại sau");
        },
      });
    }
  }, [hotelId]);
  const [open, setOpen] = useState(false);
  const [selectedRoom, setSelectedRoom] = useState();
  const [bedTypeCount, setBedTypeCount] = useState(
    bedTypes.map((bedType) => ({ name: bedType.name, count: 0 }))
  );
  const handleChangeBedCount = (event, index) => {
    const value = parseInt(event.target.value);
    setBedTypeCount((prevBedCount) => {
      const newBedCount = [...prevBedCount];
      newBedCount[index] = { ...newBedCount[index], count: value };
      return newBedCount;
    });
  };
  const [childrenCountUpdate, setChildrenCountUpdate] = useState(0);
  const handleChangeChildrenCountUpdate = (event) => {
    setChildrenCountUpdate(parseInt(event.target.value));
  };
  const [adultCountUpdate, setAdultCountUpdate] = useState(0);
  const handleChangeAdultCountUpdate = (event) => {
    setAdultCountUpdate(parseInt(event.target.value));
  };
  const [roomAreaUpdate, setRoomAreaUpdate] = useState(0);
  const handleChangeRoomAreaUpdate = (event) => {
    setRoomAreaUpdate(parseInt(event.target.value));
  };
  const loadInfoRoom =(selectedRoom)=>{
    setBedTypeCount(selectedRoom.bedTypes)
    setAdultCountUpdate(selectedRoom.adultCount)
    setChildrenCountUpdate(selectedRoom.childrenCount)
    setRoomAreaUpdate(selectedRoom.roomArea)

  }
  const handleSelectRoomToUpdate = (room) => {
    setOpen(true);
    setSelectedRoom(room);
    loadInfoRoom(room)
    console.log("selected", room);
  };

  const handleCloseModal = () => setOpen(false);
  const handleSumbit=(selectedRoom)=>{
    let updateRoom={...selectedRoom};
    updateRoom.bedTypes=bedTypeCount;
    updateRoom.adultCount=adultCountUpdate;
    updateRoom.childrenCount=childrenCountUpdate;
    updateRoom.roomArea=roomAreaUpdate;
    
    console.log("update",updateRoom)
  }
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
          {roomTypes ? (
            roomTypes.map((room, index) => (
              <div key={room.roomType_id}>
                <div className="flex flex-col  py-5 border-2 px-10 my-5 rounded-md">
                  <div className="flex items-center justify-between">
                    <h2 className="font-bold text-xl pb-5">
                      Tên loại phòng:{" "}
                      <span className="font-bold text-[blue]">{room.name}</span>
                    </h2>
                    <div>
                      <Button
                        onClick={() => {
                          handleSelectRoomToUpdate(room);
                        }}
                      >
                        Chỉnh sửa
                      </Button>
                      <Button>Xóa</Button>
                    </div>
                  </div>
                  <div className="flex justify-between">
                    <div className="">
                      <h2 className="font-bold text-lg pb-2">
                        Loại giường:{" "}
                        <span className="font-medium">
                          {room.bedTypes.find((bed) => bed.count > 0).name}
                        </span>
                      </h2>
                      <h2 className="font-bold text-lg pb-2">
                        Diện tích:{" "}
                        <span className="font-medium">{room.roomArea}</span>
                      </h2>
                      <h2 className="font-bold text-lg pb-2">
                        Số Người lớn:{" "}
                        <span className="font-medium">{room.adultCount}</span>
                      </h2>
                      <h2 className="font-bold text-lg pb-2">
                        Số Trẻ em:{" "}
                        <span className="font-medium">
                          {room.childrenCount}
                        </span>
                      </h2>
                    </div>
                    <div>
                      <List
                        subheader={
                          <h2 className="font-bold text-lg pl-3">Tiện nghi</h2>
                        }
                      >
                        {room.amenities?.map((amenity, index) => (
                          <ListItem key={index}>
                            <span className="font-medium">{amenity}</span>
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
              </div>
            ))
          ) : (
            <Skeleton variant="rectangular" width={210} height={118} />
          )}
        </div>
        <Dialog open={open} onClose={handleCloseModal}>
          <DialogContent className={`${styles["content"]}`}>
            <div className="flex">
              <span className={`${styles["text-modal"]}`}>Loại giường: </span>
              <div className="flex gap-2">
              {bedTypeCount.map((bed, index) => {
                return (
                  <div
                    className={`${styles['bed-type-count']}`}
                    key={bed.name}
                  >
                    <div className="flex flex-col">
                      <h3 className="">{bed.name}</h3>
                      <p className="text-slate-400">{bed.description}</p>
                    </div>
                    <input
                      type="number"
                      value={bed.count}
                      onChange={(event) =>
                        handleChangeBedCount(event, index)
                      }
                      className="border p-2 border-black"
                      min={0}
                    />
                  </div>
                );
              })}
              </div>
            </div>
            <div className="flex">
              <span className={`${styles["text-modal"]}`}>Diện tích: </span>
              <input  type="number" value={roomAreaUpdate} onChange={handleChangeRoomAreaUpdate} />
            </div>  
            <div className="flex">
              <span className={`${styles["text-modal"]}`}>Số người lớn: </span>
              <input  type="number" value={adultCountUpdate} onChange={handleChangeAdultCountUpdate} />
            </div>
            <div className="flex">
              <span className={`${styles["text-modal"]}`}>Số trẻ em: </span>
              <input type="number" value={childrenCountUpdate} onChange={handleChangeChildrenCountUpdate} />
            </div>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleCloseModal}>Hủy</Button>
            <Button onClick={()=>handleSumbit(selectedRoom)}>Cập nhật</Button>
          </DialogActions>
        </Dialog>
      </div>
    </div>
  );
};

export default RoomPriceContainer;
