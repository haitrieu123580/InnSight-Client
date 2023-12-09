import React, { useEffect, useState } from "react";
import NavHost from "../../../components/nav-host/NavHost";
import { Button, Input, Skeleton, Typography } from "@mui/material";
import { List, ListItem } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import HostAction from "../../../../redux/host/action";
import ShowToastify from "../../../../utils/ShowToastify";
import { ConfigProvider, Modal } from "antd";
import UpdateRoom from "./UpdateRoom";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import styles from "./PriceRoom.module.scss";
const RoomPriceContainer = () => {
  const hotelId = JSON.parse(localStorage.getItem("hotelId"));
  const dispatch = useDispatch();
  const roomTypes = useSelector((state) => state.Host.roomTypes);
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
  const handleSelectRoomToUpdate = (room) => {
    setOpen(true);
    setSelectedRoom(room);
    console.log("selected", room);
  };

  const handleCloseModal = () => setOpen(false);

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
                      <UpdateRoom room={selectedRoom} isOpen={open} />
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
                <Input
                  defaultValue={
                    selectedRoom?.bedTypes.find((bedType) => bedType.count > 0)
                      ?.name
                  }
                />
              </div>
              <div className="flex">
                <span className={`${styles["text-modal"]}`}>Diện tích: </span>
                <Input defaultValue={selectedRoom?.roomArea} />
              </div>
              <div className="flex">
                <span className={`${styles["text-modal"]}`}>
                  Số người lớn:{" "}
                </span>
                <Input defaultValue={selectedRoom?.adultCount} />
              </div>
              <div className="flex">
                <span className={`${styles["text-modal"]}`}>Số trẻ em: </span>
                <Input defaultValue={selectedRoom?.childrenCount} />
              </div>
           
          </DialogContent>
          <DialogActions>
            <Button onClick={handleCloseModal}>Cancel</Button>
            <Button onClick={handleCloseModal}>Subscribe</Button>
          </DialogActions>
        </Dialog>
        {/* <ConfigProvider
          theme={{
            token: {
              titleFontSize: 30,
              fontSize: 24,
              lineHeight: 2,
              padding: 8,
            },
          }}
        >
          <Modal
            className="lg:w-[800px]"
            open={open}
            title={`Chỉnh sửa thông tin phòng ${selectedRoom?.name}`}
            onOk={handleCloseModal}
            onCancel={handleCloseModal}
            footer={[
              <Button key="cancel" onClick={handleCloseModal}>
                Hủy
              </Button>,
              <Button key="submit" type="primary"  onClick={handleCloseModal}>
                Cập nhật
              </Button>
            ]}
          >
            <div className="flex flex-col ">
              <div className="flex items-center justify-between">
                <span className="text-2xl">Loai giuong: </span>
                <Input
                  defaultValue={
                    selectedRoom?.bedTypes.find((bedType) => bedType.count > 0)
                      ?.name
                  }
                />
              </div>
              <div className="flex items-center justify-between">
                <span>Diện tích:</span>
                <Input defaultValue={selectedRoom?.roomArea} />
              </div>
              <div className="flex  items-center justify-between">
                <span>Số người lớn:</span>
                <Input defaultValue={selectedRoom?.adultCount} />
              </div>
              <div className="flex items-center justify-between">
                <span>Số trẻ em:</span>
                <Input defaultValue={selectedRoom?.childrenCount} />
              </div>
            </div>
          </Modal>
        </ConfigProvider> */}
      </div>
    </div>
  );
};

export default RoomPriceContainer;
