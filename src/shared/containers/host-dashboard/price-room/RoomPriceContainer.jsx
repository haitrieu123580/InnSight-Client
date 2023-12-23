import React, { useEffect, useState } from "react";
import { Button, Skeleton } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { Link} from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import HostAction from "../../../../redux/host/action";
import ShowToastify from "../../../../utils/ShowToastify";
import PriceRoomCard from "../../../components/host-manage/priceRoom/PriceRoomCard";
const RoomPriceContainer = () => {
  const dispatch = useDispatch();
  const [reloadData, setReloadData] = useState(false);
  const roomTypes = useSelector((state) => state.Host.roomTypes);
  const hotelId = JSON.parse(localStorage.getItem("hotelId"));
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
    setReloadData(false);
  }, [hotelId, reloadData]);
  
  return (
    <>
      <div className="flex justify-between items-baseline ">
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
           <PriceRoomCard room={room} />
          ))
        ) : (
          <Skeleton variant="rectangular" width={210} height={118} />
        )}
      </div>
     
    </>
  );
};

export default RoomPriceContainer;