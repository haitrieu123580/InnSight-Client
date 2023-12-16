import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import HostAction from "../../../../redux/host/action";
const UpdateHotelInfoContainer = () => {
  const hotelId = JSON.parse(localStorage.getItem("hotelId"));
  const dispatch = useDispatch();

  return (
    <>
        <div className="flex justify-between ">
          <div>
            <h1>Chỉnh sửa thông tin khách sạn</h1>

          </div>
        </div>
      </>

  );
};

export default UpdateHotelInfoContainer;
