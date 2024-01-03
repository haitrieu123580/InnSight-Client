import React, { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import PriceChangeIcon from "@mui/icons-material/PriceChange";
import DateRangeIcon from "@mui/icons-material/DateRange";
import ReceiptLongIcon from "@mui/icons-material/ReceiptLong";
import BarChartIcon from "@mui/icons-material/BarChart";
import IcPencil from "../icons/header-icons/IcPencil";
import { useDispatch, useSelector } from "react-redux";
import HostAction from "../../../redux/host/action";
import ShowToastify from "../../../utils/ShowToastify";
import { getCurentHotel } from "../../../redux/host/slice";
import AddIcon from "@mui/icons-material/Add";

const SidebarHost = () => {
  const location = useLocation();
  const { pathname } = location;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({
      type: HostAction.GET_LIST_HOTELS,
      onSuccess: () => {},
      onError: () => {
        ShowToastify.showErrorToast("Xảy ra lỗi, xin thử lại sau");
      },
    });
  }, []);

  const listHotels = useSelector((state) => state.Host.listHotels) || [];
  const initialHotelId = parseInt(localStorage.getItem("hotelId"));

  const [hotelId, setHotelId] = useState(initialHotelId);
  useEffect(() => {
    setHotelId(initialHotelId);
    dispatch({
      type: getCurentHotel,
      payload: initialHotelId,
    });
  }, [initialHotelId]);


  const handleChangeHotel = (event) => {
    const selectedHotel = event.target.value;
    setHotelId(selectedHotel);
    localStorage.setItem("hotelId", selectedHotel);
    dispatch({
      type: getCurentHotel,
      payload: selectedHotel,
    });
  };

  return (
    <aside
      className={`absolute left-0 z-9999 flex flex-col  bg-gray-50 duration-300 ease-linear lg:static lg:translate-x-0 `}
    >
      <div className="no-scrollbar flex flex-col overflow-y-auto duration-300 ease-linear px-4 lg:mt-9 lg:px-6 text-lg">
        <ul className="mb-6 flex flex-col gap-1.5">
          {listHotels && (
            <div className="flex flex-col gap-1 items-center border">
              <span className="text-lg  uppercase font-bold text-blue-600  ">
                Khách sạn
              </span>
              <select
                id="select-hotel"
                value={hotelId}
                onChange={handleChangeHotel}
                className={`w-full text-left border `}
              >
                {listHotels[0] &&
                  listHotels?.map((hotel, index) => (
                    <option
                      key={index}
                      value={hotel.id}
                      selected={hotel.id == initialHotelId}
                    >
                      {hotel.name}
                    </option>
                  ))}
              </select>
            </div>
          )}
        </ul>
        <ul className="mb-6 flex flex-col gap-1.5">
          <NavLink
            to="/host/price-room"
            className={`group relative flex items-center gap-2.5 rounded-sm py-2 px-4 font-medium duration-300 ease-in-out dark:hover:bg-meta-4 ${
              pathname.includes("price-room" || "dashboard") && "bg-slate-300"
            }`}
          >
            <PriceChangeIcon />
            Giá phòng
          </NavLink>
        </ul>
        <ul className="flex flex-col gap-1.5">
          <NavLink
            to="/host/room-status"
            className={`group relative flex items-center gap-2.5 rounded-sm py-2 px-4 font-medium duration-300 ease-in-out dark:hover:bg-meta-4 ${
              pathname.includes("room-status") && "bg-slate-300"
            }`}
          >
            <DateRangeIcon />
            Tình trạng phòng trống
          </NavLink>
        </ul>
        <ul className="flex flex-col gap-1.5">
          <NavLink
            to="/host/reservation"
            className={`mt-7 group relative flex items-center gap-2.5 rounded-sm py-2 px-4 font-medium duration-300 ease-in-out hover:bg-graydark dark:hover-bg-meta-4 ${
              pathname.includes("reservation") && "bg-slate-300"
            }`}
          >
            <ReceiptLongIcon />
            Đặt phòng
          </NavLink>
        </ul>
        <ul className="flex flex-col gap-1.5">
          <NavLink
            to="/host/revenue"
            className={`mt-7 group relative flex items-center gap-2.5 rounded-sm py-2 px-4 font-medium duration-300 ease-in-out hover:bg-graydark dark:hover-bg-meta-4 ${
              pathname.includes("revenue") && "bg-slate-300"
            }`}
          >
            <BarChartIcon />
            Tài chính
          </NavLink>
        </ul>
        <ul className="flex flex-col gap-1.5">
          <NavLink
            to="/host/update-hotel-info"
            className={`mt-7 group relative flex items-center gap-2.5 rounded-sm py-2 px-4 font-medium duration-300 ease-in-out hover:bg-graydark dark:hover-bg-meta-4 ${
              pathname.includes("update-hotel-info") && "bg-slate-300"
            }`}
          >
            <IcPencil />
            Chỉnh sửa khách sạn
          </NavLink>
        </ul>
        <ul className="flex flex-col gap-1.5">
          <NavLink
            to="/host"
            className={`mt-7 group relative flex items-center gap-2.5 rounded-sm py-2 px-4 font-medium duration-300 ease-in-out hover:bg-graydark dark:hover-bg-meta-4`}
          >
            <AddIcon />
            Thêm khách sạn mới
          </NavLink>
        </ul>
      </div>
    </aside>
  );
};

export default SidebarHost;
