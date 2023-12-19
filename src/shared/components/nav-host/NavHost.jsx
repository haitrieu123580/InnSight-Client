import React from "react";
import styles from "./NavHost.module.scss";
import PriceChangeIcon from "@mui/icons-material/PriceChange";
import DateRangeIcon from "@mui/icons-material/DateRange";
import ReceiptLongIcon from "@mui/icons-material/ReceiptLong";
import BarChartIcon from "@mui/icons-material/BarChart";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { Link, useLocation } from "react-router-dom";
const NavHost = () => {
  const location = useLocation();

  const isActive = (paths) => {
    if (Array.isArray(paths)) {
      return paths.some((path) => location.pathname === path);
    } else {
      return location.pathname === paths;
    }
  };
  return (
    <header className={`hidden md:flex justify-between  ${styles["nav-host"]}`}>
      <div className="">
        <Link to="/host/price-room">
          <button
            class={`sm:py-2 drop-shadow-md inline-flex items-center justify-between   ${
              isActive(["/host/price-room", "/host/dashboard"])
                ? "text-blue-400"
                : ""
            }`}
          >
            <PriceChangeIcon />
            <span className={`pl-3 text-xl `}>Giá phòng</span>
          </button>
        </Link>
      </div>

      <div className="">
        <Link to="/host/room-status">
          <button
            class={`sm:py-2  drop-shadow-md inline-flex items-center justify-between ${
              isActive(["/host/room-status"]) ? "text-blue-400" : ""
            } `}
          >
            <DateRangeIcon />
            <span className="pl-3 text-xl">Tình trạng phòng</span>
          </button>
        </Link>
      </div>

      <div className="">
        <Link to="/host/reservation">
          <button
            class={`sm:py-2  drop-shadow-md inline-flex items-center justify-between  ${
              isActive(["/host/reservation"]) ? "text-blue-400" : ""
            }  `}
          >
            <ReceiptLongIcon />
            <span className="pl-3 text-xl">Đặt phòng</span>
          </button>
        </Link>
      </div>

      <div className="">
        <Link to='/host/room-status' >
        <button
          class={`sm:py-2 sm:px-4 drop-shadow-md inline-flex items-center justify-between  `}
        >
          <DateRangeIcon />
          <span className="pl-3 text-xl">Tình trạng phòng trống</span>
        </button>
        </Link>
      </div>

      <div className="">
        <button
          class={`sm:py-2 sm:px-4 drop-shadow-md inline-flex items-center justify-between  `}
        >
          <ReceiptLongIcon />
          <span className="pl-3 text-xl">Đặt phòng</span>
        </button>
      </div>

      <div className="">
        <button
          class={`sm:py-2 sm:px-4 drop-shadow-md inline-flex items-center justify-between  `}
        >
          <BarChartIcon />
          <span className="pl-3 text-xl">Tài chính</span>
        </button>
      </div>

      <div className="">
        <button
          class={`sm:py-2 drop-shadow-md inline-flex items-center justify-between   ${
            isActive(["/host/review"]) ? "text-blue-400" : ""
          } `}
        >
          <FavoriteIcon />
          <span className="pl-3 text-xl">Đánh giá của khách</span>
        </button>
      </div>
    </header>
  );
};

export default NavHost;
