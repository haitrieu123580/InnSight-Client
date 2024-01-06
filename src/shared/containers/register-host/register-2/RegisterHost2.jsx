import React from "react";
import { useState } from "react";
import styles from "./RegisterHost2.module.scss";
import IcChevronLeft from "../../../components/icons/home-icons/IcChevronLeft";
import { Link } from "react-router-dom";
import Constants from "../../../../utils/Contants";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import { addNameAndRateHotel } from "../../../../redux/host/slice";

const RegisterHost2Container = () => {
  const navigate = useNavigate();
  const dispath = useDispatch();

  const [star, setStar] = useState(1);
  const rates = Constants.rates;
  const onStarChange = (e) => {
    setStar(e.target.value);
  };
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    criteriaMode: "all",
  });
  const onSubmit = (data) => {
    data.rate = star;
    dispath({
      type: addNameAndRateHotel,
      payload: data,
    });
    navigate("/host/register-3");
  };

  return (
    <div className={` ${styles["register-2"]}`}>
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
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="block lg:flex justify-between">
            <div className={`flex-1 ${styles["form"]}`}>
              <div className={`px-5 flex flex-col pb-5 $styles['info-hotel']`}>
                <h3 className="py-3 text-lg ">
                  Khách sạn của Quý vị tên gì?
                  <span className="text-red-600"> *</span>
                </h3>
                {errors.name && (
                  <span className="text-red-600">{errors.name.message}</span>
                )}
                <input
                  className={`border-2 py-2 px-5 text-xl`}
                  placeholder="Tên chỗ nghỉ"
                  id="name"
                  {...register("name", {
                    required: "Tên chỗ nghỉ là bắt buộc",
                  })}
                ></input>
                <span className="pt-2 px-6 opacity-70 hidden lg:block">
                  Tên này sẽ được hiển thị tới khách khi họ tìm kiếm chỗ nghỉ
                </span>
              </div>

              <div className={`px-5 flex flex-col pb-5 $styles['info-hotel']`}>
                <h3 className="py-3 text-lg ">
                  Thêm mô tả cho khách sạn của bạn?
                  <span className="text-red-600"> *</span>
                </h3>
                {errors.description && (
                  <span className="text-red-600">
                    {errors.description.message}
                  </span>
                )}
                <textarea
                  className={`border-2 py-2 px-5 text-xl`}
                  placeholder="Mô tả"
                  id="description"
                  {...register("description", {
                    required: "Mô tả khách sạn là bắt buộc",
                  })}
                ></textarea>
                <span className="pt-2 px-6 opacity-70 hidden lg:block">
                  Mô tả một số ưu điểm, và dịch vụ của khách sạn để thu hút
                  khách đặt phòng
                </span>
              </div>

              <div className={`px-5 flex flex-col  pb-5 $styles['info-hotel']`}>
                <h3 className="py-2 text-lg ">
                  Khách sạn của Quý vị được xếp hạng mấy sao?{" "}
                </h3>
                {rates?.map((rate) => {
                  return (
                    <div className="flex">
                      <input
                        type="radio"
                        name="star"
                        value={rate.value}
                        id={rate.id}
                        checked={star == rate.value}
                        onChange={onStarChange}
                      />
                      <label className="text-lg px-3" htmlFor={rate.id}>
                        {rate.name}
                      </label>
                      {rate.icon}
                    </div>
                  );
                })}
              </div>

              <div className={`flex pt-7`}>
                <Link to="/host/register-1">
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
            </div>
            <div className="xl:flex-1"></div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegisterHost2Container;
