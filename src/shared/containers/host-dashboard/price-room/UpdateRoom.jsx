import Button from "@mui/material/Button";
import React, { useEffect, useState } from "react";
import styles from "./PriceRoom.module.scss";
import { useDispatch, useSelector } from "react-redux";
import HostAction from "../../../../redux/host/action";
import ShowToastify from "../../../../utils/ShowToastify";
import Box from "@mui/material/Box";
import {
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormLabel,
  Input,
  TextField,
} from "@mui/material";
import { useNavigate } from "react-router";
const UpdateRoomContainer = () => {
  const { currentHotel } = useSelector((state) => state.Host);
  const hotelId= currentHotel
  const navigate = useNavigate();
  const { roomTypeDetail } = useSelector((state) => state.Host) || {};
  const dispatch = useDispatch();
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
  const [roomType, setRoomType] = useState(roomTypeDetail.name);
  const handleChangeRoomType = (event) => {
    setRoomType(event.target.value);
  };
  const [roomCount, setRoomCount] = useState(roomTypeDetail.rooms.length);
  const handleChangeRoomCount = (event) => {
    setRoomCount(event.target.value);
  };
  const [bedTypeCount, setBedTypeCount] = useState(
    roomTypeDetail.bedTypes.map((bedType) => ({
      name: bedType.name,
      count: bedType.count,
    }))
  );
  const handleChangeBedCount = (event, index) => {
    const value = event.target.value;
    setBedTypeCount((prevBedCount) => {
      const newBedCount = [...prevBedCount];
      newBedCount[index] = { ...newBedCount[index], count: value };
      return newBedCount;
    });
  };
  const [childrenCount, setChildrenCount] = useState(
    roomTypeDetail.childrenCount
  );
  const handleChangeChildrenCount = (event) => {
    setChildrenCount(event.target.value);
  };
  const [adultCount, setAdultCount] = useState(roomTypeDetail.adultCount);
  const handleChangeAdultCount = (event) => {
    setAdultCount(event.target.value);
  };
  const [roomArea, setRoomArea] = useState(roomTypeDetail.roomArea);
  const handleChangeRoomArea = (event) => {
    setRoomArea(event.target.value);
  };

  const [bathroomCount, setBathroomCount] = useState(
    roomTypeDetail.bathroomCount
  );
  const handleChangeBathroom = (event) => {
    setBathroomCount(event.target.value);
  };

  const [roomName, setRoomName] = useState(roomTypeDetail.rooms);
  const handleTypeRoomName = (index, event) => {
    setRoomName((prevRoomName) => {
      const newRoomName = [...prevRoomName];
      newRoomName[index] = event.target.value;
      return newRoomName;
    });
  };
  const [view, setView] = useState(roomTypeDetail.view);
  const handleChangeView = (event) => {
    setView(event.target.value);
  };
  const [extraAmenityName, setExtraAmenityName] = useState("");
  const [extraAmenities, setExtraAmenities] = useState([]);
  const [selectedAmenities, setSelectedAmenities] = useState(
    roomTypeDetail.amenities
  );
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
  const [price, setPrice] = useState(parseInt(roomTypeDetail.price.replace(/\./g, "")));
  const handleChangePrice = (event) => {
    setPrice(event.target.value);
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
  const onSubmit = () => {
    const formData = new FormData();
    formData.append("name", roomType || "");
    formData.append("count", roomCount || "");
    formData.append("price", price || "");
    formData.append("bathroomCount", bathroomCount || "");
    formData.append("roomArea", roomArea || "");
    formData.append("adultCount", adultCount || "");
    formData.append("childrenCount", childrenCount || "");
    formData.append("description", "");
    formData.append("view", view || "");
    if (roomName && Array.isArray(roomName)) {
      roomName.forEach((roomName, i) => {
        if (roomName) {
          formData.append(`sdRoomName[${i}]`, roomName || "");
        }
      });
    } else {
      formData.append("sdRoomName[0]", "");
    }
    if (selectedAmenities && Array.isArray(selectedAmenities)) {
      selectedAmenities.forEach((amenity, i) => {
        if (amenity) {
          formData.append(`amenities[${i}]`, amenity || "");
        }
      });
    } else {
      formData.append("amenities[0]", "");
    }
    if (previewImages[0]) {
      previewImages.forEach((image, index) => {
        if (image) {
          formData.append(`images[${index}]`, image.file);
        }
      });
    }
    if (bedTypeCount && Array.isArray(bedTypeCount)) {
      bedTypeCount.forEach((bedType, i) => {
        if (bedType && bedType.name) {
          formData.append(`bedTypes[${i}].name`, bedType.name || "");
          formData.append(`bedTypes[${i}].count`, bedType.count || 0);
        }
      });
    } else {
      formData.append("bedTypes[0].name", "");
      formData.append("bedTypes[0].count", 0);
    }
    dispatch({
      type: HostAction.UPDATE_ROOMTYPE,
      hotelId: hotelId,
      roomTypeId: roomTypeDetail.id,
      data: formData,
      onSuccess: () => {
        ShowToastify.showSuccessToast("Cập nhật phòng thành công!");
        navigate("/host/dashboard");
      },
      onError: () => {
        ShowToastify.showErrorToast("Cập nhật phòng thất bại. Vui lòng xem lại thông tin");
      },
    });
  };
  return (
    <div className={`${styles["content"]}`}>
      <h2 className="text-3xl overflow-hidden mt-8">
        Chỉnh sửa thông tin phòng
      </h2>
      <div className="flex xl:flex-row flex-col">
        <div className="flex-1 flex flex-col xl:pr-10">
          <div className="border-2 my-1 px-5 rounded-md">
            <div className={`my-3  ${styles["room-type"]}`}>
              <h3 className="font-bold">Đây là loại phòng gì?</h3>
              <Box sx={{ minWidth: 100 }}>
                <TextField
                  fullWidth
                  id="room-type-name"
                  className="my-2"
                  value={roomType}
                  onChange={handleChangeRoomType}
                />
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
                      value={roomName[i]}
                      onChange={(event) => handleTypeRoomName(i, event)}
                    />
                  ))}
                </>
              )}
            </div>
          </div>
          <div className="border-2 my-4 px-5 rounded-md">
            <div className={`my-3  ${styles["room-type"]}`}>
              <h3 className="font-bold">Có loại giường nào trong phòng này?</h3>
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
                      onChange={(event) => handleChangeBedCount(event, index)}
                      className="border-2 p-2"
                      min={0}
                    />
                  </div>
                );
              })}
            </div>
          </div>
          <div className=" border my-1 px-5 rounded-md">
            <div className={`my-3`}>
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
                    className="border p-2 m-2 w-14 h-6"
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
                    className="border p-2 m-2 w-14 h-6"
                    min={0}
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="border my-1 px-5 rounded-md">
            <div className={`my-3`}>
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
          <div className="border-2 my-4 px-5 rounded-md">
            <div className={`my-3`}>
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
          <div className="border-2 my-4 px-5 rounded-md">
            <div className={`my-3`}>
              <h3 className="font-bold">Phòng này có giá là bao nhiêu?</h3>
              <div className="flex justify-between">
                <div className="flex items-center">
                  <FormControl fullWidth>
                    <TextField
                      fullWidth
                      className="my-2"
                      value={price}
                      onChange={(event) => handleChangePrice(event)}
                    />
                  </FormControl>
                </div>
              </div>
            </div>
          </div>
          <div className="border-2 my-4 px-5 rounded-md">
            <div className={`my-3`}>
              <h3 className="font-bold">Hình ảnh phòng?</h3>
              <div className="flex justify-between">
                <div className="flex items-center">
                  <input
                    type="file"
                    accept="image/*"
                    multiple
                    onChange={handleFileChange}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="xl:flex-1 xl:pl-10">
          <div
            className={`border-2 my-4 xl:px-5 rounded-md  flex flex-col   ${styles[""]}  `}
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
                      checked={selectedAmenities.find(
                        (amenity) => amenity == roomAmenity.name
                      )}
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
                    <Button onClick={handleAddExtraAmenity} variant="outlined">
                      Thêm
                    </Button>
                  </div>
                </div>
              </FormGroup>
            </div>
          </div>
        </div>
      </div>
      <Button onClick={onSubmit}>Cập nhật</Button>
    </div>
  );
};

export default UpdateRoomContainer; 