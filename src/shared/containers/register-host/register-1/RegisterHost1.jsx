import React from "react";
import { useState } from "react";
import { useEffect } from "react";

import styles from "./RegisterHost1.module.scss";
import SelectComponent from "../../../components/select/Select";
import IcThumbsUp from "../../../components/icons/home-icons/IcThumbsUp";
import IcLightBulb from "../../../components/icons/home-icons/IcLightBulb";
import {
  apiGetDistricts,
  apiGetProvinces,
  apiGetWards,
} from "../../../../api/apiAddress";
import IcChevronLeft from "../../../components/icons/home-icons/IcChevronLeft";
import { Link } from "react-router-dom";

const RegisterHost1Container = () => {
  const [provinces, setProvinces] = useState([]);
  const [districts, setDistricts] = useState([]);
  const [wards, setWards] = useState([]);
  const [selectedProvince, setSelectedProvince] = useState();
  const [selectedDistrict, setSelectedDistrict] = useState();
  const [selectedWard, setSelectedWard] = useState();

  useEffect(() => {
    const fetchProvince = async () => {
      const response = await apiGetProvinces();
      if (response.status === 200) {
        setProvinces(response?.data.results);
      }
    };
    fetchProvince();
  }, []);

  useEffect(() => {
    setSelectedDistrict(null);
    const fetchDistrict = async () => {
      const response = await apiGetDistricts(selectedProvince);
      if (response.status === 200) {
        setDistricts(response?.data.results);
      }
    };

    provinces && fetchDistrict();
    !selectedProvince && setDistricts([]);
  }, [selectedProvince]);

  useEffect(() => {
    setSelectedWard(null);
    const fetchWard = async () => {
      const response = await apiGetWards(selectedDistrict);
      if (response.status === 200) {
        setWards(response?.data.results);
      }
    };

    districts && fetchWard();
    !selectedDistrict && setWards([]);
  }, [selectedDistrict]);

  return (
    <div className={` ${styles["register-1"]}`}>
      <div className={`${styles["content"]}`}>
        <div className="title">
          <h2 className="text-3xl overflow-hidden">
            Đăng chỗ nghỉ của Quý vị trên InnSight và bắt đầu đón tiếp khách
            thật nhanh chóng!
          </h2>
          <p className="text-xl py-4">
            Chỗ nghỉ Quý vị muốn đăng ký nằm ở đâu?
          </p>
        </div>
        <div className="flex justify-between">
          <div className={` flex-1 ${styles["form"]}`}>
            <div className={`px-5 shadow-md pb-5 ${styles['info-address']}`}>
              <h3 className="py-3 text-lg ">Địa chỉ cụ thể</h3>
              <div className="flex justify-between">
                <div className={` flex flex-col   ${styles['info-box']} `}>
                  <h3 className="py-2 ">Tỉnh/TP</h3>
                  <SelectComponent
                    type="province"
                    value={selectedProvince}
                    setValue={setSelectedProvince}
                    options={provinces}
                  />

                  {/* <SelectComponent options={cityOptions}/> */}
                  {/* {<Select styles={{}} options={cityOptions} />} */}
                </div>

                <div className={` flex flex-col   $styles['info-box']`}>
                  <h3 className="py-2">Quận/Huyện</h3>

                  <SelectComponent
                    type="district"
                    value={selectedDistrict}
                    setValue={setSelectedDistrict}
                    options={districts}
                  />
                </div>
              </div>

              <div className={` flex flex-col   $styles['info-box']`}>
                <h3 className="py-2 ">Phường/Xã</h3>

                <SelectComponent
                  type="ward"
                  value={selectedWard}
                  setValue={setSelectedWard}
                  options={wards}
                />
                {/* {<Select styles={{}} options={cityOptions} />} */}
              </div>

              <div className={` flex flex-col   $styles['info-box']`}>
                <h3 className="py-3 ">Số nhà/Đường</h3>
                <input
                  type="text"
                  placeholder="Nhập số nhà, đường"
                  className="px-3 py-2 border-2"
                ></input>
              </div>
            </div>

            <div className={`flex pt-7`}>
              <Link to="/host">

                <button
                  className={`border-2 px-6 py-3 mr-2 flex-none rounded-md`}
                  >
                  <IcChevronLeft />
                </button>
              </Link>
              <Link  to="/host/register-2"
                  className={`border-2  font-bold text-2xl flex-grow rounded-md text-center  ${styles["btn-continue"]}`}
                  >
                <button className="h-full"
                >
                  Tiếp tục
                </button>
              </Link>
            </div>
          </div>
          <div
            className={`flex-1  justify-between ml-3 hidden xl:flex ${styles["hint"]}`}
          >
            <div className={`mx-4 p-5 flex-1 ${styles["hint-box"]}`}>
              <div className="flex h-16 align-top ">
                <IcThumbsUp />
                <h3 className="font-bold pl-2">
                  Thông tin gì cần được bao gồm trong địa chỉ của tôi?
                </h3>
              </div>
              <ul className="py-2 px-4">
                <li>
                  Vui lòng nhập tên đường và số nhà chung nơi tất cả các căn chỗ
                  nghỉ tọa lạc
                </li>
                <li>Số tầng ở địa chỉ dòng 2 (nếu có)</li>
                <li>
                  Số căn hộ hoặc tầng riêng lẻ có thể được cung cấp sau cho
                  khách
                </li>
                <li>Cung cấp mã bưu điện</li>
                <li>Hãy viết tên đường chính xác</li>
                <li>
                  Dùng địa chỉ thực sự của chỗ nghỉ, không dùng địa chỉ văn
                  phòng hay nhà của Quý vị
                </li>
              </ul>
            </div>

            <div className={`mx-4 p-5 flex-1 ${styles["hint-box"]}`}>
              <div className="flex h-16 align-top">
                <IcLightBulb />
                <h3 className="font-bold pl-2">
                  Tại sao tôi cần thêm địa chỉ của mình?
                </h3>
              </div>
              <ul className="py-2 px-4">
                <li>
                  Khi khách đặt chỗ nghỉ của Quý vị, đây là địa chỉ sẽ được chia
                  sẻ với họ. Điều quan trọng là địa chỉ này phải chính xác để
                  khách có thể dễ dàng tìm thấy chỗ nghỉ của Quý vị.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterHost1Container;
