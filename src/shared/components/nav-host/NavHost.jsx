import React from "react";
import styles from "./NavHost.module.scss";
import PriceChangeIcon from "@mui/icons-material/PriceChange";
import DateRangeIcon from "@mui/icons-material/DateRange";
import ReceiptLongIcon from '@mui/icons-material/ReceiptLong';
import BarChartIcon from '@mui/icons-material/BarChart';
import FavoriteIcon from '@mui/icons-material/Favorite';
const NavHost = () => {
  return (
    <header className={`hidden md:flex justify-between  ${styles["nav-host"]}` }>
      <div className="">
        <button
          class={`sm:py-2 sm:px-4 drop-shadow-md inline-flex items-center justify-between  `}
        >
          <PriceChangeIcon />
          <span className="pl-3 text-xl">Giá phòng</span>
        </button>
      </div>

      <div className="">
        <button
          class={`sm:py-2 sm:px-4 drop-shadow-md inline-flex items-center justify-between  `}
        >
          <DateRangeIcon />
          <span className="pl-3 text-xl">Tình trạng phòng trống</span>
        </button>
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
          class={`sm:py-2 sm:px-4 drop-shadow-md inline-flex items-center justify-between  `}
        >
          <FavoriteIcon />
          <span className="pl-3 text-xl">Đánh giá của khách</span>
        </button>
      </div>
    </header>
  );
};

export default NavHost;
