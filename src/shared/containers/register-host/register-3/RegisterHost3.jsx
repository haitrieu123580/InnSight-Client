import React from "react";
import styles from "./RegisterHost3.module.scss";
import IcChevronLeft from "../../../components/icons/home-icons/IcChevronLeft";
import { Link } from "react-router-dom";
import Checkbox from "@mui/material/Checkbox";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import { useState } from "react";
import {
  Button,
  FormControl,
  FormLabel,
  Radio,
  RadioGroup,
  Input,
} from "@mui/material";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import {
  addExtraAmenityHotel,
  addExtraServiceHotel,
} from "../../../../redux/host/slice";
import { useForm } from "react-hook-form";

const RegisterHost3Container = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  let amenities = [
    {
      id: 1,
      name: "Nhà hàng",
      price: 100,
    },
    {
      id: 2,
      name: "Quầy bar",
      price: 100,
    },
    {
      id: 3,
      name: "Lễ tân 24 giờ",
      price: 100,
    },
    {
      id: 4,
      name: "Trung tâm thể dục",
      price: 100,
    },
    {
      id: 5,
      name: "Phòng xông hơi",
      price: 100,
    },
    {
      id: 6,
      name: "Sân vườn",
      price: 100,
    },
    {
      id: 7,
      name: "Sân thượng/hiên",
      price: 100,
    },
    {
      id: 8,
      name: "Phòng không hút thuốc",
      price: 100,
    },
    {
      id: 9,
      name: "Trung tâm Spa & chăm sóc sức khỏe",
      price: 100,
    },
    {
      id: 10,
      name: "Wifi miễn phí",
      price: 100,
    },

    {
      id: 11,
      name: "Trạm sạc xe điện",
      price: 100,
    },
    {
      id: 12,
      name: "Hồ bơi",
      price: 100,
    },
    {
      id: 13,
      name: "Bãi biển",
      price: 100,
    },
    {
      id: 14,
      name: "Bồn tắm nóng",
      price: 100,
    },
  ];
  const [selectedAmenities, setSelectedAmenities] = useState([]);
  const [extraAmenity, setExtraAmenity] = useState();
  const [extraAmenityName, setExtraAmenityName] = useState("");
  const [extraAmenityPrice, setExtraAmenityPrice] = useState(0);
  const [serveBreakfast, setServeBreakfast] = useState("yes");
  const handleServeBreakfastChange = (event) => {
    setServeBreakfast(event.target.value);
  };
  const [breakfastIncluded, setBreakfastIncluded] = useState("yes");
  const handleBreakfastIncludedChange = (event) => {
    setBreakfastIncluded(event.target.value);
  };
  const handleToggleAddAmenity = (e) => {
    let addElement = e.target.parentElement.parentElement.parentElement;
    let infoAmenity = addElement.children[1];
    infoAmenity.classList.toggle("hidden");
  };
  const { handleSubmit } = useForm({
    criteriaMode: "all",
  });
  const onSubmit = () => {
    console.log("submit");
    const extraServices = {
      name: serveBreakfast === "yes" ? "Phục vụ bữa sáng" : "",
      price: breakfastIncluded === "yes" ? 0 : 0,
    };
    console.log("exAme", extraAmenity);
    dispatch({
      type: addExtraAmenityHotel,
      payload: extraAmenity,
    });
    console.log("exSe", extraServices);
    dispatch({
      type: addExtraServiceHotel,
      payload: extraServices,
    });
    navigate("/host/register-4");
  };
  const handleAddExtraAmenity = () => {
    setExtraAmenity({ name: extraAmenityName, price: extraAmenityPrice });
    setSelectedAmenities([...selectedAmenities, extraAmenityName]);
  };

  const handleCheckedAmenities = (e) => {
    const checkedAmenity = selectedAmenities.find(
      (amenity) => amenity === e.target.name
    );
    setSelectedAmenities(
      checkedAmenity
        ? selectedAmenities.filter((amenity) => amenity !== e.target.name)
        : [...selectedAmenities, e.target.name]
    );

    console.log(selectedAmenities);
  };
  const hotel = useSelector((state) => state.Host.newHotel);

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
        <form onSubmit={onSubmit}>
          <div className="block lg:flex lg:justify-between lg:space-x-3 ">
            <div className={`flex-1 `}>
              <div className={`px-5 flex flex-col pb-2 ${styles["form"]} `}>
                <FormLabel id="demo-radio-buttons-group-label">
                  Khách có thể sử dụng dịch vụ gì tại chỗ nghỉ của Quý vị?
                </FormLabel>

                <div className={`flex flex-col px-6  ${styles["info-hotel"]}`}>
                  <FormGroup>
                    {amenities?.map((amenity) => {
                      return (
                        <FormControlLabel
                          key={amenity.id}
                          control={<Checkbox />}
                          label={amenity.name}
                          name={amenity.name}
                          onChange={handleCheckedAmenities}
                        />
                      );
                    })}

                    <div className={`flex flex-col `}>
                      <FormControlLabel
                        control={<Checkbox />}
                        label={"Thêm dịch vụ (nếu có)"}
                        onChange={handleToggleAddAmenity}
                      />
                      <div className={`flex justify-between hidden `}>
                        <Input
                          id="amenity-name"
                          variant="standard"
                          placeholder="Ten tien ich"
                          onChange={(e) => setExtraAmenityName(e.target.value)}
                        ></Input>
                        <Input
                          placeholder="Giá"
                          id="amenity-price"
                          variant="standard"
                          onChange={(e) => setExtraAmenityPrice(e.target.value)}
                        ></Input>
                        <Button
                          onClick={handleAddExtraAmenity}
                          variant="outlined"
                        >
                          Thêm
                        </Button>
                      </div>
                    </div>
                  </FormGroup>
                </div>
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
                      onChange={handleServeBreakfastChange}
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
                    <FormLabel id="breakfast-included">
                      Bữa sáng có bao gồm trong giá khách trả không?
                    </FormLabel>
                    <RadioGroup
                      aria-labelledby="breakfast-included"
                      defaultValue="yes"
                      name="group-breakfast-included"
                      onChange={handleBreakfastIncludedChange}
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
          <div className={`flex pt-7 w-full lg:w-1/2`}>
            <Link to="/host/register-2">
              <button
                className={`border-2 px-6 py-3 mr-2 flex-none rounded-md`}
              >
                <IcChevronLeft />
              </button>
            </Link>
            <Link
              // to="/host/register-4"
              className={`border-2  font-bold text-2xl flex-grow rounded-md text-center  ${styles["btn-continue"]}`}
            >
              <button type="submit" className="h-full">
                Tiếp tục
              </button>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegisterHost3Container;
