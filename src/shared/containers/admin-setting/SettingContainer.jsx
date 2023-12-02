import styles from './SettingContainer.module.scss';
import React ,{useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import SettingAction from "../../../redux/user-settings/action";
import ShowToastify from "../../../utils/ShowToastify";
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import DateRangeIcon from '@mui/icons-material/DateRange';
import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined';
import { Controller, useForm } from "react-hook-form";
import moment from "moment/moment";
import { DatePicker } from "antd";
import Select from 'react-select';

const SettingContainer = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const id = JSON.parse(localStorage.getItem('id'));
  const {userProfile} = useSelector((state) => state.Setting) || {}
  const { register, setValue, handleSubmit, control, formState: { errors }} = useForm({
    criteriaMode: "all"
  });

  useEffect(() => {
    if (id) {
      dispatch({
        type: SettingAction.GET_PROFILE,
        id: id,
          onSuccess: () => {
          },
          onError: () => {
              ShowToastify.showErrorToast("Xảy ra lỗi, xin thử lại sau")
          }
      });
    }
  }, [id]);

  const handleGenderChange = (selectedOption) => {
    setValue('gender', selectedOption.value === '1');
  };

  const handleDateChange = (date) => {
    const formattedDate = date ? date.format('DD-MM-YYYY') : null;
    setValue('dateOfBirth', formattedDate, { shouldValidate: true });
  };

  const onSubmit = (data) => {
    console.log('data', data);
    dispatch({
        type: SettingAction.UPDATE_PROFILE,
        data: data,
        id: id,
        onSuccess: () => {
          ShowToastify.showSuccessToast("Lưu thành công")
          window.location.href= ('/admin_setting');
        },
        onError: () => {
          console.log("Xảy ra lỗi")
          window.location.href= ('/admin_setting');
        }
    })
  }

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className={`justify-center px-36 ${styles['home']}`}>
          <div className="col-span-5 xl:col-span-3">
            <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
              <div className="border-b border-stroke py-4 px-7 dark:border-strokedark bg-slate-300">
                <h3 className="font-medium text-black ">
                  Thông tin cá nhân
                </h3>
              </div>
              <div className="p-7">
                  <div className="mb-5.5 flex flex-col gap-5.5 sm:flex-row">
                    <div className="w-full sm:w-1/2">
                      <label
                        className="mb-3 block text-sm font-medium text-black"
                      >
                        Họ và tên
                      </label>
                      <div className="relative">
                        <span className="absolute ml-2 left-4.5 top-3">
                          <PersonOutlineIcon/>
                        </span>
                        <input
                          className="w-full rounded border border-stroke bg-gray py-3 pl-10 pr-4.5 text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4  dark:focus:border-primary"
                          defaultValue={userProfile.fullName}
                          placeholder="Điền họ tên"
                          {...register("fullName")}
                        />
                      </div>
                    </div>
                    <div className="w-full sm:w-1/2">
                      <label
                        className="mb-3 block text-sm font-medium text-black "
                      >
                        Số điện thoại
                      </label>
                      <input
                        className="w-full rounded border border-stroke bg-gray pl-4 py-3 px-4.5 text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:focus:border-primary"
                        {...register("phoneNumber")}
                        defaultValue={userProfile.phoneNumber}
                        placeholder="Điền số điện thoại"
                      />
                    </div>
                  </div>
                  <div className="mb-5.5">
                    <label
                      className="mb-3 block text-sm font-medium text-black pt-3"
                    >
                      Địa chỉ Email
                    </label>
                    <div className="relative">
                      <span className="absolute ml-2 left-4.5 top-3">
                        <MailOutlineIcon/>
                      </span>
                      <input
                        className="w-full rounded border border-stroke bg-gray py-3 pl-10 pr-4.5 text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4  dark:focus:border-primary"
                        type="email"
                        defaultValue={userProfile.email}
                        readOnly= "true"
                      />
                    </div>
                  </div>
                  <div className="mb-5.5">
                    <label
                      className="mb-3 block text-sm font-medium text-black pt-3"
                    >
                      Ngày sinh
                    </label>
                    <div className="">
                      <Controller
                      name="dateOfBirth"
                      control={control}
                      defaultValue={userProfile.dateOfBirth ? moment(userProfile.dateOfBirth, 'DD-MM-YYYY').toDate() : null}
                      render={({ field }) => (
                        <DatePicker
                          value={field.value ? moment(field.value, 'DD-MM-YYYY') : null}
                          onChange={handleDateChange}
                          placeholder='Nhập ngày sinh của bạn'
                          className={styles.input}
                          format='DD-MM-YYYY'
                        />
                      )}
                    />
                    </div>
                  </div>
                  <div className="mb-5.5">
                    <label
                      className="mb-3 block text-sm font-medium text-black pt-3"
                    >
                      Giới tính
                    </label>
                    <div className="h-12">
                      <Controller
                      name="gender"
                      control={control}
                      defaultValue={Boolean(userProfile.gender)}
                      render={({ field }) => (
                        <Select
                          value={field.value ? { value: '1', label: 'Nữ' } : { value: '0', label: 'Nam' }}
                          className={styles.gender_input}
                          options={[
                            { value: '0', label: 'Nam' },
                            { value: '1', label: 'Nữ' },
                          ]}
                          onChange={handleGenderChange}
                        />
                      )}
                    />
                    </div>
                  </div>
                  <div className="flex justify-end gap-4.5">
                    <button
                      className="flex justify-center rounded border-red-800 border border-stroke py-2 px-6 font-medium text-black hover:shadow-1 dark:border-strokedark "
                      type="reset"
                    >
                      Hủy
                    </button>
                    <button
                      className="flex justify-center rounded border-green-600 border py-2 px-6 font-medium text-black hover:shadow-1 dark:border-strokedark "
                      type="submit"
                    >
                      Lưu
                    </button>
                  </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </>
  );
};

export default SettingContainer;
