import React, { useState } from "react";
import IcPassword from "../../components/icons/setting-icons/IcPassword";
import IcEmail from "../../components/icons/setting-icons/IcEmail";
import { Button, notification, Space } from 'antd';

const AddAdminContainer = () => {
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
      // Passwords match, you can proceed with form submission
      // Add your logic here
      setPasswordsMatch(true);
    } else {
      // Passwords do not match
      setPasswordsMatch(false);
    }
  };

  const [api, contextHolder] = notification.useNotification();
  const openNotificationWithIcon = (type) => {
    api[type]({
      message: 'Thành công',
      description:
        'Đã thêm admin mới thành công.',
    });
  };

  return (
    <div className="flex justify-center">
      <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark-bg-boxdark w-1/2">
        <div className="border-b border-stroke py-4 px-7 dark-border-strokedark bg-cyan-900">
          <h3 className="font-medium text-white ">Thêm tài khoản admin</h3>
        </div>
        <div className="p-7">
          <form onSubmit={handleSubmit}>
            <div className="mb-5.5">
              <label
                className="mb-3 block text-sm font-medium text-black pt-3"
                htmlFor="emailAddress"
              >
                Địa chỉ Email
              </label>
              <div className="relative">
                <span className="absolute ml-2 left-4.5 top-3">
                  <IcEmail />
                </span>
                <input
                  className="w-full rounded border border-stroke bg-gray py-3 pl-10 pr-4.5 text-black focus-border-primary focus-visible-outline-none dark-border-strokedark dark-bg-meta-4 dark-focus-border-primary"
                  type="email"
                  name="emailAddress"
                  id="emailAddress"
                  placeholder="Nhập email"
                />
              </div>
            </div>

            <div className="mb-5.5">
              <label
                className="mb-3 block text-sm font-medium text-black pt-3"
                htmlFor="password"
              >
                Mật khẩu
              </label>
              <div className="relative">
                <span className="absolute ml-2 left-4.5 top-3">
                  <IcPassword />
                </span>
                <input
                  className="w-full rounded border border-stroke bg-gray py-3 pl-10 pr-4.5 text-black focus-border-primary focus-visible-outline-none dark-border-strokedark dark-bg-meta-4 dark-focus-border-primary"
                  type="password"
                  name="password"
                  id="password"
                  value={password}
                  placeholder="Nhập mật khẩu"
                  onChange={handlePasswordChange}
                />
              </div>
            </div>

            <div className="mb-5.5">
              <label
                className="mb-3 block text-sm font-medium text-black pt-3"
                htmlFor="passwordConfirmation"
              >
                Nhập lại mật khẩu
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
                  name="passwordConfirmation"
                  id="passwordConfirmation"
                  value={passwordConfirmation}
                  placeholder="Nhập lại mật khẩu"
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
                  Thêm
                </button>
              </Space>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddAdminContainer;
