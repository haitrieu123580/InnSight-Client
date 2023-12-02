import styles from './SettingsContainer.module.scss';
import * as React from 'react';
import { useState } from 'react';
import SettingAction from '../../../redux/user-settings/action';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ShowToastify from '../../../utils/ShowToastify';
import { Controller, useForm  } from 'react-hook-form';
import moment from 'moment';
import Select from 'react-select';
import { DatePicker } from 'antd';
import { useNavigate } from 'react-router';

const SettingsContainer = () => {
  const [isEditing, setIsEditing] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {userProfile} = useSelector((state) => state.Setting) || {}
  const id = JSON.parse(localStorage.getItem('id'));
  const { register, setValue, handleSubmit, watch, control, formState: { errors }} = useForm({
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

  console.log('id', id)
  const item = userProfile;

  const handleClickEdit = () => {
    setIsEditing(!isEditing);
  };

  const handleGenderChange = (selectedOption) => {
    setValue('gender', selectedOption.value === '1');
  };

  const handleDateChange = (date) => {
    const formattedDate = date ? date.format('DD-MM-YYYY') : null;
    setValue('dateOfBirth', formattedDate, { shouldValidate: true });
  };
  

  const onSubmit = (data) => {
    console.log(data)
    dispatch({
        type: SettingAction.UPDATE_PROFILE,
        data: data,
        id: id,
        onSuccess: () => {
          console.log("Thanh cong")
          ShowToastify.showSuccessToast("Thành công")
            // window.location.href = '/mysettings/info';
        },
        onError: () => {
          console.log("That bai")
            // window.location.href = '/mysettings/info';
        }
    })
  }

  return (
    <>
      {item && (
        <div>
          {!isEditing ? (
            <>
              <div className={`${styles['content']} ml-10 border`}>
                <h1 className="text-3xl font-bold my-3">Thông tin cá nhân</h1>
                <h2>Cập nhật thông tin của bạn và tìm hiểu các thông tin này được sử dụng ra sao.</h2>
                <div className='flex text-lg mt-4 my-2 items-center'>
                  <h2 className={`${styles['name']} font-semibold`}>Họ và tên:</h2>
                  {item.fullName ? (
                    <h2>{item.fullName}</h2>
                  ) : (
                    <h2 className='text-slate-500'>Vui lòng nhập họ và tên đầy đủ của bạn</h2>
                  )}
                </div>
                <div className='flex text-lg my-2 font-semibold  items-center'>
                  <h2>Địa chỉ email:</h2>
                  <h2 className='ml-16'>{item.email}</h2>
                </div>
                <div className='flex text-lg my-2 items-center'>
                  <h2 className={`${styles['sdt']} font-semibold`}>Số điện thoại:</h2>
                  <div>
                    {item.phoneNumber ? (
                      <h2>{item.phoneNumber}</h2>
                    ) : (
                      <h2 className=" text-slate-500">Nhập số điện thoại của bạn</h2>
                    )}
                  </div>
                </div>
                <h3 className={`${styles['note']} text-slate-600 text-base`}>Chỗ nghỉ bạn đặt sẽ liên hệ với bạn qua số điện thoại này</h3>
                <div className='flex text-lg my-2 items-center'>
                  <h2 className={`${styles['date']} font-semibold`}>Ngày sinh:</h2>
                  {item.dateOfBirth ? (
                    <h2>{item.dateOfBirth}</h2>
                  ) : (
                    <h2 className='text-slate-500'>Nhập ngày sinh của bạn</h2>
                  )}
                </div>
                <div className='flex text-lg my-2 items-center'>
                  <h2 className={`${styles['gender']} font-semibold`}>Giới tính:</h2>
                  {item.gender != null ? (
                    <h2>{item.gender ? 'Nữ' : 'Nam'}</h2>
                  ) : (
                    <h2 className='text-slate-500'>Chọn giới tính của bạn</h2>
                  )}
                </div>
              </div>
              <button className='mt-3 border bg-sky-700 w-48 h-10 text-white text-base rounded-lg float-right mr-5' onClick={handleClickEdit}>Chỉnh sửa</button>
            </>
          ) : (
            <>
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className={`${styles['content']} ml-10 border`}>
                  <h1 className="text-3xl font-bold my-3">Thông tin cá nhân</h1>
                  <h2>Cập nhật thông tin của bạn và tìm hiểu các thông tin này được sử dụng ra sao.</h2>
                  <div className='flex text-lg mt-4 my-2 items-center'>
                    <h2 className={`${styles['name']} font-semibold`}>Họ và tên:</h2>
                    <input
                      type="text"
                      placeholder="Vui lòng nhập họ và tên đầy đủ của bạn"
                      className={styles.input}
                      defaultValue={item.fullName}
                      {...register("fullName", {required:''})}
                    />
                  </div>
                  <div className='flex text-lg my-2 font-semibold  items-center'>
                    <h2>Địa chỉ email:</h2>
                    <h2 className='ml-16'>{item.email}</h2>
                  </div>
                  <div className='flex text-lg my-2 items-center'>
                    <h2 className={`${styles['sdt']} font-semibold`}>Số điện thoại:</h2>
                    <div>
                      <input
                        type="text"
                        placeholder="Vui lòng nhập số điện thoại của bạn"
                        className={styles.input}
                        defaultValue={item.phoneNumber}
                        {...register("phoneNumber")}
                      />
                    </div>
                  </div>
                  <h3 className={`${styles['note']} text-slate-600 text-base`}>Chỗ nghỉ bạn đặt sẽ liên hệ với bạn qua số điện thoại này</h3>
                  <div className='flex text-lg my-2 items-center'>
                    <h2 className={`${styles['date']} font-semibold`}>Ngày sinh:</h2>
                    <Controller
                      name="dateOfBirth"
                      control={control}
                      defaultValue={item.dateOfBirth ? moment(item.dateOfBirth, 'DD-MM-YYYY').toDate() : null}
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
                  <div className='flex text-lg my-2 items-center'>
                    <h2 className={`${styles['gender']} font-semibold`}>Giới tính:</h2>
                    <Controller
                      name="gender"
                      control={control}
                      defaultValue={Boolean(item.gender)}
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
                <button type='submit' className='mt-3 border bg-sky-700 w-48 h-10 text-white text-base rounded-lg float-right mr-5'>Lưu thay đổi</button>
                <button onClick={handleClickEdit} className='mt-3 border bg-slate-500 w-32 h-10 text-white text-base rounded-lg float-right mr-5'>Hủy</button>
              </form>
            </>
          )}
        </div>
      )}
    </>
  );
};

export default SettingsContainer;
