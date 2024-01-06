import React, { Fragment, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import HostAction from "../../../../redux/host/action";
import { useForm } from "react-hook-form";
import ShowToastify from "../../../../utils/ShowToastify";
import styles from "./UpdateHotelInfo.module.scss";
import { Switch } from "@mui/material";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
const UpdateHotelInfoContainer = () => {
  const { currentHotel } = useSelector((state) => state.Host);
  const hotelId= currentHotel
  const userId = JSON.parse(localStorage.getItem("id"));
  const dispatch = useDispatch();
  const hotelInfo = useSelector((state) => state.Host.hotelInfo) || {};

  const { register, handleSubmit } = useForm({
    criteriaMode: "all",
  });
  const [isEditing, setIsEditing] = useState(false);
  const [loadData, setLoadData] = useState(false);

  useEffect(() => {
    dispatch({
      type: HostAction.GET_SERVICES,
      onSuccess: () => {},
      onError: () => {
        ShowToastify.showErrorToast("Xảy ra lỗi, xin thử lại sau");
      },
    });
  }, []);
  const services = useSelector((state) => state.Host.services) || [];
  const hotelAmenities = hotelInfo.hotelAmenities || [];
  useEffect(() => {
    if (hotelId) {
      dispatch({
        type: HostAction.GET_HOTEL,
        data: {
          hotelId: `${hotelId}`,
          checkInDay: null,
          checkOutDay: null,
        },
        onSuccess: () => {},
        onError: () => {
          ShowToastify.showErrorToast("Xảy ra lỗi, xin thử lại sau");
        },
      });
    }
    setLoadData(false)
  }, [dispatch, hotelId,loadData]);
  const item = hotelInfo;
  const handleClickEdit = () => {
    setIsEditing(!isEditing);
  };
  const [status, setStatus] = useState(hotelInfo.status);
   const handleChange = () => {
    if(status==="ACTIVE"){
      setStatus("INACTIVE")
    }
    else if(status==="INACTIVE"){
      setStatus("ACTIVE")
    }
  };

  const [timeCheckinFrom, setTimeCheckinFrom] = useState(hotelInfo.checkIn);
  const [timeCheckoutFrom, setTimeCheckoutFrom] = useState(hotelInfo.checkOut);

  const updateHotelAmenities = hotelAmenities.slice(); 
  const handleCheckedAmenities = (e) => {
    const statusAmenity = hotelAmenities.includes(e.target.name);
    if (statusAmenity) {
      const filteredAmenities = updateHotelAmenities.filter(
        (amenity) => amenity !== e.target.name
      );
      updateHotelAmenities.length = 0;
      updateHotelAmenities.push(...filteredAmenities);
    } else {
      updateHotelAmenities.push(e.target.name);
    }
  };

  const onSubmit = (data) => {
    data.checkIn = timeCheckinFrom;
    data.checkOut = timeCheckoutFrom;
    data.hotelAmenities = updateHotelAmenities;
    data.extraServices = hotelInfo.extraServices;
    const addressString = data.address.split(", ");
    const formData = new FormData();
    formData.append("name", data.hotelName || "");
    formData.append("checkInTime", data.checkIn || "");
    formData.append("checkOutTime", data.checkOut || "");
    formData.append("description", data.description || "");
    formData.append("province", addressString[0] || "");
    formData.append("district", addressString[1] || "");
    formData.append("ward", addressString[2] || "");
    formData.append("street", addressString[3] || "");
    formData.append("rate", hotelInfo.rate || "3");
    formData.append("status", status);

    if (updateHotelAmenities) {
      for (let i = 0; i < updateHotelAmenities.length; i++) {
        formData.append(`amenities[${i}].name`, updateHotelAmenities[i]);
        formData.append(`amenities[${i}].price`, 0);
      }
    } else {
      formData.append(`amenities[0]`, null);
    }

    if (data.extraServices && Array.isArray(data.extraServices)) {
      data.extraServices.forEach((extraService, i) => {
        if (extraService && extraService.name) {
          formData.append(`extraServices[${i}].name`, extraService.name || "");
          formData.append(
            `extraServices[${i}].price`,
            extraService.price || ""
          );
        }
      });
    } else {
      formData.append("extraServices[0].name", "");
      formData.append("extraServices[0].price", "");
    }
    if (data.images[0]) {
      for (let i = 0; i < data.images.length; i++) {
        const file = data.images[i];
        formData.append(`images[${i}]`, file);
      }
    } 
    dispatch({
      type: HostAction.UPDATE_HOTEL,
      userId: userId,
      hotelId: hotelId,
      data: formData,
      onSuccess: () => {
        ShowToastify.showSuccessToast("Thành công");
        setIsEditing(false)
      },
      onError: () => {
        ShowToastify.showErrorToast("Cập nhật thất bại, kiểm tra lại thông tin");
      },
    });
    setLoadData(true)
  };
  return (
    <>
      {item && (
        <div>
          <h1 className="text-3xl font-bold my-3">Thông tin khách sạn</h1>
          <h2>Cập nhật thông tin khách sạn của bạn</h2>
          {!isEditing ? (
            <>
              <div className={`${styles["content"]} mt-4 border`}>
                <div className="text-lg py-2 border-b mt-4 my-2 items-center grid grid-cols-4">
                  <h2 className={`font-semibold col-span-1`}>Tên khách sạn:</h2>
                  <div className="col-span-3">
                    {item.hotelName ? (
                      <h2>{item.hotelName}</h2>
                    ) : (
                      <h2 className="text-slate-500">
                        Vui lòng tên khách sạn của bạn
                      </h2>
                    )}
                  </div>
                </div>
                <div className="text-lg py-2 border-b my-2  items-center grid grid-cols-4">
                  <h2 className="col-span-1 font-semibold">Địa chỉ :</h2>
                  <div className="col-span-3">
                    {item.address ? (
                      <h2>{item.address}</h2>
                    ) : (
                      <h2 className=" text-slate-500">
                        Vui lòng nhập địa chỉ khách sạn của bạn
                      </h2>
                    )}
                  </div>
                </div>
                <div className="text-lg py-2 border-b my-2 items-center  grid grid-cols-4">
                  <h2 className={`font-semibold col-span-1`}>Mô tả:</h2>
                  <div className="col-span-3">
                    {item.description ? (
                      <h2>{item.description}</h2>
                    ) : (
                      <h2 className=" text-slate-500">
                        Mô tả ngắn về khách sạn của bạn
                      </h2>
                    )}
                  </div>
                </div>
                <div className="text-lg py-2 border-b my-2 items-center grid grid-cols-4">
                  <h2 className={`col-span-1 font-semibold`}>
                    Thời gian nhận phòng:
                  </h2>
                  <div className="col-span-3">
                    <input disabled type="time" value={hotelInfo.checkIn} />
                  </div>
                </div>
                <div className="text-lg py-2 border-b my-2 items-center grid grid-cols-4">
                  <h2 className={`col-span-1 font-semibold`}>
                    Thời gian trả phòng:
                  </h2>
                  <div className="col-span-3">
                    <input type="time" value={hotelInfo.checkOut} disabled />
                  </div>
                </div>

                <div className="text-lg py-2 border-b my-2 items-center  grid grid-cols-4">
                  <h2 className={`font-semibold col-span-1`}>Hình ảnh:</h2>
                  <div className="col-span-3 flex flex-wrap gap-3">
                    {item.hotelImages?.map((image, index) => (
                      <Fragment key={index}>
                        <img class="rounded-md h-20 w-20" src={image} alt="" />
                      </Fragment>
                    ))}
                  </div>
                </div>

                <div className="text-lg py-2 border-b my-2 items-center  grid grid-cols-4">
                  <h2 className={`font-semibold col-span-1`}>Tiện ích:</h2>
                  <div className="col-span-3 grid grid-cols-2">
                    {item.hotelAmenities ? (
                      item.hotelAmenities?.map((amenity) => (
                        <span>{amenity}</span>
                      ))
                    ) : (
                      <h2 className=" text-slate-500">
                        Cập nhật thêm tiện ích khách sạn bạn sẵn có để thu hút
                        khách đặt phòng
                      </h2>
                    )}
                  </div>
                </div>
                <div className="text-lg py-2 border-b my-2 items-center  grid grid-cols-4">
                  <h2 className={`font-semibold col-span-1`}>Dịch vụ thêm:</h2>
                  <div className="col-span-3">
                    {item.extraServices ? (
                      <h2>{item.extraServices.length} dịch vụ</h2>
                    ) : (
                      <h2 className=" text-slate-500">
                        Cập nhật thêm dịch vụ khách sạn bạn sẵn có để thu hút
                        khách đặt phòng
                      </h2>
                    )}
                  </div>
                </div>

                <div className="text-lg py-2 border-b my-2 items-center  grid grid-cols-4">
                  <h2 className={`font-semibold col-span-1`}>Trạng thái:</h2>
                  <div className="col-span-3">
                    <h2>{item.status}</h2>
                  </div>
                </div>
              </div>
              <button
                className="mt-3 border bg-sky-700 w-48 h-10 text-white text-base rounded-lg float-right mr-5"
                onClick={handleClickEdit}
              >
                Chỉnh sửa
              </button>
            </>
          ) : (
            <>
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className={`${styles["content"]} mt-4 border`}>
                  <div className="text-lg py-2 border-b mt-4 my-2 items-center grid grid-cols-4">
                    <h2 className={`col-span-1  font-semibold`}>
                      Tên khách sạn:
                    </h2>
                    <input
                      type="text"
                      placeholder="Vui lòng nhập tên khách sạn của bạn"
                      className={styles.input}
                      defaultValue={item.hotelName}
                      {...register("hotelName", { required: "" })}
                    />
                  </div>
                  <div className="text-lg py-2 border-b mt-4 my-2 items-center grid grid-cols-4">
                    <h2 className={`col-span-1  font-semibold`}>Địa chỉ:</h2>
                    <input
                      type="text"
                      placeholder="Vui lòng nhập địa chỉ khách sạn của bạn"
                      className={styles.input}
                      defaultValue={item.address}
                      {...register("address", { required: "" })}
                    />
                  </div>
                  <h3 className={`${styles["note"]} text-slate-600 text-base`}>
                    Ví dụ: Thành phố Đà Nẵng, Quận Liên Chiểu, Phường Hòa Khánh
                    Bắc, 54 Nguyễn Lương Bằng
                  </h3>
                  <div className="text-lg py-2 border-b my-2 items-center grid grid-cols-4">
                    <h2 className={`col-span-1 font-semibold`}>Mô tả:</h2>
                    <div>
                      <textarea
                        type="text"
                        placeholder="Mô tả ngắn về khách sạn của bạn"
                        className={styles.input}
                        defaultValue={item.description}
                        {...register("description")}
                      />
                    </div>
                  </div>

                  <div className="text-lg py-2 border-b my-2 items-center grid grid-cols-4">
                    <h2 className={`col-span-1 font-semibold`}>
                      Thời gian nhận phòng:
                    </h2>
                    <div className="col-span-3">
                      <input
                        type="time"
                        value={timeCheckinFrom}
                        onChange={(e) => {
                          setTimeCheckinFrom(e.target.value);
                        }}
                      />
                    </div>
                  </div>
                  <div className="text-lg py-2 border-b my-2 items-center grid grid-cols-4">
                    <h2 className={`col-span-1 font-semibold`}>
                      Thời gian trả phòng:
                    </h2>
                    <div className="col-span-3">
                      <input
                        type="time"
                        value={timeCheckoutFrom}
                        onChange={(e) => {
                          setTimeCheckoutFrom(e.target.value);
                        }}
                      />
                    </div>
                  </div>
                  <div className="text-lg py-2 border-b my-2 items-center grid grid-cols-4">
                    <h2 className={`col-span-1  font-semibold`}>Hình ảnh:</h2>
                    <div>
                      <input
                        type="file"
                        accept="image/*"
                        multiple
                        {...register("images")} 
                      />
                    </div>
                  </div>

                  <div className="text-lg py-2 border-b my-2 items-center grid grid-cols-4">
                    <h2 className={`col-span-1  font-semibold`}>Tiện ích:</h2>
                    <div className="col-span-3  flex flex-wrap gap-3">
                      {/* <FormGroup> */}
                      {services?.map((amenity) => {
                        return (
                          <FormControlLabel
                            key={amenity.id}
                            control={
                              <Checkbox
                                checked={hotelAmenities.find(
                                  (hotelAmenity) => hotelAmenity == amenity.name
                                )}
                              />
                            }
                            label={amenity.name}
                            name={amenity.name}
                            className="items-center"
                            onChange={(e) => {
                              handleCheckedAmenities(e);
                            }}
                          />
                        );
                      })}
                    </div>
                  </div>
                  <div className="text-lg py-2 border-b my-2 items-center grid grid-cols-4">
                    <h2 className={`col-span-1 font-semibold`}>Trạng thái:</h2>
                    <div>
                      <Switch
                        checked={status==="ACTIVE"}
                        onChange={() => {
                          handleChange();
                        }}
                        disabled={status==="PENDING"}
                      />
                    </div>
                  </div>
                  <h3 className={`${styles["note"]} text-slate-600 text-base`}>
                    Khi trạng thái này được bật, khách sạn của bạn sẽ được hiển
                    thị trên nền tảng của chúng tôi và sẵn sàng đón khách
                  </h3>
                </div>
                <button
                  type="submit"
                  className="mt-3 border bg-sky-700 w-48 h-10 text-white text-base rounded-lg float-right mr-5"
                >
                  Lưu thay đổi
                </button>
                <button
                  onClick={handleClickEdit}
                  className="mt-3 border bg-slate-500 w-32 h-10 text-white text-base rounded-lg float-right mr-5"
                >
                  Hủy
                </button>
              </form>
            </>
          )}
        </div>
      )}
    </>
  );
};

export default UpdateHotelInfoContainer;
