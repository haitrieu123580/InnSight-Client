import { useState } from 'react';
import styles from './AccountAndPasswordContainer.module.scss';
import * as React from 'react';
import { Input } from 'antd';
import SettingAction from '../../../redux/user-settings/action';
import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router';
import ShowToastify from '../../../utils/ShowToastify';

const account = [
  {
    email: 'abc@gmail.com',
    password: 'password',
  },
];


const AccountAndPasswordContainer = () => {
  const [currentPassword, setCurrentPassword] = useState("")
  const [newPassword, setNewPassword] = useState("")
  const [confirmationPassword, setConfirmationPassword] = useState("")
  const [error, setError] = useState('');
  const dispath = useDispatch();
  const navigate = useNavigate();
  const [isChange, setIsChange] = useState(false);

  const handleClickChange = () => {
    setIsChange(!isChange);
  };

  const [isDelete, setIsDelete] = useState(false);

  const handleClickDelete = () => {
    setIsDelete(!isDelete);
  };
  const handleSubmit = async () => {
    try {
      const token = 'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ0aHV5ZW5uZ3V5ZW4wMjA1MTdAZ21haWwuY29tIiwiaWF0IjoxNjk5OTYwOTYxLCJleHAiOjE3MDAwNDczNjF9.lVBvPHCzeFJmO36DmTiA_bWnqk7mjWKdW-NQlXBkvfw';
      const response = await fetch('http://localhost:8001/api/user/changePassword', {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ currentPassword, newPassword, confirmationPassword }),
      });

      if (response.ok) {
        console.log('Login successful');
      } else {
        const data = await response.json();
        setError(data.message || 'Login failed');
      }
    } catch (error) {
      console.error('Error during login:', error);
      setError('An error occurred during login');
    }
  };
  
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
                    {/* <form onSubmit={handleSubmit}> */}
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
                      {error && <p style={{ color: 'red' }}>{error}</p>}
                    </div>
                    <button onClick={handleSubmit} className='ml-10 border bg-sky-700 w-24 h-10 text-white text-base rounded-lg float-right mr-5' >Lưu</button>
                    {/* </form> */}
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
