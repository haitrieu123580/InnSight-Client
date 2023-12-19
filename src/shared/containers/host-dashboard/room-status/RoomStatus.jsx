import React, { useEffect, useState } from "react";
import NavHost from "../../../components/nav-host/NavHost";
import { List, ListItem } from "@mui/material";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { Skeleton } from "@mui/material";
import dayjs from "dayjs";

import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { useDispatch, useSelector } from "react-redux";
import { filterRoomAvailable } from "../../../../redux/host/slice";
import HostAction from "../../../../redux/host/action";

const RoomStatusContainer = () => {
  const hotelId = JSON.parse(localStorage.getItem("hotelId"));
  const dispatch = useDispatch();
  let roomAvailable = useSelector(
    (state) => state.Host.roomAvailableByFilter)  
  console.log("rooom", roomAvailable);

  const [dateFilterStart, setDateFilterStart] = useState(dayjs());
  const [dateFilterEnd, setDateFilterEnd] = useState(dayjs(dayjs()));
  
  useEffect(()=>{
    handleFilter(dateFilterStart, dateFilterEnd);
  },[dateFilterStart,dateFilterEnd])

  const handleChangeStartDay = (newValue) => {
    setDateFilterStart(newValue);
  };
  const handleChangeEndDay = (newValue) => {
    setDateFilterEnd(newValue);
  };
  const handleFilter = (startDay, endDay) => {
    console.log(
      "start",
      startDay.format("YYYY-MM-DD"),
      "end",
      endDay.format("YYYY-MM-DD")
    );
    const bodyFilter = {
      startDay: startDay.format("YYYY-MM-DD"),
      endDay: endDay.format("YYYY-MM-DD"),
    };
    dispatch({
      type: HostAction.GET_ROOM_AVAILABLE,
      id: hotelId,
      data: bodyFilter,
    });
  };

  return (
    <div>
      <NavHost />
      <div className="px-48 py-5">
        <div className="flex justify-between ">
          <div>
            <h1>Lịch</h1>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <div className="flex flex-col md:flex-row ">
                <div className="">
                  <h2 className="pb-2">Từ ngày</h2>
                  <DatePicker
                    value={dateFilterStart}
                    onChange={(newValue) => handleChangeStartDay(newValue)}
                  />
                </div>
                <div className="md:pl-5">
                  <h2 className="pb-2">Đến ngày</h2>
                  <DatePicker
                    value={dateFilterEnd}
                    onChange={(newValue) => handleChangeEndDay(newValue)}
                  />
                </div>
              </div>
            </LocalizationProvider>
          </div>
        </div>
        <div className={"bg-white min-h-screen"}>
          {roomAvailable ? (
            roomAvailable.map((room, index) => (
              <div key={index}>
                <div className="flex flex-col  py-5 border-2 px-10 my-5 rounded-md">
                  <div className="flex items-center justify-between">
                    <h2 className="font-bold text-xl pb-5">
                      Tên phòng:{" "}
                      <span className="font-bold text-[blue]">
                        {room.roomName}
                      </span>
                    </h2>
                    <h2 className="font-bold text-lg">
                      Số phòng này:{" "}
                      <span className="font-medium">{room.count}</span>
                    </h2>
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
        </div>
      </div>
    </div>
  );
};

export default RoomStatusContainer;
