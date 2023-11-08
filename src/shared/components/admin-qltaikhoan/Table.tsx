import React, { useState } from 'react';
import SelectMenu from '../../components/admin-qltaikhoan/SelectMenu.tsx';
import { NavLink } from 'react-router-dom';
import IcDetail from '../../components/icons/qltaikhoan-icons/IcDetail.jsx'
import IcDelete from '../../components/icons/qltaikhoan-icons/IcDelete.jsx'

const Table = ({ data }) => {
  const [selectedValue, setSelectedValue] = useState('');

  const handleSelect = (value) => {
    setSelectedValue(value);
  };

  const filteredData = data.filter((item) => item.category === selectedValue);

  return (
      
    <div className="rounded-sm border border-stroke bg-white px-5 pt-6 pb-2.5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
      <div className="flex border-b">
        <h4 className="mb-6 text-sm font-semibold text-black top-1">
          Loại người dùng
        </h4>
        <div className="ml-7">
        <SelectMenu
            options={[
            { value: 'all ', label: 'Tất cả' },
            { value: 'host', label: 'Chủ khách sạn' },
            { value: 'user', label: 'Khách hàng' },
            ]}
            onSelect={handleSelect}
        />
        </div>
      </div>
      <div className="flex flex-col">
        <div className="grid grid-cols-4 rounded-sm bg-slate-400 dark:bg-slate-400 ">
          <div className="p-2.5 xl:p-5">
            <h5 className="text-sm font-medium uppercase xsm:text-base">
              Mã khách hàng
            </h5>
          </div>
          <div className="p-2.5  xl:p-5">
            <h5 className="text-sm font-medium uppercase xsm:text-base">
              Tên người dùng
            </h5>
          </div>
          <div className="p-2.5 xl:p-5">
            <h5 className="text-sm font-medium uppercase xsm:text-base">
              Vai trò
            </h5>
          </div>
          <div className="hidden items-center p-2.5 sm:block xl:p-5">
            <h5 className="text-sm  font-medium uppercase xsm:text-base">
              Hành động
            </h5>
          </div>
        </div>
        {filteredData.map((item) => (
          <div className="grid grid-cols-4 border-t border-stroke dark:border-strokedark">
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
                <NavLink to='/'>
                  <div className='flex gap-2 '>
                    <IcDetail/>
                    Xem chi tiết
                  </div>
                </NavLink>
                <NavLink to='/'>
                  <div className="flex ml-12 gap-2 ">
                    <IcDelete/>
                    Xóa
                  </div>
                </NavLink>
              </div>
            </React.Fragment>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Table;
// <table>
//         <thead>
//           <tr>
//             <th>Name</th>
//             <th>Category</th>
//           </tr>
//         </thead>
//         <tbody>
//         {filteredData.map((item) => (
//             <tr key={item.id}>
//               <td>{item.name}</td>
//               <td>{item.category}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>