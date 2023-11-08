import React, { useState } from "react";
import styles from "./AddRoomPriceContainer.module.scss";
import { Link } from "react-router-dom";
import IcChevronLeft from "../../../components/icons/home-icons/IcChevronLeft";
import { Box, Stack, TextField } from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";

const AddRoomPriceContainer = () => {
  const [price, setPrice] =useState (0);
  return (
    <div className={` ${styles["add-room-price"]}`}>
      <div className={`${styles["content"]}`}>
        <div className="title">
          <h2 className="text-3xl overflow-hidden">
            Thiết lập giá mỗi đêm cho phòng này
          </h2>
        </div>
        <Box sx={{ border: "1px solid #dadada", width: "50%", padding:3, marginY: 3, borderRadius: 2,}}>
          <h2 className="text-xl pb-2">
            Quý vị muốn thu bao nhiêu tiền mỗi đêm?
          </h2>
          <Stack paddingX={3} paddingBottom={4}>
            <h3 className="pb-2">Số tiền khách trả</h3>
            <TextField
              id="price-room"
              helperText="Bao gồm các loại thuế, phí và hoa hồng"
              onChange={(e)=>{setPrice(e.target.value); console.log (price)}}
            />
          </Stack>
          <Stack paddingX={8} spacing={2}>
            <h3 className="text-gray-400 py-1">15% hoa hồng cho InnSight</h3>
            <Stack direction="row" spacing={1}>
              <CheckIcon />
              <h3 className="text-gray-400 py-1">
                Trợ giúp 24/7 bằng ngôn ngữ của Quý vị
              </h3>
            </Stack>
            <Stack direction="row" spacing={1}>
              <CheckIcon />
              <h3 className="text-gray-400 py-1">
                Tiết kiệm thời gian với đặt phòng được xác nhận tự động
              </h3>
            </Stack>
            <hr width="100%" />
            <h3>Doanh thu của Quý vị (bao gồm thuế): {price*85/100} VND </h3>
          </Stack>
        </Box>
        <div className={`w-1/2 flex pt-7`}>
          <Link to="/host/add-room">
            <button className={`border-2 px-6 py-3 mr-2 flex-none rounded-md`}>
              <IcChevronLeft />
            </button>
          </Link>
          <Link
            to="/host/add-cancel-policy"
            className={`border-2  font-bold text-2xl flex-grow rounded-md text-center  ${styles["btn-continue"]}`}
          >
            <button className="h-full">Tiếp tục</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AddRoomPriceContainer;
