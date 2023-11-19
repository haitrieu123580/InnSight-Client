import React from 'react';
import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import image from '../../../assets/images/user.png';
import IcChangepw from '../icons/admin-header-icons/IcChangepw';
import IcContact from '../icons/admin-header-icons/IcContact';
import IcSetting from '../icons/admin-header-icons/IcSetting';
import IcLogout from '../icons/admin-header-icons/IcLogout';
const DropdownUser = () => {
    const [dropdownOpen, setDropdownOpen] = useState(false);
  
    const trigger = useRef<any>(null);
    const dropdown = useRef<any>(null);
  
    useEffect(() => {
      const clickHandler = ({ target }: MouseEvent) => {
        if (!dropdown.current) return;
        if (
          !dropdownOpen ||
          dropdown.current.contains(target) ||
          trigger.current.contains(target)
        )
          return;
        setDropdownOpen(false);
      };
      document.addEventListener('click', clickHandler);
      return () => document.removeEventListener('click', clickHandler);
    });
  
    useEffect(() => {
      const keyHandler = ({ keyCode }: KeyboardEvent) => {
        if (!dropdownOpen || keyCode !== 27) return;
        setDropdownOpen(false);
      };
      document.addEventListener('keydown', keyHandler);
      return () => document.removeEventListener('keydown', keyHandler);
    });
  
    return (
      <div className="relative">
        <Link
          ref={trigger}
          onClick={() => setDropdownOpen(!dropdownOpen)}
          className="flex items-center gap-6"
          to="#"
        >
          <span className=" text-right lg:block">
            <span className="block text-sm font-medium text-black">
              Nguyễn Thị Thu Thuyên
            </span>
            <span className="block text-xs">ADMIN</span>
          </span>
          <span className="h-12 w-12 rounded-full">
            <img src={image} alt="User" style={{borderRadius: "50%", width: "50px", height: "50px", }}/>
          </span>
        </Link>
  
        <div
          ref={dropdown}
          onFocus={() => setDropdownOpen(true)}
          onBlur={() => setDropdownOpen(false)}
          className={`absolute right-0 mt-4 flex w-62.5 flex-col rounded-sm border border-stroke bg-slate-300 shadow-default ${
            dropdownOpen === true ? 'block' : 'hidden'
          }`}
        >
          <ul className="flex flex-col gap-4 border-stroke px-6 py-7.5 ">
            <li>
              <Link
                to="/addAdmin"
                className="flex items-center gap-3.5 text-sm font-medium duration-300 ease-in-out hover:text-primary lg:text-base"
              >
                <IcContact/>
                Thêm người dùng
              </Link>
            </li>
            <li>
              <Link
                to="/admin_changepw"
                className="flex items-center gap-3.5 text-sm font-medium duration-300 ease-in-out hover:text-primary lg:text-base"
              >
                <IcChangepw/>
              Đổi mật khẩu
              </Link>
            </li>
            <li>
              <Link
                to="/admin_setting"
                className="flex items-center gap-3.5 text-sm font-medium duration-300 ease-in-out hover:text-primary lg:text-base"
              >
                <IcSetting/>
              Cài đặt tài khoản
              </Link>
            </li>
          </ul>
          <button className="flex items-center gap-3.5 py-4 px-6 text-sm font-medium duration-300 ease-in-out hover:text-primary lg:text-base">
            <IcLogout/>
          Đăng xuất
          </button>
        </div>
      </div>
    );
  };
  
  export default DropdownUser;