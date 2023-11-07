import React, { useState } from "react";
import styles from "./RegisterListSectionContainer.module.scss";
import IcCheck from "../../../components/icons/home-icons/IcCheck";
import IcBed from "../../../components/icons/home-icons/IcBed";
import { useParams } from "react-router-dom";

import { Link } from "react-router-dom";
import { Button } from "@mui/material";

import { styled } from "@mui/material/styles";
const RegisterListSectionContainer = () => {
  const { sectionStatus } = useParams();
  console.log(sectionStatus);
  const CustomButton = styled(Button)({
    height: "25px",
  });
  return (
    <div className={` ${styles["register-list-section"]}`}>
      <div className={`${styles["content"]}`}>
        <div
          className={`flex items-center border-2 px-5 py-3 rounded-md justify-between ${styles["box-section"]}`}
        >
          <div className="flex items-center">
            <div className=" p-2 mx-3 border-2 rounded-full ">
              <IcCheck className="h-10" />
            </div>
            <div className="pl-5 pr-10">
              <h2 className="pt-2 pb-1">Bước 1</h2>
              <h2 className="font-bold text-xl">Thông tin chỗ nghỉ</h2>
              <p className="py-2">
                Các thông tin cơ bản. Nhập tên chỗ nghỉ, địa chỉ, tiện nghi và
                nhiều hơn nữa
              </p>
            </div>
          </div>
          <div>
            {sectionStatus > 1 ? (
              <Link to="/host/register-1" className="text-sky-600">
                Chỉnh sửa
              </Link>
            ) : (
              <CustomButton variant="contained" className="bg-sky-600">
                <Link to="/host/add-room" className=" px-2">
                  Thêm
                </Link>
              </CustomButton>
            )}
          </div>
        </div>

        <div
          className={`flex items-center border-2 px-5 py-3 rounded-md justify-between ${styles["box-section"]}`}
        >
          <div className="flex items-center">
            <div className=" p-2 mx-3  ">
              <IcBed className="h-10" />
            </div>
            <div className="pl-5 pr-10">
              <h2 className="pb-1 pt-2">Bước 2</h2>
              <h2 className="font-bold text-xl">Phòng</h2>
              <p className="pt-2">
                Hãy cho chúng tôi biết về phòng đầu tiên của Quý vị. Sau khi đã
                thiết lập xong 1 căn.
              </p>
              <p className="pb-2">Quý vị có thể thêm nhiều căn nữa</p>
            </div>
          </div>
          <div>
            {sectionStatus > 2 ? (
              <Link to="/host/add-room" className="text-sky-600">
                Chỉnh sửa
              </Link>
            ) : (
              <CustomButton variant="contained" className="bg-sky-600">
                <Link to="/host/add-room" className=" px-2">
                  Thêm
                </Link>
              </CustomButton>
            )}
          </div>
        </div>

        <div
          className={`flex items-center border-2 px-5 py-3 rounded-md justify-between ${styles["box-section"]}`}
        >
          <div className="flex items-center">
            <div className=" p-2 mx-3 border-2 rounded-full ">
              <IcBed className="h-10" />
            </div>
            <div className="pl-5 pr-10">
              <h2 className="pb-1 pt-2">Bước 3</h2>
              <h2 className="font-bold text-xl">Những bước cuối cùng</h2>
              <p className="py-2">
                Nhập thông tin thanh toán và hóa đơn trước khi mở để nhận đặt
                phòng
              </p>
            </div>
          </div>
          <div>
            <CustomButton
              variant={sectionStatus < 3 ? "disabled" : "contained"}
              className={sectionStatus < 3 ?"bg-stone-200":"bg-sky-600"}
            >
              <Link to="/host/register-finished" className="px-2">
                Hoàn tất đăng ký
              </Link>
            </CustomButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterListSectionContainer;
