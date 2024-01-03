import React, { useEffect, useState } from "react";
import NavHost from "../../../components/nav-host/NavHost";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import dayjs from "dayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { useDispatch, useSelector } from "react-redux";
import HostAction from "../../../../redux/host/action";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const RoomStatusContainer = () => {
  const { currentHotel } = useSelector((state) => state.Host);  
  const hotelId= currentHotel
  const dispatch = useDispatch();
  let roomAvailable = useSelector(
    (state) => state.Host.roomAvailableByFilter)  
  const [dateFilterStart, setDateFilterStart] = useState(dayjs());
  const [dateFilterEnd, setDateFilterEnd] = useState(dayjs(dayjs()));
  
  useEffect(()=>{
    handleFilter(dateFilterStart, dateFilterEnd);
  },[dateFilterStart,dateFilterEnd,hotelId])

  const handleChangeStartDay = (newValue) => {
    setDateFilterStart(newValue);
  };
  const handleChangeEndDay = (newValue) => {
    setDateFilterEnd(newValue);
  };
  const handleFilter = (startDay, endDay) => {
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
    <>
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
             <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>Tên phòng</TableCell>
                  <TableCell align="right">Số phòng</TableCell>
                  <TableCell align="right">Giá</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {roomAvailable[0]&&
                roomAvailable?.map((row) => (
                  <TableRow
                    key={row.name}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      {row.roomName}
                    </TableCell>
                    <TableCell align="right">{row.count}</TableCell>
                    <TableCell align="right">{row.price }</TableCell>

                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      </>
  );
};

export default RoomStatusContainer;
