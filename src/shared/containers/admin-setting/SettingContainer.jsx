import image from '../../../assets/images/user.png';
import React,{ useState,useEffect } from "react";
import IcUser from '../../components/icons/setting-icons/IcUser'
import IcPassword from '../../components/icons/setting-icons/IcPassword'
import IcEmail from '../../components/icons/setting-icons/IcEmail'
import IcBiO from '../../components/icons/setting-icons/IcBiO'
import IcUpload from '../../components/icons/setting-icons/IcUpload'
import styles from './SettingContainer.module.scss'

const SettingContainer = () => {
  const [admin, setAdmin] = React.useState([
    {id:'1', name:'Nguyễn Thị Thu Thuyên', phone_number:'0848137989', email:'thuyen@gmail.com', password:'123456', bio:'aaaaaaaaaaa'},
    {id:'2', name:'Nguyễn Thị Thu Thuyên', phone_number:'0848137989', email:'thuyen@gmail.com', password:'123456', bio:'bbbbbbbbbbbbb'},
    {id:'3', name:'Nguyễn Thị Thu Thuyên', phone_number:'0848137989', email:'thuyen@gmail.com', password:'123456', bio:'cccccccccccc'},
    {id:'4', name:'Nguyễn Thị Thu Thuyên', phone_number:'0848137989', email:'thuyen@gmail.com', password:'123456', bio:'ddddddddd'}
  ]);

  const adminData = admin.find(item => item.id === '2');

  const [modalOpen, setModalOpen] = useState(false);
  const [rows, setRows] = useState(localStorage.getItem("alertSettings")?JSON.parse(localStorage.getItem("alertSettings")):[]);
  useEffect(() => {
    localStorage.setItem("alertSettings", JSON.stringify(rows));
  }, [rows]);
  const [rowToEdit, setRowToEdit] = useState(null);

  const handleDeleteRow = (targetIndex) => {
    setRows(rows.filter((_, idx) => idx !== targetIndex));
  };

  const handleEditRow = (idx) => {
    setRowToEdit(idx);
    setModalOpen(true);
  };

  const handleSubmit = (newRow) => {
    rowToEdit === null
      ? setRows([...rows, newRow])
      : setRows(
          rows.map((currRow, idx) => {
            if (idx !== rowToEdit) return currRow;

            return newRow;
          })
        );
  };

  return (
    <>
      <div className="mx-auto max-w-270">
        <div className="grid grid-cols-5 gap-8">
          <div className="col-span-5 xl:col-span-3">
            <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
              <div className="border-b border-stroke py-4 px-7 dark:border-strokedark bg-slate-300">
                <h3 className="font-medium text-black ">
                  Thông tin cá nhân
                </h3>
              </div>
              <div className="p-7">
                <form action="#">
                  <div className="mb-5.5 flex flex-col gap-5.5 sm:flex-row">
                    <div className="w-full sm:w-1/2">
                      <label
                        className="mb-3 block text-sm font-medium text-black"
                        htmlFor="fullName"
                      >
                        Họ và tên
                      </label>
                      <div className="relative">
                        <span className="absolute ml-2 left-4.5 top-3">
                          <IcUser/>
                        </span>
                        <input
                          className="w-full rounded border border-stroke bg-gray py-3 pl-10 pr-4.5 text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4  dark:focus:border-primary"
                          type="text"
                          name="fullName"
                          id="fullName"
                          placeholder="Nguyễn Văn A"
                          defaultValue={adminData.name}
                        />
                      </div>
                    </div>

                    <div className="w-full sm:w-1/2">
                      <label
                        className="mb-3 block text-sm font-medium text-black "
                        htmlFor="phoneNumber"
                      >
                        Số điện thoại
                      </label>
                      <input
                        className="w-full rounded border border-stroke bg-gray pl-4 py-3 px-4.5 text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:focus:border-primary"
                        type="text"
                        name="phoneNumber"
                        id="phoneNumber"
                        defaultValue={adminData.phone_number}
                      />
                    </div>
                  </div>

                  <div className="mb-5.5">
                    <label
                      className="mb-3 block text-sm font-medium text-black pt-3"
                      htmlFor="emailAddress"
                    >
                      Địa chỉ Email
                    </label>
                    <div className="relative">
                      <span className="absolute ml-2 left-4.5 top-3">
                        <IcEmail/>
                      </span>
                      <input
                        className="w-full rounded border border-stroke bg-gray py-3 pl-10 pr-4.5 text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4  dark:focus:border-primary"
                        type="email"
                        name="emailAddress"
                        id="emailAddress"
                        defaultValue={adminData.email}
                        readOnly= "true"
                      />
                    </div>
                  </div>

                  <div className="mb-5.5">
                    <label
                      className="mb-3 block text-sm font-medium text-black pt-3"
                      htmlFor="emailAddress"
                    >
                      Mật khẩu
                    </label>
                    <div className="relative">
                      <span className="absolute ml-2 left-4.5 top-3">
                        <IcPassword/>
                      </span>
                      <input
                        className="w-full rounded border border-stroke bg-gray py-3 pl-10 pr-4.5 text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4  dark:focus:border-primary"
                        type="password"
                        name="password"
                        id="password"
                        defaultValue={adminData.password}
                        readOnly= "true"
                      />
                    </div>
                  </div>

                  <div className="flex justify-end gap-4.5">
                    <button
                      className="flex justify-center rounded border-red-800 border border-stroke py-2 px-6 font-medium text-black hover:shadow-1 dark:border-strokedark "
                      type="submit"
                    >
                      Hủy
                    </button>
                    <button
                      className="flex justify-center rounded border-green-600 border py-2 px-6 font-medium text-black hover:shadow-1 dark:border-strokedark "
                      type="button"
                      onClick={''}
                    >
                      Lưu
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className="col-span-5 xl:col-span-2">
            <div className="rounded-sm border border-stroke  shadow-default">
              <div className="border-b border-stroke py-4 px-7 dark:border-strokedark bg-slate-300">
                <h3 className="font-medium text-black ">
                  Ảnh đại diện
                </h3>
              </div>
              <div className="p-7">
                <form action="#">
                  <div className="mb-4 flex items-center gap-3">
                    <div className="h-14 w-14 rounded-full">
                    <img src={image} alt="User" className={`${styles.image}`} />
                    </div>
                    <div>
                      <span className="mb-1.5 text-sky-900 font-bold ">
                        Ảnh của bạn
                      </span>
                      <span className="flex gap-2.5">
                        <button className="text-sm hover:text-primary ">
                          Xóa
                        </button>
                        <button className="text-sm hover:text-primary">
                          Chỉnh sửa
                        </button>
                      </span>
                    </div>
                  </div>

                  <div
                    id="FileUpload"
                    className="relative mb-5.5 block w-full cursor-pointer appearance-none rounded border-2 border-dashed border-primary bg-gray py-4 px-4 dark:bg-meta-4 sm:py-7.5"
                  >
                    <input
                      type="file"
                      accept="image/*"
                      className="absolute inset-0 z-50 m-0 h-full w-full cursor-pointer p-0 opacity-0 outline-none"
                    />
                    <div className="flex flex-col items-center justify-center space-y-3">
                      <span className="flex h-10 w-10 items-center justify-center rounded-full border border-stroke bg-white dark:border-strokedark dark:bg-boxdark">
                        <IcUpload/>
                      </span>
                      <p>
                        <span className="text-primary">Click to upload</span> or
                        drag and drop
                      </p>
                      <p className="mt-1.5">SVG, PNG, JPG or GIF</p>
                      <p>(max, 800 X 800px)</p>
                    </div>
                  </div>

                  <div className="flex justify-end gap-4.5">
                    <button
                      className="flex justify-center rounded border border-stroke py-2 px-6 font-medium text-black hover:shadow-1 dark:border-strokedark "
                      type="submit"
                    >
                      Hủy
                    </button>
                    <button
                      className="flex justify-center rounded border border-stroke py-2 px-6 font-medium text-black hover:shadow-1 dark:border-strokedark"
                      type="submit"
                    >
                      Lưu
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SettingContainer;
