import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import HostAction from "../../../../redux/host/action";
import { Controller, useForm } from "react-hook-form";
import ShowToastify from "../../../../utils/ShowToastify";
import styles from "./UpdateHotelInfo.module.scss";
import { Switch } from "@mui/material";
const UpdateHotelInfoContainer = () => {
  const hotelId = JSON.parse(localStorage.getItem("hotelId"));
  const userId = JSON.parse(localStorage.getItem("id"));
  const dispatch = useDispatch();
  const hotelInfo = useSelector((state) => state.Host.hotelInfo) || {};
  const { register, setValue, handleSubmit, control } = useForm({
    criteriaMode: "all",
  });
  const [isEditing, setIsEditing] = useState(false);
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
  }, [dispatch, hotelId]);
  const item = hotelInfo;
  console.log("A", item);
  const handleClickEdit = () => {
    setIsEditing(!isEditing);
  };
  const [status, setStatus] = useState(item.status||null);

  const handleChange = () => {
    setStatus((prevValue) => (prevValue === "ACTIVE" ? null : "ACTIVE"));
  };
  const onSubmit = (data) => {
    console.log(data)
    // dispatch({
    //   type: HostAction.UPDATE_HOTEL,
    //   userId: userId,
    //   hotelId: hotelId,
    //   data: data,
    //   onSuccess: () => {
    //     ShowToastify.showSuccessToast("Thành công");
    //   },
    //   onError: () => {},
    // });
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
                <div className="text-lg mt-4 my-2 items-center grid grid-cols-4">
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
                <div className=" text-lg my-2  items-center grid grid-cols-4">
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
                <div className=" text-lg my-2 items-center  grid grid-cols-4">
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
                <div className=" text-lg my-2 items-center  grid grid-cols-4">
                  <h2 className={`font-semibold col-span-1`}>Hình ảnh:</h2>
                  <div className="col-span-3">
                    {item.hotelImages? (
                      <h2>{item.hotelImages.length} ảnh</h2>
                    ) : (
                      <h2 className=" text-slate-500">
                        Cập nhật thêm ảnh để thu hút khách đặt phòng
                      </h2>
                    )}
                  </div>
                </div>
                <div className=" text-lg my-2 items-center  grid grid-cols-4">
                  <h2 className={`font-semibold col-span-1`}>Tiện ích:</h2>
                  <div className="col-span-3">
                    {item.hotelAmenities? (
                      <h2>{item.hotelAmenities.length} tiện ích</h2>
                    ) : (
                      <h2 className=" text-slate-500">
                        Cập nhật thêm tiện ích khách sạn bạn sẵn có để thu hút khách đặt phòng
                      </h2>
                    )}
                  </div>
                </div>
                <div className=" text-lg my-2 items-center  grid grid-cols-4">
                  <h2 className={`font-semibold col-span-1`}>Dịch vụ thêm:</h2>
                  <div className="col-span-3">
                    {item.extraServices? (
                      <h2>{item.extraServices.length} dịch vụ</h2>
                    ) : (
                      <h2 className=" text-slate-500">
                        Cập nhật thêm dịch vụ khách sạn bạn sẵn có để thu hút khách đặt phòng
                      </h2>
                    )}
                  </div>
                </div>
                <div className=" text-lg my-2 items-center  grid grid-cols-4">
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
                  <div className="text-lg mt-4 my-2 items-center grid grid-cols-4">
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
                  <div className="text-lg mt-4 my-2 items-center grid grid-cols-4">
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
                  <div className="text-lg my-2 items-center grid grid-cols-4">
                    <h2 className={`col-span-1 font-semibold`}>
                      Mô tả:
                    </h2>
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
                  <div className="text-lg my-2 items-center grid grid-cols-4">
                    <h2 className={`col-span-1  font-semibold`}>
                      Hình ảnh:
                    </h2>
                    <div>
                      <input
                        type="file"
                        {...register("images")}
                      />
                    </div>
                  </div>

                  <div className="text-lg my-2 items-center grid grid-cols-4">
                    <h2 className={`col-span-1 font-semibold`}>Trạng thái:</h2>
                    <div>
                      <Switch
                        value={status}
                        onChange={handleChange}
                        inputProps={{ "aria-label": "Switch" }}
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
