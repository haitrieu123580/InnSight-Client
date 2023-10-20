import React from "react";
import styles from "./RegisterHost4.module.scss";
import IcChevronLeft from "../../../components/icons/home-icons/IcChevronLeft";
import { Link } from "react-router-dom";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs from "dayjs";
import { FormLabel } from "@mui/material";
import { TimeField } from "@mui/x-date-pickers/TimeField";
import { useRef, useState } from "react";

const RegisterHost4Container = () => {
  const dateRef = useRef(null);
  const timeCheckins = [dayjs("2023-10-17T16:30"), dayjs("2023-10-17T18:30")];
  const timeCheckouts = [dayjs("2023-10-17T15:30"), dayjs("2023-10-17T18:30")];

  const [timeCheckinFrom, setTimeCheckinFrom] = useState(timeCheckins[0]);
  const [timeCheckinTo, setTimeCheckinTo] = useState(timeCheckins[1]);

  const [timeCheckoutFrom, setTimeCheckoutFrom] = useState(timeCheckouts[0]);
  const [timeCheckoutTo, setTimeCheckoutTo] = useState(timeCheckouts[1]);

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
              <FormLabel>Giờ nhận/trả phòng của Quý vị là khi nào?</FormLabel>
              <div className={`pt-5 ${styles["time"]}`} ref={dateRef}>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DemoContainer
                    components={["TimeField", "TimeField", "TimeField"]}
                  >
                    <div>
                      <TimeField className={`${styles['time-field']}`}
                        label="Nhận phòng từ"
                        value={timeCheckinFrom}
                        onChange={(newValue) => setTimeCheckinFrom(newValue)}
                        format="hh:mm a"
                      />

                      <TimeField className={`${styles['time-field']}`}
                        label="đến"
                        value={timeCheckinTo}
                        onChange={(newValue) => setTimeCheckinTo(newValue)}
                        format="hh:mm a"
                      />
                    </div>
                    <div>
                      <TimeField className={`${styles['time-field']}`}
                        label="Trả phòng từ"
                        value={timeCheckoutFrom}
                        onChange={(newValue) => setTimeCheckoutFrom(newValue)}
                        format="hh:mm a"
                      />

                      <TimeField className={`${styles['time-field']}`}
                        label="đến"
                        value={timeCheckoutTo}
                        onChange={(newValue) => setTimeCheckoutTo(newValue)}
                        format="hh:mm a"
                      />
                    </div>
                  </DemoContainer>
                </LocalizationProvider>
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
              <Link
                to="/host/register-5"
                className={`border-2  font-bold text-2xl flex-grow rounded-md text-center  ${styles["btn-continue"]}`}
              >
                <button className="h-full">Tiếp tục</button>
              </Link>
            </div>
          </div>
          <div className="flex-1"></div>
        </div>
      </div>
    </div>
  );
};

export default RegisterHost4Container;
