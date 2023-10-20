import React from "react";
import { Link } from "react-router-dom";
import styles from "./Header.module.scss";

import IcAvatar from "../icons/header-icons/IcAvatar";
import IcPencil from "../icons/header-icons/IcPencil";
const Header = () => {
  const currentUser = true;
  return (
    <header className={`hidden md:flex ${styles["header"]}`}>
      <Link
        to={"/"}
        className={` flex items-center font-bold  ${styles["logo-text"]}`}
      >
        InnSight
      </Link>

      {currentUser ? (
        <>
          <div className="pr-44 mr-2">
          <button
            class={`sm:py-2 sm:px-4 drop-shadow-md inline-flex items-center justify-between ${styles["button-account"]}`}
          >
            <IcAvatar />
            <span>Tài khoản của bạn</span>
          </button>
          </div>
        </>
      ) : (
        <>
          <nav className="contents text-base lg:text-lg mr-auto ">
            <div className={`flex items-center justify-center`}>
              <Link className={`${styles["nav-item"]}`} to={"/home"}>
                <span>Bạn đã là đối tác?</span>
              </Link>
            </div>

            <div
              className={`flex items-center px-4 lg:px-6 xl:px-8 ${styles["group-button"]}`}
            >
              <button
                class={`py-2 px-4 drop-shadow-md inline-flex items-center justify-between ${styles["header-button"]}`}
              >
                <IcAvatar />
                <span>Đăng nhập</span>
              </button>
              <button
                class={`sm:py-2 sm:px-4 drop-shadow-md inline-flex items-center justify-between ${styles["header-button"]}`}
              >
                <IcPencil />
                <span>Đăng ký</span>
              </button>
            </div>
          </nav>
        </>
      )}
    </header>
  );
};

export default Header;
