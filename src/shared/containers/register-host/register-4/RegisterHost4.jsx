import React from "react";
import styles from "./RegisterHost4.module.scss";
import IcChevronLeft from "../../../components/icons/home-icons/IcChevronLeft";
import { Link } from "react-router-dom";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs from "dayjs";
import { FormLabel } from "@mui/material";
import { TimeField } from "@mui/x-date-pickers/TimeField";
import { useRef, useState } from "react";
import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import { addCheckInCheckOutTime } from "../../../../redux/host/slice";
const RegisterHost4Container = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const dateRef = useRef(null);
  const timeCheckin = dayjs("2023-10-17T11:30");
  const timeCheckout = dayjs("2023-10-17T08:30");
  const [timeCheckinFrom, setTimeCheckinFrom] = useState(timeCheckin);
  const [timeCheckoutFrom, setTimeCheckoutFrom] = useState(timeCheckout);
  const [mainEmail, setMainEmail] = useState("");
  const [mainPhoneNumber, setMainPhoneNumber] = useState();
  const onSubmit = () => {
    dispatch({
      type: addCheckInCheckOutTime,
      payload: {
        mainPhoneNumber: mainPhoneNumber,
        mainEmail: mainEmail,
        checkInTime: timeCheckinFrom.format("HH:mm:ss"),
        checkOutTime: timeCheckoutFrom.format("HH:mm:ss"),
      },
    });
    navigate("/host/register-5");
  };
  return (
    <div className={` ${styles["register-4"]}`}>
      <div className={`${styles["content"]}`}>
        <div className="title">
          <h2 className="text-3xl overflow-hidden">
            Đăng chỗ nghỉ của Quý vị trên InnSight và bắt đầu đón tiếp khách
            thật nhanh chóng!
          </h2>
          <p className="text-xl py-4">
            Cho chúng tôi biết thêm về chỗ nghỉ của Quý vị
          </p>
        </div>
        <div className="block lg:flex lg:justify-between lg:space-x-3 ">
          <div className={`flex-1`}>
            <div className={`px-5 flex flex-col py-5 ${styles["form"]} `}>
              <div>
                <FormLabel>
                  Vui lòng cho chúng tôi biết số điện thoại để liên hệ với bạn?
                </FormLabel>
                <div className="pt-2">
                  <input
                    className="h-8 mx-3 px-2  border  border-slate-400 hover:border-slate-700 rounded-sm"
                    placeholder="Nhập số điện thoại"
                    value={mainPhoneNumber}
                    onChange={(e) => {
                      setMainPhoneNumber(e.target.value);
                    }}
                  />
                </div>
              </div>
              <div className="pt-4">
                <FormLabel>
                  Vui lòng cho chúng tôi biết email chính để liên hệ với bạn?
                </FormLabel>
                <div className="pt-2">
                  <input
                    className="h-8 mx-3 px-2 border border-slate-400 hover:border-slate-700 rounded-sm "
                    placeholder="Nhập email liên hệ "
                    value={mainEmail}
                    onChange={(e) => {
                      setMainEmail(e.target.value);
                    }}
                  />
                </div>
              </div>
              <div className="pt-4">
                <FormLabel>Giờ nhận/trả phòng của Quý vị là khi nào?</FormLabel>
                <div className={`pt-3 ${styles["time"]}`} ref={dateRef}>
                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <div>
                      <TimeField
                        className={`${styles["time-field"]}`}
                        label="Nhận phòng"
                        value={timeCheckinFrom}
                        onChange={(newValue) => setTimeCheckinFrom(newValue)}
                        format="hh:mm a"
                      />
                      <TimeField
                        className={`${styles["time-field"]}`}
                        label="Trả phòng"
                        value={timeCheckoutFrom}
                        onChange={(newValue) => setTimeCheckoutFrom(newValue)}
                        format="hh:mm a"
                      />
                    </div>
                  </LocalizationProvider>
                </div>
              </div>
            </div>

            <div className={`flex pt-7`}>
              <Link to="/host/register-3">
                <button
                  className={`border-2 px-6 py-3 mr-2 flex-none rounded-md`}
                >
                  <IcChevronLeft />
                </button>
              </Link>
              <button
                className={`border-2  font-bold text-2xl flex-grow rounded-md text-center  ${styles["btn-continue"]}`}
                onClick={onSubmit}
              >
                Tiếp tục
              </button>
            </div>
          </div>
          <div className="flex-1"></div>
        </div>
      </div>
    </div>
  );
};

export default RegisterHost4Container;
