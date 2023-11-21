import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import IcDetail from '../../components/icons/qltaikhoan-icons/IcDetail.jsx'
import IcDelete from '../../components/icons/qltaikhoan-icons/IcDelete.jsx'
import SelectMenu from '../../components/admin-qltaikhoan/SelectMenu.tsx'
import styles from './QLTaiKhoanContainer.module.scss'
import { QuestionCircleOutlined } from '@ant-design/icons';
import { Pagination, Button, Popconfirm } from 'antd';

const data = [
  { id: '1', name: 'Nguyễn Thị Thu Thuyên', role: 'Khách hàng'},
  { id: '2', name: 'Nguyễn Thị Thu Thuyên', role: 'Chủ khách sạn'},
  { id: '3', name: 'Nguyễn Thị Thu Thuyên', role: 'Chủ khách sạn'},
  { id: '4', name: 'Nguyễn Thị Thu Thuyên', role: 'Khách hàng'},
  { id: '5', name: 'Nguyễn Thị Thu Thuyên', role: 'Chủ khách sạn'},
  { id: '6', name: 'Nguyễn Thị Thu Thuyên', role: 'Khách hàng'},
  { id: '7', name: 'Nguyễn Thị Thu Thuyên', role: 'Chủ khách sạn'},
  { id: '8', name: 'Nguyễn Thị Thu Thuyên', role: 'Khách hàng'}
];

function handleDelete() {
  // Xử lý xóa
}
const QLTaiKhoanContainer = () => {
  const [selectedValue, setSelectedValue] = useState("Tất cả");

  const handleSelectChange = (value) => {
    setSelectedValue(value);
  };

  const filteredData = selectedValue === "Tất cả" ? data : data.filter((item) => item.role === selectedValue);
  const totalCount = filteredData.length

  return (
    <div>
      <div className={`flex m-2 ${styles['text']}`}>
        <div className="mr-4 pt-1">Loại người dùng</div>
        <SelectMenu onSelectChange={handleSelectChange} className="mr-4" />
        <div className="flex-grow text-right pt-1 font-bold">Tổng: {totalCount}</div>
      </div>
      <div className="flex flex-col">
        <div className="grid grid-cols-4 rounded-sm bg-cyan-900  ">
          <div className="p-2.5 xl:p-5" >
            <h5 className="text-white text-sm font-medium uppercase xsm:text-base">
              Mã khách hàng
            </h5>
          </div>
          <div className="p-2.5  xl:p-5">
            <h5 className="text-white text-sm font-medium uppercase xsm:text-base">
              Tên người dùng
            </h5>
          </div>
          <div className="p-2.5 xl:p-5">
            <h5 className="text-white text-sm font-medium uppercase xsm:text-base">
              Vai trò
            </h5>
          </div>
          <div className="hidden items-center p-2.5 sm:block xl:p-5">
            <h5 className="text-white text-sm  font-medium uppercase xsm:text-base">
              Hành động
            </h5>
          </div>
        </div>
        {filteredData.map((item) => (
          <div className="grid grid-cols-4 border-b border-stroke dark:border-strokedark">
            <React.Fragment key={item}>
              <div className="flex items-center gap-3 p-2.5 xl:p-5 col-span-1">
                <div className="flex-shrink-0">
                </div>
                <p className="hidden text-black sm:block">{item.id}</p>
              </div>

              <div className="flex  p-2.5 xl:p-5 col-span-1">
                <p className="text-black">{item.name}</p>
              </div>

              <div className="flex  p-2.5 xl:p-5 col-span-1">
                <p className="text-meta-3">{item.role}</p>
              </div>

              <div className="hidden p-2.5 sm:flex xl:p-5 col-span-1">
                <NavLink to={`/qltaikhoan/detail?id=${item.id}&role=${item.role}`}>
                  <Button className='flex gap-2 '>
                    <IcDetail/>
                    Xem chi tiết
                  </Button>
                </NavLink>

                <Popconfirm
                  title="Xóa người dùng"
                  description={`Bạn chắc chắn muốn xóa ${item.role} này?`}
                  icon={<QuestionCircleOutlined style={{ color: 'red' }} />}
                  onConfirm={handleDelete}
                  okText="OK"
                >
                  <Button className="flex ml-5 gap-2 ">
                    <IcDelete/>
                    Xóa
                  </Button>
                </Popconfirm>

              </div>
            </React.Fragment>
          </div>
        ))}
      </div>
      <Pagination defaultCurrent={1} total={50} className="mt-3 " />;
    </div>
  );
};

export default QLTaiKhoanContainer;