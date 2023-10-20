import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import styles from "./RegisterHost2.module.scss";
import IcChevronLeft from "../../../components/icons/home-icons/IcChevronLeft";
import { Link } from "react-router-dom";
import Constants from "../../../../utils/Contants";

const RegisterHost2Container = () => {
  const [star, setStar] = useState();
  const rates = Constants.rates;
  const onStarChange = (e) => {
    setStar(e.target.value);
    console.log(e.target.value)
  };

  return (
    <div className={`h-max sm:h-screen ${styles["register-1"]}`}>
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
        <div className="block lg:flex justify-between">
          <div className={`flex-1 ${styles["form"]}`}>
            <div className={`px-5 flex flex-col pb-5 $styles['info-hotel']`}>
              <h3 className="py-3 text-lg ">
                Khách sạn của Quý vị tên gì?
                <span className="text-red-600"> *</span>
              </h3>

              <input
                className={`border-2 py-2 px-5 text-xl`}
                placeholder="Tên chỗ nghỉ"
              ></input>
              <span className="pt-2 px-6 opacity-70 hidden lg:block">
                Tên này sẽ được hiển thị tới khách khi họ tìm kiếm chỗ nghỉ
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
              <Link  to="/host/register-3"
                  className={`border-2  font-bold text-2xl flex-grow rounded-md text-center  ${styles["btn-continue"]}`}
                  >
                <button className="h-full"
                >
                  Tiếp tục
                </button>
              </Link>
            </div>
          </div>
          <div className="xl:flex-1"></div>
        </div>
      </div>
    </div>
  );
};

export default RegisterHost2Container;
