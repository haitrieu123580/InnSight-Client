import React, { useState , useEffect} from "react";
import styles from "./RegisterFinished.module.scss";
import IcChevronLeft from "../../../components/icons/home-icons/IcChevronLeft";
import { Link } from "react-router-dom";
import DashboardIcon from "@mui/icons-material/Dashboard";
import {
  Box,
  Checkbox,
  FormControlLabel,
  FormGroup,
  Typography,
} from "@mui/material";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";

const RegisterFinishedContainer = () => {
  const [guaranteeChecked, setGuaranteeChecked] = useState(false);
  const [agreeChecked, setAgreeChecked] = useState(false);
  const [isFinished, setFinished] = useState(false);

  console.log("isFinished", isFinished);

  const handleChangeGuaranteeChecked = (event) => {
    setGuaranteeChecked(event.target.checked);
  };

  const handleChangeAgreeChecked = (event) => {
    setAgreeChecked(event.target.checked);

  };
  useEffect(() => {
    if (guaranteeChecked && agreeChecked) {
      setFinished(true);
    } else {
      setFinished(false);
    }
  }, [guaranteeChecked, agreeChecked]);


  console.log("guaranteeChecked:", guaranteeChecked);
  console.log("agreeChecked:", agreeChecked);
  return (
    <div className={` ${styles["register-finished"]}`}>
      <div className={`${styles["content"]}`}>
        <div className="title">
          <h2 className="text-3xl overflow-hidden">
            Xong rồi đấy! Quý vị đã làm hết mọi thứ cần thiết trước khi chào đón
            vị khách đầu tiên đến nghỉ
          </h2>
          <p className="text-xl py-4">
            Sau khi hoàn tất thủ tục, Quý vị sẽ có thể:
          </p>
          <hr width="100%" />
        </div>
        <div className="block lg:flex lg:justify-between lg:space-x-3 mt-5">
          <div className={`flex-1 `}>
            <Box display={"flex"} alignItems="center" paddingY={2}>
              <DashboardIcon
                sx={{ marginRight: 2 }}
                fontSize="large"
                color="disabled"
              />
              <Typography>Quản lí chỗ nghỉ từ dashboard</Typography>
            </Box>

            <Box display={"flex"} alignItems="center" paddingY={2}>
              <TrendingUpIcon
                sx={{ marginRight: 2 }}
                fontSize="large"
                color="disabled"
              />
              <Typography>
                Nhận đặt phòng và tăng doanh thu từ các vị khách ghé thăm trang
                web của chúng tôi
              </Typography>
            </Box>
            <hr width="100%" />
            <FormGroup className="mt-5">
              <FormControlLabel
                control={<Checkbox 
                  checked={guaranteeChecked}
                  onChange={handleChangeGuaranteeChecked}
                />}
                label="Tôi cam đoan rằng đây là doanh nghiệp chỗ nghỉ hợp
              pháp với tất cả giấy phép cần thiết mà tôi có thể xuất trình khi được yêu cầu chứng minh."
              />
              <FormControlLabel
                // required
                control={<Checkbox 
                  checked={agreeChecked}
                  onChange={handleChangeAgreeChecked}
                />}
                label="Tôi đã đọc, chấp nhận và đồng ý với Điều khoản chung."
              />
            </FormGroup>
            <div className={`flex pt-7`}>
              <Link to="/host/register-list-section/3">
                <button
                  className={`border-2 px-6 py-3 mr-2 flex-none rounded-md`}
                >
                  <IcChevronLeft />
                </button>
              </Link>
              <Link
                className={`border-2  font-bold text-2xl flex-grow rounded-md text-center  ${styles["btn-continue"]}`}
                to={isFinished?"/host/dashboard":""}
              >
                <button className="h-full">
                  Hoàn tất đăng nhập và mở phòng cho khách đặt
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterFinishedContainer;
