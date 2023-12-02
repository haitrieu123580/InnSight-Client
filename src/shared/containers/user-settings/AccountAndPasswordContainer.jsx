import { useState, useEffect } from 'react';
import styles from './AccountAndPasswordContainer.module.scss';
import * as React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import SettingAction from '../../../redux/user-settings/action';
import ShowToastify from '../../../utils/ShowToastify';

const AccountAndPasswordContainer = () => {
  const [isChange, setIsChange] = useState(false);
  const [isDelete, setIsDelete] = useState(false);
  const dispatch = useDispatch();

  const handleClickChange = () => {
    setIsChange(!isChange);
  };

  const handleClickDelete = () => {
    setIsDelete(!isDelete);
  };

  const { handleSubmit, register} = useForm({
    criteriaMode: "all"
  });

  const onSubmit = (data) => {
    console.log(data)
    dispatch({
        type: SettingAction.CHANGEPASS,
        data: data,
        onSuccess: () => {
          ShowToastify.showSuccessToast("Thành công")
          window.location.href = '/mysettings/password';
        },
        onError: () => {
          ShowToastify.showErrorToast("Thất bại")
        }
    })
  } 

  return (
    <>
      <div className={`${styles['content']} ml-10 border`}>
        <h1 className="text-3xl font-bold my-3">Tài khoản và mật khẩu</h1>
            <div>
              <div className='flex text-lg mt-7 my-2'>
                <h2 className={`${styles['label1']} font-semibold`}>Mật khẩu</h2>
                {!isChange ? (
                  <div className='flex items-start'>
                    <h3 className={`${styles['label']}`}>
                      Đổi mật khẩu thường xuyên để giúp tài khoản của bạn được bảo mật
                    </h3>
                    <button className={`${styles['change']}`} onClick={handleClickChange}>
                      Đổi mật khẩu
                    </button>
                  </div>
                ) : (
                  <div className='flex items-center'>
                    <form onSubmit={handleSubmit(onSubmit)}>
                    <div>
                      <h3 className={`${styles['pass']} mt-0`}>Nhập mật khẩu cũ</h3>
                      <input
                        type="password"
                        className={styles.input}
                        id="currentPassword"
                        {...register("currentPassword", {required:''})}
                      />
                      <h3 className={`${styles['pass']}`}>Nhập mật khẩu mới</h3>
                      <input
                        type="password"
                        className={styles.input}
                        id="newPassword"
                        {...register("newPassword", {required:''})}
                      />
                      <h3 className={`${styles['pass']}`}>Nhập lại mật khẩu mới</h3>
                      <input
                        type="password"
                        className={styles.input}
                        style={{
                          marginBottom: '15px'
                        }}
                        id="confirmationPassword"
                        {...register("confirmationPassword", {required:''})}
                      />
                    </div>
                    <button onClick={handleClickChange} className='ml-10 border bg-slate-500 w-24 h-10 text-white text-base rounded-lg float-right mr-5' >Hủy</button>
                    <button type='submit' className='ml-10 border bg-sky-700 w-24 h-10 text-white text-base rounded-lg float-right mr-5' >Lưu</button>
                    </form>
                  </div>
                )}
              </div>
              
              <div className='flex text-lg my-2'>
                <h2 className={`${styles['label2']} font-semibold`}>Xóa tài khoản</h2>
                <h2 className={`${styles['label']}`}>Xóa tài khoản vĩnh viễn </h2>
                <button className={`${styles['change']}`} onClick={handleClickDelete}>Xóa tài khoản</button>
                {!isDelete ? (
                  <div>
                    
                  </div>
                ):(
                  <div>

                  </div>
                )}
              </div>
            </div>
      </div>
    </>
  );
};

export default AccountAndPasswordContainer;