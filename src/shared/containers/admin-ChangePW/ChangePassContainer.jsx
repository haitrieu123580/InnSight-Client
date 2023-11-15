import React, { useState } from "react";
import IcPassword from "../../components/icons/setting-icons/IcPassword";
import {notification, Space } from 'antd';

const ChangePassContainer = () => {
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const [passwordsMatch, setPasswordsMatch] = useState(true);

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handlePasswordConfirmationChange = (event) => {
    setPasswordConfirmation(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (password === passwordConfirmation) {
      setPasswordsMatch(true);
    } else {
      setPasswordsMatch(false);
    }
  };

  const [api, contextHolder] = notification.useNotification();
  const openNotificationWithIcon = (type) => {
    api[type]({
      message: 'Thành công',
      description:
        'Đã đổi mật khẩu thành công.',
    });
  };

  return (
    <div className="flex justify-center">
      <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark-bg-boxdark w-1/2">
        <div className="border-b border-stroke py-4 px-7 dark-border-strokedark bg-cyan-900">
          <h3 className="font-medium text-white ">Đổi mật khẩu</h3>
        </div>
        <div className="p-7">
          <form onSubmit={handleSubmit}>
            <div className="mb-5.5">
              <label
                className="mb-3 block text-sm font-medium text-black pt-3"
                htmlFor="emailAddress"
              >
                Mật khẩu cũ
              </label>
              <div className="relative">
                <span className="absolute ml-2 left-4.5 top-3">
                  <IcPassword />
                </span>
                <input
                  className="w-full rounded border border-stroke bg-gray py-3 pl-10 pr-4.5 text-black focus-border-primary focus-visible-outline-none dark-border-strokedark dark-bg-meta-4 dark-focus-border-primary"
                  // 
                  type="password"
                  name="oldpassword"
                  id="oldpassword"
                  placeholder="Nhập mật khẩu cũ"
                />
              </div>
            </div>

            <div className="mb-5.5">
              <label
                className="mb-3 block text-sm font-medium text-black pt-3"
                htmlFor="password"
              >
                Mật khẩu mới
              </label>
              <div className="relative">
                <span className="absolute ml-2 left-4.5 top-3">
                  <IcPassword />
                </span>
                <input
                  className="w-full rounded border border-stroke bg-gray py-3 pl-10 pr-4.5 text-black focus-border-primary focus-visible-outline-none dark-border-strokedark dark-bg-meta-4 dark-focus-border-primary"
                  type="password"
                  name="newpassword"
                  id="newpassword"
                  value={password}
                  placeholder="Nhập mật khẩu mới"
                  onChange={handlePasswordChange}
                />
              </div>
            </div>

            <div className="mb-5.5">
              <label
                className="mb-3 block text-sm font-medium text-black pt-3"
                htmlFor="passwordConfirmation"
              >
                Nhập lại mật khẩu mới
              </label>
              <div className="relative">
                <span className="absolute ml-2 left-4.5 top-3">
                  <IcPassword />
                </span>
                <input
                  className={`w-full rounded border ${
                    passwordsMatch
                      ? "border-stroke"
                      : "border-red-500"
                  } bg-gray py-3 pl-10 pr-4.5 text-black focus-border-primary focus-visible-outline-none dark-border-strokedark dark-bg-meta-4 dark-focus-border-primary`}
                  type="password"
                  name="newpasswordConfirmation"
                  id="newpasswordConfirmation"
                  value={passwordConfirmation}
                  placeholder="Nhập lại mật khẩu mới"
                  onChange={handlePasswordConfirmationChange}
                />
              </div>
            </div>

            <div className="flex justify-end gap-4.5">
              <button
                className="flex justify-center rounded border-red-800 border border-stroke py-2 px-6 font-medium text-black hover-shadow-1 dark-border-strokedark "
                type="submit"
              >
                Hủy
              </button>
              {contextHolder}
              <Space>
                <button
                  className="flex justify-center rounded border-green-600 border py-2 px-6 font-medium text-black hover-shadow-1 dark-border-strokedark "
                  type="submit"
                  onClick={() => openNotificationWithIcon('success')}
                >
                  Lưu
                </button>
              </Space>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ChangePassContainer;
