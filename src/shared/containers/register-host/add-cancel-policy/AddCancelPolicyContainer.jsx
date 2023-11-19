import React, { useState } from "react";
import styles from "./AddCancelPolicyContainer.module.scss";
import { Link } from "react-router-dom";
import IcChevronLeft from "../../../components/icons/home-icons/IcChevronLeft";
import {
  Box,
  FormControlLabel,
  Radio,
  RadioGroup,
  Select,
} from "@mui/material";
import { MenuItem } from "@mui/material";

const AddCancelPolicyContainer = () => {
  const cancelTimes = [
    "18h trước thời gian nhận phòng",
    "24h trước thời gian nhận phòng",
    "12h trước thời gian nhận phòng",
  ];
  const feeCancels = ["Giá cho đêm đầu tiên", "100% tổng giá"];
  const [cancelTime, setCancelTime] = useState(cancelTimes[0]);
  const [feeCancel, setFeeCancel] = useState(feeCancels[0]);
  const handleChangeCancelTime = (event) => {
    setCancelTime(event.target.value);
  };

  const handleChangeFeeCancel = (event) => {
    setFeeCancel(event.target.value);
  };
  return (
    <div className={` ${styles["add-cancel-policy"]}`}>
      <div className={`${styles["content"]}`}>
        <div className="title">
          <h2 className="text-3xl overflow-hidden">Chính sách hủy phòng</h2>
        </div>
        <Box
          sx={{
            border: "1px solid #dadada",
            width: "50%",
            paddingY: 3,
            paddingX:5,
            marginY: 3,
            borderRadius: 2,
          }}
        >
          <h2 className="text-l pb-2 font-bold">
            Khách có thể hủy đặt phòng miễn phí khi nào?
          </h2>
          <Select
            fullWidth
            id="cancel-time-select"
            value={cancelTime}
            className="mb-8"
            onChange={(event) => {
              handleChangeCancelTime(event);
            }}
          >
            {cancelTimes.map((time) => {
              return <MenuItem value={time} key={time}>{time}</MenuItem>;
            })}
          </Select>

          <h2 className="text-l pb-2 font-bold">
            Khách bị tính phí bao nhiêu nếu họ hủy sau thời gian hủy miễn phí
            trên?
          </h2>
          <RadioGroup
            value={feeCancel}
            name="fee-cancel-radio"
            onChange={handleChangeFeeCancel}
          >
            {feeCancels.map((fee) => {
              return (
                <FormControlLabel value={fee} control={<Radio />} label={fee}  key={fee}/>
              );
            })}
          </RadioGroup>
          <p className="text-gray-400 pt-3">Để tránh việc Quý vị tốn thời gian xử lý các đặt phòng do nhầm lẫn, 
          chúng tôi tự động miễn phí hủy cho các khách hủy trong vòng 24h kể từ thời điểm đặt</p>
        </Box>
        <div className={`w-1/2 flex pt-7`}>
          <Link to="/host/add-room-price">
            <button className={`border-2 px-6 py-3 mr-2 flex-none rounded-md`}>
              <IcChevronLeft />
            </button>
          </Link>
          <Link
            to="/host/add-room-image"
            className={`border-2  font-bold text-2xl flex-grow rounded-md text-center  ${styles["btn-continue"]}`}
          >
            <button className="h-full">Tiếp tục</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AddCancelPolicyContainer;
