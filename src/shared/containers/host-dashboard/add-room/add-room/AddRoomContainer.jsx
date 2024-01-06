import React, { useEffect, useState } from "react";
import styles from "./AddRoomContainer.module.scss";
import Box from "@mui/material/Box";
import {
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormLabel,
  Input,
  TextField,
} from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import IcChevronLeft from "../../../../components/icons/home-icons/IcChevronLeft";
import { useDispatch, useSelector } from "react-redux";
import { addBasicInfoRoomType } from "../../../../../redux/host/slice";
import Constants from "../../../../../utils/Contants";
import HostAction from "../../../../../redux/host/action";
import ShowToastify from "../../../../../utils/ShowToastify";
import { useForm } from "react-hook-form";
const AddRoomContainer = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const bedTypes = Constants.bedTypes;
  useEffect(() => {
    dispatch({
      type: HostAction.GET_AMENITIES,
      onSuccess: () => {},
      onError: () => {
        ShowToastify.showErrorToast("Xảy ra lỗi, xin thử lại sau");
      },
    });
  }, []);

  useEffect(() => {
    dispatch({
      type: HostAction.GET_VIEWS,
      onSuccess: () => {},
      onError: () => {
        ShowToastify.showErrorToast("Xảy ra lỗi, xin thử lại sau");
      },
    });
  }, []);
  const roomAmenities = useSelector((state) => state.Host.roomAmenities) || [];
  const views = useSelector((state) => state.Host.views) || [];

  const handleAddRoomAmenities = (e) => {
    let addElement = e.target.parentElement.parentElement.parentElement;
    let infoAmenity = addElement.children[1];
    infoAmenity.classList.toggle("hidden");
  };
  const [roomType, setRoomType] = useState("");
  const handleChangeRoomType = (event) => {
    setRoomType(event.target.value);
  };
  const [roomCount, setRoomCount] = useState(1);
  const handleChangeRoomCount = (event) => {
    setRoomCount(event.target.value);
  };
  const [bedTypeCount, setBedTypeCount] = useState(
    bedTypes.map((bedType) => ({ name: bedType.name, count: 0 }))
  );
  const handleChangeBedCount = (event, index) => {
    const value = event.target.value;
    setBedTypeCount((prevBedCount) => {
      const newBedCount = [...prevBedCount];
      newBedCount[index] = { ...newBedCount[index], count: value };
      return newBedCount;
    });
  };
  const [childrenCount, setChildrenCount] = useState(0);
  const handleChangeChildrenCount = (event) => {
    setChildrenCount(event.target.value);
  };
  const [adultCount, setAdultCount] = useState(1);
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

  const [roomName, setRoomName] = useState([]);
  const handleTypeRoomName = (index, event) => {
    setRoomName((prevRoomName) => {
      const newRoomName = [...prevRoomName];
      newRoomName[index] = event.target.value;
      return newRoomName;
    });
  };

  const [view, setView] = useState("");
  const handleChangeView = (event) => {
    setView(event.target.value);
  };
  const [extraAmenityName, setExtraAmenityName] = useState("");
  const [extraAmenities, setExtraAmenities] = useState([]);
  const [selectedAmenities, setSelectedAmenities] = useState([]);
  const handleAddExtraAmenity = () => {
    setExtraAmenities([...extraAmenities, extraAmenityName]);
    setSelectedAmenities([...selectedAmenities, extraAmenities]);
  };

  const handleCheckedAmenities = (e) => {
    const checkedAmenity = selectedAmenities.find(
      (amenity) => amenity.name === e.target.name
    );
    setSelectedAmenities(
      checkedAmenity
        ? selectedAmenities.filter((amenity) => amenity !== e.target.value)
        : [...selectedAmenities, e.target.name]
    );
  };
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    criteriaMode: "all",
  });
  const onSubmit = () => {
    const basicInfoRoomType = {
      name: roomType,
      sdRoomName: roomName,
      count: roomCount,
      bedTypes: bedTypeCount,
      roomArea: roomArea,
      adultCount: adultCount,
      childrenCount: childrenCount,
      amenities: selectedAmenities,
      view: view,
    };
    dispatch({
      type: addBasicInfoRoomType,
      payload: basicInfoRoomType,
    });

    navigate("/host/add-room-price");
  };
  return (
    <div className={` ${styles["add-room"]}`}>
      <div className={`${styles["content"]}`}>
        <div className="title">
          <h2 className="text-3xl overflow-hidden">Thêm chi tiết phòng</h2>
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="flex xl:flex-row flex-col">
            <div className="flex-1 flex flex-col xl:pr-10">
              <div className="flex-1 flex-col justify-between border-2 my-4 px-5 rounded-md">
                <div className={`my-3  ${styles["room-type"]}`}>
                  <h3 className="font-bold">
                    Đây là loại phòng gì?
                    <span className="text-red-600"> *</span>
                  </h3>
                  <Box sx={{ minWidth: 100 }}>
                    <TextField
                      fullWidth
                      id="roomtypename"
                      className="my-2"
                      onChange={handleChangeRoomType}
                      {...register("roomtypename", {
                        required: "Tên loại phòng là bắt buộc",
                      })}
                    />
                  </Box>
                  {errors.roomtypename && (
                    <span className="text-red-600">
                      {errors.roomtypename.message}
                    </span>
                  )}
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
                    min={1}
                  />
                </div>
                <div>
                  {roomCount > 0 && (
                    <>
                      <FormLabel id="demo-radio-buttons-group-label">
                        Bây giờ bạn hãy điền tên từng phòng của loại phòng này?
                      </FormLabel>
                      {Array.from({ length: roomCount }, (_, i) => (
                        <TextField
                          key={i}
                          fullWidth
                          id={`room-type-name-${i}`}
                          placeholder={`Tên phòng ${i + 1}`}
                          className="my-2"
                          onChange={(event) => handleTypeRoomName(i, event)}
                        />
                      ))}
                    </>
                  )}
                </div>
              </div>
              <div className="flex flex-col justify-between border-2 my-4 px-5 rounded-md">
                <div className={`my-3  ${styles["room-type"]}`}>
                  <h3 className="font-bold">
                    Có loại giường nào trong phòng này?
                  </h3>
                  {bedTypeCount.map((bed, index) => {
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
                          value={bed.count}
                          onChange={(event) =>
                            handleChangeBedCount(event, index)
                          }
                          className="border-2 p-2"
                          min={0}
                        />
                      </div>
                    );
                  })}
                </div>
              </div>
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
                        min={1}
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
              <div className="flex-1 flex-col justify-between border-2 my-4 px-5 rounded-md">
                <div className={`my-3  ${styles[""]}`}>
                  <h3 className="font-bold">Phòng này có view như thế nào?</h3>
                  <div className="flex justify-between">
                    <div className="flex items-center">
                      <FormControl fullWidth>
                        <select
                          id="select-view"
                          value={view}
                          onChange={handleChangeView}
                          className="my-2 h-10 border rounded-sm border-[#dedfe0] w-full"
                        >
                          {views?.map((viewItem) => (
                            <option key={viewItem.name} value={viewItem.name}>
                              {viewItem.name}
                            </option>
                          ))}
                        </select>
                      </FormControl>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="xl:flex-1 xl:pl-10">
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
                          name={roomAmenity.name}
                          onChange={handleCheckedAmenities}
                        />
                      );
                    })}
                    {extraAmenities?.map((roomAmenity, index) => {
                      return (
                        <FormControlLabel
                          key={index}
                          control={<Checkbox checked />}
                          label={roomAmenity}
                          name={roomAmenity}
                        />
                      );
                    })}
                    <div className={`flex flex-col `}>
                      <FormControlLabel
                        control={<Checkbox />}
                        label={"Thêm dịch vụ (nếu có)"}
                        onChange={handleAddRoomAmenities}
                      />
                      <div className={`flex justify-between hidden `}>
                        <Input
                          id="amenity-name"
                          variant="standard"
                          placeholder="Ten tien ich"
                          onChange={(e) => setExtraAmenityName(e.target.value)}
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
          </div>

          <div className={`w-1/2 flex pt-7`}>
            <Link to="/host/dashboard">
              <button
                className={`border-2 px-6 py-3 mr-2 flex-none rounded-md`}
              >
                <IcChevronLeft />
              </button>
            </Link>

            <button
              className={`border-2  font-bold text-2xl flex-grow rounded-md text-center  ${styles["btn-continue"]}`}
              type="submit"
            >
              Tiếp tục
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddRoomContainer;
