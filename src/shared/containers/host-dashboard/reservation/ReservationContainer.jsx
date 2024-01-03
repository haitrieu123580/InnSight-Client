import React, { useEffect, useState } from "react";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import dayjs from "dayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useDispatch, useSelector } from "react-redux";
import HostAction from "../../../../redux/host/action";
const ReservationContainer = () => {
  const { currentHotel } = useSelector((state) => state.Host);
  const hotelId= currentHotel
  const dispatch = useDispatch();
  let reservedRoomInfo = useSelector(
    (state) => state.Host.reservedRoomInfo)  

  const [dateFilterStart, setDateFilterStart] = useState(dayjs());
  const [dateFilterEnd, setDateFilterEnd] = useState(dayjs(dayjs()));

  const handleChangeStartDay = (newValue) => {
    setDateFilterStart(newValue);
  };
  const handleChangeEndDay = (newValue) => {
    setDateFilterEnd(newValue);
  };
  useEffect(()=>{
    handleFilter(dateFilterStart, dateFilterEnd);
  },[dateFilterStart,dateFilterEnd, hotelId])

  const handleFilter = (startDay, endDay) => {
    const bodyFilter = {
      startDay: startDay.format("YYYY-MM-DD"),
      endDay: endDay.format("YYYY-MM-DD"),
    };
    dispatch({
      type: HostAction.GET_RESERVED_ROOM_INFO,
      id: hotelId,
      data: bodyFilter,
    });
  };
  const rows=reservedRoomInfo.roomReservedInfoByTime
  return (
    <>
        <div className="flex justify-between ">
          <div>
            <h1>Đơn đặt phòng</h1>
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
                  <TableCell>Tên khách</TableCell>
                  <TableCell align="right">Ngày nhận phòng</TableCell>
                  <TableCell align="right">Ngày trả phòng</TableCell>
                  <TableCell align="right">Phòng</TableCell>
                  <TableCell align="right">Được đặt vào</TableCell>
                  <TableCell align="right">Giá</TableCell>
                  <TableCell align="right">Hoa hồng</TableCell>
                  <TableCell align="right">Mã số đặt phòng</TableCell>

                </TableRow>
              </TableHead>
              <TableBody>
                {rows?.map((row) => (
                  <TableRow
                    key={row.name}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      {row.userName}
                    </TableCell>
                    <TableCell align="right">{row.checkInDay}</TableCell>
                    <TableCell align="right">{row.checkOutDay}</TableCell>
                    <TableCell align="right">{row.roomName}</TableCell>
                    <TableCell align="right">{row.reserveTime}</TableCell>
                    <TableCell align="right">{row.price}</TableCell>
                    <TableCell align="right">{row.commission}</TableCell>
                    <TableCell align="right">{row.reservedId}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      </>
    // </div>
  );
};

export default ReservationContainer;
