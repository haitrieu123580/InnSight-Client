import styles from './SettingsContainer.module.scss';
import * as React from 'react';
import { DatePicker, Input, Select} from 'antd';
import { useState } from 'react';
import SettingAction from '../../../redux/user-settings/action';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ShowToastify from '../../../utils/ShowToastify';

const info = [
  {
    fullname: 'xxxxxxxxxxx',
    email: 'abc@gmail.com',
    phone_number:'',
    date_of_birth:'',
    gender: 'Female'
  },
];

const SettingsContainer = () => {
  const [isEditing, setIsEditing] = useState(false);
  const dispatch = useDispatch();
  const {data} = useSelector((state) => state.setting) || {}
  const id = JSON.parse(localStorage.getItem('id'));

  useEffect(() => {
    if (id) {
      dispatch({
        type: SettingAction.GET_PROFILE,
        id: id,
          onSuccess: () => {
            console.log('Data after success:',data);
          },
          onError: () => {
              ShowToastify.showErrorToast("Xảy ra lỗi, xin thử lại sau")
          }
      });
    }
  }, [id]);

  console.log('id: ',id);
  // const info = data && data.length > 0 ? data[0] : null;

  const handleClickEdit = () => {
    setIsEditing(!isEditing);
  };

  const [selectedDate, setSelectedDate] = useState(
    info[0].date_of_birth ? info[0].date_of_birth : null
  );

  const onChangeDate = (date, dateString) => {
    setSelectedDate(dateString);
  };

  const handleSelectChangeGender = (value) => {
    console.log(`selected ${value}`);
  };

  return (
    <>
      <div className={`${styles['content']} ml-10 border`}>
        <h1 className="text-3xl font-bold my-3">Thông tin cá nhân</h1>
        <h2>Cập nhật thông tin của bạn và tìm hiểu các thông tin này được sử dụng ra sao.</h2>
          {info && (
            <div>
              <div className='flex text-lg mt-4 my-2 items-center'>
                <h2 className={`${styles['name']} font-semibold`}>Họ và tên:</h2>
                {!isEditing ? (
                  info.fullname ? (
                    <h2>{info.fullname}</h2>
                  ) : (
                    <h2 className='text-slate-500'>Vui lòng nhập họ và tên đầy đủ của bạn</h2>
                  )
                ) : (
                  <Input
                    type="text"
                    placeholder="Vui lòng nhập họ và tên đầy đủ của bạn"
                    style={{
                      width: '500px',
                      height: '35px',
                      fontSize: '16px'
                    }}
                    name="fullname"
                    id="fullname"
                    value={info.fullname}
                    onChange={''}
                  />
                )}
              </div>
              <div className='flex text-lg my-2 font-semibold  items-center'>
                <h2>Địa chỉ email:</h2>
                <h2 className='ml-16'>{info.email}</h2>
              </div>
              <div className='flex text-lg my-2 items-center'>
                <h2 className={`${styles['sdt']} font-semibold`}>Số điện thoại:</h2>
                <div>
                {!isEditing ? (
                  info.phone_number ? (
                    <h2>{info.phone_number}</h2>
                  ):(
                    <h2 className=" text-slate-500">Nhập số điện thoại của bạn</h2>
                  )
                ) : (
                  <Input
                    type="text"
                    placeholder="Vui lòng nhập số điện thoại của bạn"
                    style={{
                      width: '500px',
                      height: '35px',
                      fontSize: '16px'
                    }}
                    name="phone_number"
                    id="phone_number"
                    value={info.phone_number}
                    onChange={''}
                  />
                )}
                
                </div>
              </div>
              <h3 className={`${styles['note']} text-slate-600 text-base`}>Chỗ nghỉ bạn đặt sẽ liên hệ với bạn qua số điện thoại này</h3>
              <div className='flex text-lg my-2 items-center'>
                <h2 className={`${styles['date']} font-semibold`}>Ngày sinh:</h2>
                {!isEditing ? (
                  info.date_of_birth ? (
                    <h2>{info.date_of_birth}</h2>
                  ):(
                    <h2 className='text-slate-500'>Nhập ngày sinh của bạn</h2>
                  )
                ) : (
                  <DatePicker 
                    onChange={onChangeDate} 
                    // value={selectedDate ? moment(selectedDate) : null}
                    placeholder='Nhập ngày sinh của bạn'
                    style={{
                      width: '500px',
                      height: '35px',
                      fontSize: '16px'
                    }}
                  />
                )}
              </div>
              <div className='flex text-lg my-2 items-center'>
                <h2 className={`${styles['gender']} font-semibold`}>Giới tính:</h2>
                {!isEditing ? (
                  info.gender ? (
                    <h2>{info.gender === 'Female' ? 'Nữ' : 'Nam'}</h2>
                  ):(
                    <h2 className='text-slate-500'>Chọn giới tính của bạn</h2>
                  )
                ) : (
                  <Select
                    defaultValue={info.gender}
                    onChange={handleSelectChangeGender}
                    style={{
                      width: '500px',
                      height: '35px',
                      fontSize: '16px'
                    }}
                    options={[
                      {
                        value: 'Male',
                        label: 'Nam',
                      },
                      {
                        value: 'Female',
                        label: 'Nữ',
                      }
                    ]}
                  />
                )}
              </div>
            </div>
          )}
      </div>
      <button className='mt-3 border bg-sky-700 w-48 h-10 text-white text-base rounded-lg float-right mr-5' onClick={handleClickEdit}>{isEditing ? 'Lưu thay đổi' : 'Chỉnh sửa'}</button>
    </>
  );
};

export default SettingsContainer;
