import React, { useEffect } from 'react'
import IcSearch from '../icons/admin-header-icons/IcSearch'
import DropdownUser from './DropdownUser.tsx';
import {Input} from 'antd';
import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import AdminAction from '../../../redux/admin/action.js';
import ShowToastify from '../../../utils/ShowToastify.js';

const Header = () => {
  const [searchValue, setSearchValue] = useState('');
  const location = useLocation();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    setSearchValue('');
  }, [location.pathname]);

  const onSearchChange = (event) => {
    setSearchValue(event.target.value);
  };

  const onSearch = () => {
    if (location.pathname === '/qltaikhoan') {
      const queryParams = new URLSearchParams({ email: searchValue }).toString();
      navigate(`/qltaikhoan?${queryParams}`);
    }
    else if (location.pathname === '/qldichvu') {
      const queryParams = new URLSearchParams({ name: searchValue }).toString();
      navigate(`/qldichvu?${queryParams}`);
    }
    else if (location.pathname === '/qldanhmuc/loai_giuong') {
      const queryParams = new URLSearchParams({ name: searchValue }).toString();
      navigate(`/qldanhmuc/loai_giuong?${queryParams}`);
    }
    else if (location.pathname === '/qldanhmuc/tam_nhin') {
      const queryParams = new URLSearchParams({ name: searchValue }).toString();
      navigate(`/qldanhmuc/tam_nhin?${queryParams}`);
    }
  };

  return (
    <header className="sticky top-0 flex w-full border bg-slate-300 drop-shadow-1 dark:bg-slate-300 dark:drop-shadow-none z-50">
      <div className="flex flex-grow items-center justify-between py-4 px-4 shadow-2 md:px-6 2xl:px-11">
        <div className=" sm:block">
            <div className="relative">
              <Input 
                placeholder="Nhập để tìm kiếm" 
                onChange={onSearchChange}
                value={searchValue}
                style={{ width: '700px', height: '40px' }}
                className='pl-10'
              />
              <button className="absolute top-1/2 left-0 -translate-y-1/2 pl-2" onClick={onSearch}>
                <IcSearch />
              </button>
            </div>
        </div>
        <div className="flex items-center gap-3 2xsm:gap-7">
          <DropdownUser />
        </div>
      </div>
    </header>
  )
}

export default Header
