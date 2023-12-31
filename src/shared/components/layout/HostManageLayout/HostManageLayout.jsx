import React from "react";
import Header from "../../header-host/Header";
import styles from "./HostMangageLayout.module.scss"
import SidebarHost from "../../sidebar-host/SidebarHost";
const HostManageLayout = ({ children }) => {
  return (
    <div className="flex flex-col">
      <div className="w-full">
        <Header />
      </div>
      <div className={`${styles["content"]} w-full flex gap-14`}>
        <div className="md:w-1/5">
          <SidebarHost />
        </div>
        <div className="flex-1">{children}</div>
      </div>
    </div>
  );
};
export default HostManageLayout;
