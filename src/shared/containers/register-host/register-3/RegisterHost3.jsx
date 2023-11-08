import React from "react";
import styles from "./RegisterHost3.module.scss";
import IcChevronLeft from "../../../components/icons/home-icons/IcChevronLeft";
import { Link } from "react-router-dom";
import Checkbox from "@mui/material/Checkbox";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";

import {
  Button,
  FormControl,
  FormLabel,
  Radio,
  RadioGroup,
  TextField,
  Stack,
} from "@mui/material";

const RegisterHost3Container = () => {
  const services = [
    {
      id: 1,
      name: "Nhà hàng",
    },
    {
      id: 2,
      name: "Quầy bar",
    },
    {
      id: 3,
      name: "Lễ tân 24 giờ",
    },
    {
      id: 4,
      name: "Trung tâm thể dục",
    },
    {
      id: 5,
      name: "Phòng xông hơi",
    },
    {
      id: 6,
      name: "Sân vườn",
    },
    {
      id: 7,
      name: "Sân thượng/hiên",
    },
    {
      id: 8,
      name: "Phòng không hút thuốc",
    },
    {
      id: 9,
      name: "Trung tâm Spa & chăm sóc sức khỏe",
    },
    {
      id: 10,
      name: "Wifi miễn phí",
    },

    {
      id: 11,
      name: "Trạm sạc xe điện",
    },
    {
      id: 12,
      name: "Hồ bơi",
    },
    {
      id: 13,
      name: "Bãi biển",
    },
    {
      id: 14,
      name: "Bồn tắm nóng",
    },
  ];
  const amenities = [
    {
      id: 1,
      name: "Điều hòa nhiệt độ",
    },
    {
      id: 2,
      name: "Bồn tắm nóng/Bể sục",
    },
  ];
  const handleAddService = (e) => {
    let addElement = e.target.parentElement.parentElement.parentElement;
    let infoService = addElement.children[1];
    infoService.classList.toggle("hidden");
  };
  return (
    <div className={` ${styles["register-3"]}`}>
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
          <div className={`flex-1 `}>
            <div className={`px-5 flex flex-col pb-2 ${styles["form"]} `}>
              <FormLabel id="demo-radio-buttons-group-label">
                Khách có thể sử dụng dịch vụ gì tại chỗ nghỉ của Quý vị?
              </FormLabel>

              <div className={`flex flex-col px-6  ${styles["info-hotel"]}`}>
                <FormGroup>
                  {services?.map((service) => {
                    return (
                      <FormControlLabel
                        key={service.id}
                        control={<Checkbox />}
                        label={service.name}
                      />
                    );
                  })}

                  <div className={`flex flex-col ${styles["add-service"]}`}>
                    <FormControlLabel
                      control={<Checkbox />}
                      label={"Thêm dịch vụ (nếu có)"}
                      onChange={handleAddService}
                    />
                    <div
                      className={`flex justify-between hidden ${styles["info-service"]}`}
                    >
                      <TextField
                        label="Tên dịch vụ"
                        id="service-name"
                        variant="standard"
                        size="small"
                      />
                      <TextField
                        label="Giá"
                        id="service-price"
                        variant="standard"
                        size="small"
                      />
                      <Button variant="outlined">Thêm</Button>
                    </div>
                  </div>
                </FormGroup>
              </div>
            </div>

            <div
              className={`px-5 flex flex-col pb-2 mt-3  ${styles["form"]}  `}
            >
              <FormLabel id="demo-radio-buttons-group-label">
                Khách có thể sử dụng tiện ích gì tại chỗ nghỉ của Quý vị?
              </FormLabel>

              <div className={`flex flex-col px-6  ${styles["info-hotel"]}`}>
                <FormGroup>
                  {amenities?.map((amenity) => {
                    return (
                      <FormControlLabel
                        key={amenity.id}
                        control={<Checkbox />}
                        label={amenity.name}
                      />
                    );
                  })}

                  <div className={`flex flex-col ${styles["add-amenity"]}`}>
                    <FormControlLabel
                      control={<Checkbox />}
                      label={"Thêm tiện ích (nếu có)"}
                      onChange={handleAddService}
                    />
                    <div
                      className={`flex justify-between hidden ${styles["info-amenity"]}`}
                    >
                      <TextField
                        label="Tên tiện ích"
                        id="amenity-name"
                        variant="standard"
                        size="small"
                      />
                      <Button variant="outlined">Thêm</Button>
                    </div>
                  </div>
                </FormGroup>
              </div>
            </div>

            <div className={`flex pt-7`}>
              <Link to="/host/register-2">
                <button
                  className={`border-2 px-6 py-3 mr-2 flex-none rounded-md`}
                >
                  <IcChevronLeft />
                </button>
              </Link>
              <Link  to="/host/register-4"
                  className={`border-2  font-bold text-2xl flex-grow rounded-md text-center  ${styles["btn-continue"]}`}
                  >
                <button className="h-full"
                >
                  Tiếp tục
                </button>
              </Link>
            </div>
          </div>

          <div className={`xl:flex-1 `}>
            <div className={`px-5 flex flex-col pb-2 ${styles["form"]} `}>
              <h3 className="py-3 text-lg border-0">
                Bữa sáng tại chỗ nghỉ của Quý vị như thế nào?
              </h3>

              <div className={`flex flex-col px-6  ${styles["info-hotel"]}`}>
                <FormControl>
                  <FormLabel id="breakfast">
                    Quý vị có phục vụ bữa sáng cho khách không?
                  </FormLabel>
                  <RadioGroup
                    aria-labelledby="breakfast"
                    defaultValue="yes"
                    name="group-breakfast"
                  >
                    <FormControlLabel
                      value="yes"
                      control={<Radio />}
                      label="Có"
                    />
                    <FormControlLabel
                      value="no"
                      control={<Radio />}
                      label="Không"
                    />
                  </RadioGroup>
                </FormControl>
              </div>
              <div className={`flex flex-col px-6  ${styles["info-hotel"]}`}>
                <FormControl>
                  <FormLabel id="breakfast-fee">
                    Bữa sáng có bao gồm trong giá khách trả không?
                  </FormLabel>
                  <RadioGroup
                    aria-labelledby="breakfast-fee"
                    defaultValue="yes"
                    name="group-breakfast-fee"
                  >
                    <FormControlLabel
                      value="yes"
                      control={<Radio />}
                      label="Có"
                    />
                    <FormControlLabel
                      value="no"
                      control={<Radio />}
                      label="Không"
                    />
                  </RadioGroup>
                </FormControl>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterHost3Container;
