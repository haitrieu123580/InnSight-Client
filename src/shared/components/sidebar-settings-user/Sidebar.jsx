import React, { useEffect, useRef, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import BadgeIcon from '@mui/icons-material/Badge';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import SecurityIcon from '@mui/icons-material/Security';
import LogoutIcon from '@mui/icons-material/Logout';
import { useDispatch } from 'react-redux';
import ShowToastify from '../../../utils/ShowToastify';
import AuthAction from '../../../redux/auth/action';

const Sidebar = ({ sidebarOpen, setSidebarOpen }) => {
  const dispatch = useDispatch();
  const location = useLocation();
  const { pathname } = location;

  const trigger = useRef(null);
  const sidebar = useRef(null);

  const storedSidebarExpanded = localStorage.getItem('sidebar-expanded');
  const [sidebarExpanded, setSidebarExpanded] = useState(
    storedSidebarExpanded === 'true'
  );

  useEffect(() => {
    const clickHandler = ({ target }) => {
      if (!sidebar.current || !trigger.current) return;
      if (!sidebarOpen || sidebar.current.contains(target) || trigger.current.contains(target))
        return;
      setSidebarOpen(false);
    };
    document.addEventListener('click', clickHandler);
    return () => document.removeEventListener('click', clickHandler);
  }, [sidebarOpen]);

  useEffect(() => {
    const keyHandler = ({ keyCode }) => {
      if (!sidebarOpen || keyCode !== 27) return;
      setSidebarOpen(false);
    };
    document.addEventListener('keydown', keyHandler);
    return () => document.removeEventListener('keydown', keyHandler);
  }, [sidebarOpen]);

  useEffect(() => {
    localStorage.setItem('sidebar-expanded', sidebarExpanded.toString());
    document.querySelector('body')?.classList.toggle('sidebar-expanded', sidebarExpanded);
  }, [sidebarExpanded]);

  const handleLogOut = ()=>{
    // dispatch({
      //   type: AuthAction.LOG_OUT,
      //     onSuccess: () => {
      //       localStorage.clear();
      //       window.location.href = ('/');
      //     },
      //     onError: () => {
      //         ShowToastify.showErrorToast("Xảy ra lỗi, xin thử lại sau")
      //     }
      // });
      localStorage.clear();
      window.location.href = ('/');
  }

  return (
    <aside
      ref={sidebar}
      className={`absolute left-0 z-9999 flex flex-col border bg-gray-50 duration-300 ease-linear lg:static lg:translate-x-0 ${
        sidebarOpen ? 'translate-x-0' : '-translate-x-full'
      }`}
    >
      <div className="no-scrollbar flex flex-col overflow-y-auto duration-300 ease-linear px-4 lg:mt-9 lg:px-6 text-lg">
        <ul className="mb-6 flex flex-col gap-1.5">
          <NavLink
            to="/mysettings/info"
            className={`group relative flex items-center gap-2.5 rounded-sm py-2 px-4 font-medium duration-300 ease-in-out dark:hover:bg-meta-4 ${
              pathname.includes('info') && 'bg-slate-300'
            }`}
          >
            <BadgeIcon />
            Quản lý tài khoản
          </NavLink>
        </ul>
        <ul className="flex flex-col gap-1.5">
          <NavLink
            to="/mysettings/history"
            className={`group relative flex items-center gap-2.5 rounded-sm py-2 px-4 font-medium duration-300 ease-in-out dark:hover:bg-meta-4 ${
              pathname.includes('history') && 'bg-slate-300'
            }`}
          >
            <FormatListBulletedIcon />
            Lịch sử đặt phòng
          </NavLink>
        </ul>
        <ul className="mb-6 flex flex-col gap-1.5">
          <NavLink
            to="/mysettings/password"
            className={`mt-7 group relative flex items-center gap-2.5 rounded-sm py-2 px-4 font-medium duration-300 ease-in-out hover:bg-graydark dark:hover-bg-meta-4 ${
              pathname.includes('password') && 'bg-slate-300'
            }`}
          >
            <SecurityIcon />
            Tài khoản và mật khẩu
          </NavLink>
        </ul>
        <ul className="mb-7 flex flex-col gap-1.5">
          <button
            onClick={handleLogOut}
            className={`text-red-600 group relative flex items-center gap-2.5 rounded-sm py-2 px-4 font-medium duration-300 ease-in-out hover:bg-graydark dark:hover-bg-meta-4`}
          >
            <LogoutIcon />
            Đăng xuất
          </button>
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;
