import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styles from "./Header.module.scss";
import IcAvatar from "../icons/header-icons/IcAvatar";
import IcPencil from "../icons/header-icons/IcPencil";
const Header = () => {
  const isLogin = localStorage.getItem("isLogin") || false;

  useEffect(() => {}, [isLogin]);
  return (
    <header className={`hidden md:flex justify-between ${styles["header"]}`}>
      <div className="flex items-baseline gap-8">
        <Link to={"/"} className={` font-bold  ${styles["logo-text"]}`}>
          InnSight
        </Link>

      </div>

      <div className="flex items-center md:px-4 lg:px-6 xl:px-8 ">
        {isLogin ? (
          <>
            <div className="pr-44 mr-2">
              <Link to={"/mysettings/info"}>
                <button
                  className={`sm:py-2 sm:px-4 drop-shadow-md inline-flex items-center justify-between ${styles["button-account"]}`}
                >
                  <IcAvatar />
                  <span>Tài khoản của bạn</span>
                </button>
              </Link>
            </div>
          </>
        ) : (
          <>
            <nav className="contents text-base lg:text-lg mr-auto ">
              <div className={`flex items-center justify-center`}>
                <Link className={`${styles["nav-item"]}`} to={"/sign-in"}>
                  <span>Bạn đã là đối tác?</span>
                </Link>
              </div>

              <div
                className={`flex items-center px-4 lg:px-6 xl:px-8 ${styles["group-button"]}`}
              >
                <Link
                  to={"/sign-in"}
                  className={`py-2 px-4 drop-shadow-md inline-flex items-center justify-between ${styles["header-button"]}`}
                >
                  <IcAvatar />
                  <span>Đăng nhập</span>
                </Link>
                <Link
                  to={"/sign-up"}
                  className={`sm:py-2 sm:px-4 drop-shadow-md inline-flex items-center justify-between ${styles["header-button"]}`}
                >
                  <IcPencil />
                  <span>Đăng ký</span>
                </Link>
              </div>
            </nav>
          </>
        )}
      </div>
    </header>
  );
};

export default Header;
