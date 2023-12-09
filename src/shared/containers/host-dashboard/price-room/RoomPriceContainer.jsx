
import React, { useEffect, useState } from "react";
import NavHost from "../../../components/nav-host/NavHost";
import {
  Button,
  Input,
  Skeleton,

} from "@mui/material";
import { List, ListItem } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import HostAction from "../../../../redux/host/action";
import ShowToastify from "../../../../utils/ShowToastify";
<<<<<<< HEAD
import { ConfigProvider, Modal } from "antd";
const RoomPriceContainer = () => {
  const hotelId = JSON.parse(localStorage.getItem("hotelId"));
  const dispatch = useDispatch();
  const roomTypes = useSelector((state) => state.Host.roomTypes);
  console.log("roomtypes", roomTypes);
=======

const RoomPriceContainer = () => {
  const hotelId = JSON.parse(localStorage.getItem("hotelId"));

  const dispatch = useDispatch();
  const roomTypes = useSelector((state) => state.Host.roomTypes)
  console.log("romm",roomTypes)
>>>>>>> 487baa2e2090e1d617308ca8a528f7b88b469259
  useEffect(() => {
    if (hotelId) {
      dispatch({
        type: HostAction.GET_ROOMTYPES,
        id: hotelId,
<<<<<<< HEAD
        onSuccess: () => {},
        onError: () => {
          ShowToastify.showErrorToast("Xảy ra lỗi, xin thử lại sau");
        },
      });
    }
  }, []);

  const [open, setOpen] = React.useState(false);
  const [selectedRoom, setSelectedRoom] = useState();
  const handleSelectRoomToUpdate = (room) => {
    setOpen(true);
    setSelectedRoom(room);
    console.log("selected", room);
  };
=======
          onSuccess: () => {
          },
          onError: () => {
              ShowToastify.showErrorToast("Xảy ra lỗi, xin thử lại sau")
          }
      });
    }
  }, []);
  // let rooms = [
  //   {
  //     roomType_id: 1,
  //     name: "Phòng Giường đôi",
  //     bed_type: "Giường đôi",
  //     count: 3,
  //     price: 700000,
  //     room_area: 40,
  //     adult_count: 2,
  //     children_count: 1,
  //     room_amenity: [
  //       {
  //         id: 1,
  //         name: "Bồn tắm nóng",
  //       },
  //       {
  //         id: 2,
  //         name: "Bồn tắm nóng",
  //       },
  //       {
  //         id: 3,
  //         name: "Bồn tắm nóng",
  //       },
  //     ],
  //   },
    
  //   {
  //     roomType_id: 2,
  //     name: "Phòng giường đơn",
  //     bed_type: "Giường đôi",
  //     count: 3,
  //     price: 300000,
  //     room_area: 1212,
  //     adult_count: 2,
  //     children_count: 1,
  //     room_amenity: [
  //       {
  //         id: 1,
  //         name: "Bồn tắm nóng",
  //       },
  //       {
  //         id: 2,
  //         name: "Bồn tắm nóng",
  //       },
  //       {
  //         id: 3,
  //         name: "Bồn tắm nóng",
  //       },
  //     ],
  //   },{
  //     roomType_id: 3,
  //     name: "Phòng giường đơn",
  //     bed_type: "Giường đơn",
  //     count: 3,
  //     price: 300000,
  //     room_area: 30,
  //     adult_count: 2,
  //     children_count: 1,
  //     room_amenity: [
  //       {
  //         id: 1,
  //         name: "Bồn tắm nóng",
  //       },
  //       {
  //         id: 2,
  //         name: "Bồn tắm nóng",
  //       },
  //       {
  //         id: 3,
  //         name: "Bồn tắm nóng",
  //       },
  //     ],
  //   },
  // ];

  // const [selectedRoomIndex, setSelectedRoomIndex] = useState(null);
  // const [open, setOpen] = React.useState(false);
  // const handleOpenModal = (index) => {
  //   setSelectedRoomIndex(roomList[index]);
  //   setOpen(true);
  // };
  // const handleCloseModal = () => setOpen(false);
  // const handleRoomAreaChange = (event) => {
  //   const updatedRooms = [...roomList];
  //   updatedRooms[selectedRoomIndex].room_area = event.target.value;
  //   console.log(updatedRooms)
  //   setRoomList(updatedRooms);
  // };
>>>>>>> 487baa2e2090e1d617308ca8a528f7b88b469259

  const handleCloseModal = () => setOpen(false);
  // const handleRoomAreaChange = (event) => {
  //   const updatedRooms =roomTypes;
  //   updatedRooms[selectedRoomIndex].room_area = event.target.value;
  //   console.log(updatedRooms)
  //   setRoomList(updatedRooms);
  // };
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
<<<<<<< HEAD
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
=======
              <div
                key={room.roomType_id}
              >
                <div className="flex flex-col  py-5 border-2 px-10 my-5 rounded-md" >
                <div className="flex items-center justify-between">
                  <h2 className="font-bold text-xl pb-5">
                    Tên phòng:{" "}
                    <span className="font-bold text-[blue]">{room.name}</span>
                  </h2>
                  <div>
                    <Button>Chỉnh sửa</Button>
                    <Button>Xóa</Button>
                  </div>
                </div>
                <div className="flex justify-between">
                  <div className="">
                    <h2 className="font-bold text-lg pb-2">
                      Loại giường:{" "}
                      <span className="font-medium">{ room.bedTypes.find(bed => bed.count > 0).name}</span>
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
                      <span className="font-medium">{room.childrenCount}</span>
                    </h2>
                  </div>
                  <div>
                    <List
                      subheader={
                        <h2 className="font-bold text-lg pl-3">Tiện nghi</h2>
                      }
                    >
                      {room.amenities?.map((amenity,index) => (
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
                
                {/* <Modal  open={open} onClose={handleCloseModal}>
                  <Box sx={styleModal} flex flexDirection={"column"}>
                    <span className="text-2xl font-bold pb-2">
                      Thông tin phòng: {room.name}
                    </span>
                    <div className="flex pb-4 items-center justify-between">
                      <span>Loại giường:</span>
                      <TextField
                        variant="standard"
                        size="small"
                        value={room.bed_type}
                        onChange={(event) => handleRoomAreaChange(event, index)}
                        style={{ maxWidth: '150px', paddingLeft: 12 }}
                      />
                    </div>
                    <div className="flex pb-4 items-center justify-between">
                      <span>Diện tích:</span>
                      <TextField
                        variant="standard"
                        size="small"
                        value={room.room_area}
                        InputProps={{
                          endAdornment: (
                            <InputAdornment position="end">m2</InputAdornment>
                          ),
>>>>>>> 487baa2e2090e1d617308ca8a528f7b88b469259
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
<<<<<<< HEAD
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
=======
                    <Button>Cập nhật </Button>
                  </Box>
                </Modal> */}
>>>>>>> 487baa2e2090e1d617308ca8a528f7b88b469259
              </div>
            ))
          ) : (
            <Skeleton variant="rectangular" width={210} height={118} />
          )}
        </div>
        <ConfigProvider
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
        </ConfigProvider>
      </div>
    </div>
  );
};

export default RoomPriceContainer;
