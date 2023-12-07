import React, { useState } from "react";
import styles from "./AddRoomContainer.module.scss";
import Box from "@mui/material/Box";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import CheckIcon from "@mui/icons-material/Check";
import {
  Button,
  Checkbox,
  FormControlLabel,
  FormGroup,
  Radio,
  RadioGroup,
  Stack,
  TextField,
  ThemeProvider,
  createTheme,
} from "@mui/material";
import { Link } from "react-router-dom";
import IcChevronLeft from "../../../components/icons/home-icons/IcChevronLeft";
import BedroomChildIcon from "@mui/icons-material/BedroomChild";
import {
  bedTypes,
  roomTypes,
  roomAmenities,
  cancelTimes,
  feeCancels,
} from "../../../../api/mock-data/host";
import IcXmark from "../../../components/icons/home-icons/IcXmark";
import CircleExclamation from "../../../components/icons/home-icons/IcCircleExclamation";

const AddRoom = () => {
  const handleAddRoomAmenities = (e) => {
    let addElement = e.target.parentElement.parentElement.parentElement;
    let infoAmenity = addElement.children[1];
    infoAmenity.classList.toggle("hidden");
  };
  const [roomType, setRoomType] = useState("");

  const handleChangeRoomType = (event) => {
    setRoomType(event.target.value);
  };

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
  const [price, setPrice] = useState(0);
  const themeSelect = createTheme({
    sx: {
      body: {
        paddingRight: 0,
      },
    },
  });
  const [cancelTime, setCancelTime] = useState(cancelTimes[0]);
  const [feeCancel, setFeeCancel] = useState(feeCancels[0]);
  const handleChangeCancelTime = (event) => {
    setCancelTime(event.target.value);
  };

  const handleChangeFeeCancel = (event) => {
    setFeeCancel(event.target.value);
  };
  const [previewImages, setPreviewImages] = useState([]);

  const handleFileChange = (event) => {
    const files = event.target.files;
    const newImages = Array.from(files).map((file) => ({
      file,
      preview: URL.createObjectURL(file),
    }));

    setPreviewImages((prevImages) => [...prevImages, ...newImages]);
  };

  const handleImageRemove = (index) => {
    const updatedImages = [...previewImages];
    updatedImages.splice(index, 1);
    setPreviewImages(updatedImages);
  };

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
                      <Select
                        disableInjectingGlobalStyles
                        id="select-room-type"
                        value={roomType}
                        onChange={handleChangeRoomType}
                        className="my-2 h-10"
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
        <Box
          sx={{
            border: "1px solid #dadada",
            width: "50%",
            padding: 3,
            marginY: 3,
            borderRadius: 2,
          }}
        >
          <h2 className="text-xl pb-2">
            Quý vị muốn thu bao nhiêu tiền mỗi đêm?
          </h2>
          <Stack paddingX={3} paddingBottom={4}>
            <h3 className="pb-2">Số tiền khách trả</h3>
            <TextField
              id="price-room"
              helperText="Bao gồm các loại thuế, phí và hoa hồng"
              onChange={(e) => {
                setPrice(e.target.value);
                console.log(price);
              }}
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
            <h3>
              Doanh thu của Quý vị (bao gồm thuế): {(price * 85) / 100} VND{" "}
            </h3>
          </Stack>
        </Box>
        <Box
          sx={{
            border: "1px solid #dadada",
            width: "50%",
            paddingY: 3,
            paddingX: 5,
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
              return (
                <MenuItem value={time} key={time}>
                  {time}
                </MenuItem>
              );
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
                <FormControlLabel
                  value={fee}
                  control={<Radio />}
                  label={fee}
                  key={fee}
                />
              );
            })}
          </RadioGroup>
          <p className="text-gray-400 pt-3">
            Để tránh việc Quý vị tốn thời gian xử lý các đặt phòng do nhầm lẫn,
            chúng tôi tự động miễn phí hủy cho các khách hủy trong vòng 24h kể
            từ thời điểm đặt
          </p>
        </Box>
        <div
          className={`border-dashed border-2 items-center flex justify-center  ${styles["container-upload-image"]}`}
        >
          <input
            type="file"
            accept="image/*"
            multiple
            onChange={handleFileChange}
            className=""
          />
        </div>
        <div className={`${styles["previewStyles"]}`}>
          {previewImages.map((image, index) => (
            <div key={index} className={`${styles["imageContainerStyles"]}`}>
              <img
                src={image.preview}
                alt={`preview-${index}`}
                className={`${styles["imageStyles"]}`}
              />
              <button
                className={`${styles["btn-remove"]}`}
                onClick={() => handleImageRemove(index)}
              >
                <IcXmark />
              </button>
            </div>
          ))}
        </div>
        {previewImages.length < 5 ? (
          <div className="flex items-center">
            <CircleExclamation />
            <span className="text-red-600 pl-1">
              Đăng tải thêm {5 - previewImages.length} để tiếp tục
            </span>
          </div>
        ) : (
          console.log("Đủ ảnh")
        )}

        <div className={`w-1/2 flex pt-7`}>
          <Link to="/host/dashboard">
            <button className={`border-2 px-6 py-3 mr-2 flex-none rounded-md`}>
              <IcChevronLeft />
            </button>
          </Link>
          <Link
            to="/host/add-room/2"
            className={`border-2  font-bold text-2xl flex-grow rounded-md text-center  ${styles["btn-continue"]}`}
          >
            <button className="h-full">Tiếp tục</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AddRoom;
