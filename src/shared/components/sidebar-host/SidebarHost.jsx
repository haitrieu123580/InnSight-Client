import React, { useEffect, useRef, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import PriceChangeIcon from "@mui/icons-material/PriceChange";
import DateRangeIcon from "@mui/icons-material/DateRange";
import ReceiptLongIcon from "@mui/icons-material/ReceiptLong";
import BarChartIcon from "@mui/icons-material/BarChart";
import IcPencil from "../icons/header-icons/IcPencil";
import { useDispatch } from "react-redux";
import HostAction from "../../../redux/host/action";
import ShowToastify from "../../../utils/ShowToastify";

const SidebarHost = ({ sidebarOpen, setSidebarOpen }) => {
  const location = useLocation();
  const { pathname } = location;
  const dispatch = useDispatch();
  const [reloadData, setReloadData] = useState(false);
  const trigger = useRef(null);
  const sidebar = useRef(null);

  const storedSidebarExpanded = localStorage.getItem("sidebar-expanded");
  const [sidebarExpanded, setSidebarExpanded] = useState(
    storedSidebarExpanded === "true"
  );

  useEffect(() => {
    const clickHandler = ({ target }) => {
      if (!sidebar.current || !trigger.current) return;
      if (
        !sidebarOpen ||
        sidebar.current.contains(target) ||
        trigger.current.contains(target)
      )
        return;
      setSidebarOpen(false);
    };
    document.addEventListener("click", clickHandler);
    return () => document.removeEventListener("click", clickHandler);
  }, [sidebarOpen]);

  useEffect(() => {
    const keyHandler = ({ keyCode }) => {
      if (!sidebarOpen || keyCode !== 27) return;
      setSidebarOpen(false);
    };
    document.addEventListener("keydown", keyHandler);
    return () => document.removeEventListener("keydown", keyHandler);
  }, [sidebarOpen]);

  useEffect(() => {
    localStorage.setItem("sidebar-expanded", sidebarExpanded.toString());
    document
      .querySelector("body")
      ?.classList.toggle("sidebar-expanded", sidebarExpanded);
  }, [sidebarExpanded]);

  const listHotels = JSON.parse(localStorage.getItem("listHotels"));
  const initialHotelId = parseInt(localStorage.getItem("hotelId"));

  const [hotelId, setHotelId] = useState(initialHotelId);
  useEffect(() => {
    setHotelId(initialHotelId);
  }, [initialHotelId]);

  const handleChangeHotel = (event) => {
    const selectedHotel = event.target.value;
    setHotelId(selectedHotel);
    localStorage.setItem("hotelId", selectedHotel);
  };

  return (
    <aside
      ref={sidebar}
      className={`absolute left-0 z-9999 flex flex-col  bg-gray-50 duration-300 ease-linear lg:static lg:translate-x-0 ${
        sidebarOpen ? "translate-x-0" : "-translate-x-full"
      }`}
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
                {listHotels &&
                  listHotels.map((hotel, index) => (
                    <option
                      key={index}
                      value={hotel.hotelId}
                      selected={hotel.hotelId == initialHotelId}
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
              pathname.includes("price-room"||"dashboard") && "bg-slate-300"  
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
      </div>
    </aside>
  );
};

export default SidebarHost;
