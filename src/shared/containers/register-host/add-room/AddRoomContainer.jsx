import React, { useState } from "react";
import styles from "./AddRoomContainer.module.scss";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { ConstructionOutlined, Label } from "@mui/icons-material";
import {
  Button,
  Checkbox,
  FormControlLabel,
  FormGroup,
  GlobalStyles,
  TextField,
  ThemeProvider,
  createTheme,
} from "@mui/material";
import { Link } from "react-router-dom";
import IcChevronLeft from "../../../components/icons/home-icons/IcChevronLeft";
import BedroomChildIcon from "@mui/icons-material/BedroomChild";
const AddRoomContainer = () => {
  const roomTypes = [
    {
      id: 1,
      name: "Phòng giường đôi",
    },
    {
      id: 2,
      name: "Phòng Tiêu chuẩn có giường đôi",
    },
    {
      id: 3,
      name: "Phòng giường đơn cỡ lớn",
    },
    {
      id: 4,
      name: "Phòng giường đơn",
    },
    {
      id: 5,
      name: "Phòng Business",
    },
  ];
  const bedTypes = [
    {
      id: 1,
      name: "Giường đơn",
      description: "Rộng 90-130cm",
    },
    {
      id: 2,
      name: "Giường đôi",
      description: "Rộng 131-150cm",
    },
    {
      id: 3,
      name: "Giường cỡ (cỡ King)",
      description: "Rộng 151-180cm",
    },
    {
      id: 4,
      name: "Giường cực lớn (cỡ Super-King)",
      description: "Rộng 181-210cm",
    },
  ];

  const roomAmenities = [
    {
      id: 1,
      name: "Điều hòa nhiệt độ",
    },
    {
      id: 2,
      name: "Bồn tắm nóng/Bể sục",
    },
  ];
  const handleAddRoomAmenities = (e) => {
    let addElement = e.target.parentElement.parentElement.parentElement;
    let infoAmenity = addElement.children[1];
    infoAmenity.classList.toggle("hidden");
  };
  const [roomType, setRoomType] = useState("");
  // const [bedType, setBedType] = useState("");

  const handleChangeRoomType = (event) => {
    setRoomType(event.target.value);
  };
  const handleClickChangeRoomType = (event) => {};

  const [roomCount, setRoomCount] = useState(0);
  const handleChangeRoomCount = (event) => {
    setRoomCount(event.target.value);
  };
  const [bedCount, setBedCount] = useState(new Array(bedTypes.length).fill(0));
  const handleChangeBedCount = (event, index) => {
    const newCount = event.target.value;
    const updatedBedCount = [...bedCount];
    updatedBedCount[index] = newCount;
    setBedCount(updatedBedCount);
  };

  const [childrenCount, setChildrenCount] = useState(0);
  const handleChangeChildrenCount = (event) => {
    setChildrenCount(event.target.value);
  };

  const [adultCount, setAdultCount] = useState(0);
  const handleChangeAdultCount = (event) => {
    setAdultCount(event.target.value);
  };

  const [roomArea, setRoomArea] = useState(0);
  const handleChangeRoomArea = (event) => {
    setRoomArea(event.target.value);
  };

  const [bathroomCount, setBathroomCount] = useState(0);
  const handleChangeBathroom = (event) => {
    setBathroomCount(event.target.value);
  };

  const themeSelect = createTheme({
    sx: {
      body: {
        paddingRight: 0,
      },
    },
  });
  return (
    <div className={` ${styles["add-room"]}`}>
      <div className={`${styles["content"]}`}>
        <div className="title">
          <h2 className="text-3xl overflow-hidden">Thêm chi tiết phòng</h2>
        </div>
        <div className="flex xl:flex-row flex-col">
          <div className="flex-1 flex flex-col xl:pr-10">
            <div className="flex-1 flex-col justify-between border-2 my-4 px-5 rounded-md">
              <div className={`my-3  ${styles["room-type"]}`}>
                <h3 className="font-bold">Đây là loại phòng gì?</h3>
                <Box sx={{ minWidth: 100 }}>
                  <FormControl fullWidth>
                    <ThemeProvider theme={themeSelect}>
                      {/* <GlobalStyles styles={{ paddingRight: 0 }}/> */}
                      <Select
                        disableInjectingGlobalStyles
                        id="select-room-type"
                        value={roomType}
                        onChange={handleChangeRoomType}
                        className="my-2 h-10"
                        // onClick={handleClickChangeRoomType}
                      >
                        {roomTypes?.map((type) => {
                          return (
                            <MenuItem value={type.name}>{type.name}</MenuItem>
                          );
                        })}
                        ;
                      </Select>
                    </ThemeProvider>
                  </FormControl>
                </Box>
              </div>
              <div className={`mb-3 ${styles["room-count"]}`}>
                <h3 className="font-bold">
                  Quý khách có bao nhiêu phòng loại này?
                </h3>
                <input
                  type="number"
                  value={roomCount}
                  onChange={handleChangeRoomCount}
                  className="border-2 p-2 my-2"
                  min={0}
                />
              </div>
            </div>

            <div className="flex flex-col justify-between border-2 my-4 px-5 rounded-md">
              <div className={`my-3  ${styles["room-type"]}`}>
                <h3 className="font-bold">
                  Có loại giường nào trong phòng này?
                </h3>
                {bedTypes.map((bed, index) => {
                  return (
                    <div
                      className={`flex justify-between py-2 ${styles["count-bed-type"]}`}
                      key={bed.name}
                    >
                      <div className="flex flex-col">
                        <h3 className="">{bed.name}</h3>
                        <p className="text-slate-400">{bed.description}</p>
                      </div>
                      <input
                        type="number"
                        value={bedCount[index]}
                        onChange={(event) => handleChangeBedCount(event, index)}
                        className="border-2 p-2"
                        min={0}
                      />
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
          <div className="xl:flex-1 xl:pl-10">
            <div className="flex-1 flex-col justify-between border-2 my-4 px-5 rounded-md">
              <div className={`my-3  ${styles[""]}`}>
                <h3 className="font-bold">
                  Bao nhiêu khách có thể nghỉ ở phòng này?
                </h3>
                <div className="flex justify-between">
                  <div className="flex items-center">
                    <label htmlFor="children-count">Trẻ em:</label>
                    <input
                      id="children-count"
                      type="number"
                      value={childrenCount}
                      onChange={handleChangeChildrenCount}
                      className="border-2 p-2 m-2 w-14 h-6"
                      min={0}
                    />
                  </div>
                  <div>
                    <label htmlFor="children-count">Người lớn:</label>
                    <input
                      id="adult-count"
                      type="number"
                      value={adultCount}
                      onChange={handleChangeAdultCount}
                      className="border-2 p-2 m-2 w-14 h-6"
                      min={0}
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="flex-1 flex-col justify-between border-2 my-4 px-5 rounded-md">
              <div className={`my-3  ${styles[""]}`}>
                <h3 className="font-bold">Phòng này rộng bao nhiêu?</h3>
                <div className="flex justify-between">
                  <div className="flex items-center">
                    <label htmlFor="room-area">
                      Diện tích phòng(không bắt buộc):
                    </label>
                    <input
                      id="room-area"
                      type="text"
                      className="border-2 py-2 pl-2 ml-2 my-2 w-14 h-6"
                      value={roomArea}
                      onChange={handleChangeRoomArea}
                    />
                    <span className="px-2 pt-1 bg-gray-200 h-6 inline-block align-middle">
                      mét vuông
                    </span>
                  </div>
                </div>
                <div className="flex items-center">
                  <label htmlFor="children-count">Số phòng tắm:</label>
                  <input
                    id="children-count"
                    type="number"
                    value={bathroomCount}
                    onChange={handleChangeBathroom}
                    className="border-2 p-2 m-2 w-14 h-6"
                    min={0}
                  />
                </div>
              </div>
            </div>
            <div
              className={`border-2 my-4 px-5 rounded-md  flex flex-col   ${styles[""]}  `}
            >
              <h3 className="font-bold mt-3">Tiện ích chung?</h3>

              <div className={`flex flex-col px-6  ${styles[""]}`}>
                <FormGroup>
                  {roomAmenities?.map((roomAmenity) => {
                    return (
                      <FormControlLabel
                        key={roomAmenity.id}
                        control={<Checkbox />}
                        label={roomAmenity.name}
                      />
                    );
                  })}

                  <div className={`flex flex-col ${styles["add-amenity"]}`}>
                    <FormControlLabel
                      control={<Checkbox />}
                      label={"Thêm tiện ích (nếu có)"}
                      onChange={handleAddRoomAmenities}
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
          </div>
        </div>
        <div className={`w-1/2 flex pt-7`}>
          <Link to="/host/register-list-section">
            <button className={`border-2 px-6 py-3 mr-2 flex-none rounded-md`}>
              <IcChevronLeft />
            </button>
          </Link>
          <Link
            to="/host/add-room-price"
            className={`border-2  font-bold text-2xl flex-grow rounded-md text-center  ${styles["btn-continue"]}`}
          >
            <button className="h-full">Tiếp tục</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AddRoomContainer;
