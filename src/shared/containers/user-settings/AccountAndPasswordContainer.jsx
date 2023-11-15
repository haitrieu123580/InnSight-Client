import { useState, useEffect } from 'react';
import styles from './AccountAndPasswordContainer.module.scss';
import * as React from 'react';
import { Input } from 'antd';
import Axios from 'axios';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';
import ShowToastify from '../../../utils/ShowToastify';
import SettingAction from '../../../redux/user-settings/action';

const account = [
  {
    email: 'abc@gmail.com',
    password: 'password',
  },
];

const AccountAndPasswordContainer = () => {
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmationPassword, setConfirmationPassword] = useState("");
  // const [error, setError] = useState('');
  const [isChange, setIsChange] = useState(false);
  const [isDelete, setIsDelete] = useState(false);
  const [renderCount, setRenderCount] = useState(0);
  const dispatch = useDispatch();
    const navigate = useNavigate();

  const handleClickChange = () => {
    setIsChange(!isChange);
  };

  const handleClickDelete = () => {
    setIsDelete(!isDelete);
  };

  const { handleSubmit, register, setError, setValue, clearErrors, formState: { errors } } = useForm({
    criteriaMode: "all"
  });

  const onSubmit = (data) => {
    console.log(data)
    dispatch({
        type: SettingAction.CHANGEPASS,
        data: data,
        onSuccess: () => {
          console.log("Thanh cong")
            navigate("/")
        },
        onError: () => {
          console.log("That bai")
        }
    })
  } 

  return (
    <>
      <div className={`${styles['content']} ml-10 border`}>
        <h1 className="text-3xl font-bold my-3">Tài khoản và mật khẩu</h1>
          {account.map((item, index) => (
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
                      <Input
                        type="password"
                        value={currentPassword}
                        style={{
                          width: '400px',
                          height: '35px',
                          fontSize: '16px'
                        }}
                        id="currentPassword"
                        onChange={(e) => setCurrentPassword(e.target.value)}
                      />
                      <h3 className={`${styles['pass']}`}>Nhập mật khẩu mới</h3>
                      <Input
                        type="password"
                        value={newPassword}
                        style={{
                          width: '400px',
                          height: '35px',
                          fontSize: '16px'
                        }}
                        id="newPassword"
                        onChange={(e) => setNewPassword(e.target.value)}
                      />
                      <h3 className={`${styles['pass']}`}>Nhập lại mật khẩu mới</h3>
                      <Input
                        type="password"
                        value={confirmationPassword}
                        style={{
                          width: '400px',
                          height: '35px',
                          fontSize: '16px',
                          marginBottom: '15px'
                        }}
                        id="confirmationPassword"
                        onChange={(e) => setConfirmationPassword(e.target.value)}
                      />
                    </div>
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
          ))}
      </div>
    </>
  );
};

export default AccountAndPasswordContainer;

// import React, { useState } from 'react';
// import axios from 'axios';

// const Login = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');

//   const apiUrl = 'http://localhost:8001/api/v1/auth/authenticate';

//   const handleLogin = async () => {
//     try {
//       const response = await axios.post(apiUrl, { email, password });
//       console.log('Đăng nhập thành công:', response.data);
//     } catch (error) {
//       console.error('Đăng nhập thất bại:', error.response.data);
//     }
//   };

//   return (
//     <div>
//       <label>Email:</label>
//       <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />

//       <label>Password:</label>
//       <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />

//       <button onClick={handleLogin}>Đăng nhập</button>
//     </div>
//   );
// };

// export default Login;
