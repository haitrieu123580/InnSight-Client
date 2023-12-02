import React, { useState } from "react";
import {notification, Space } from 'antd';
import KeyOutlinedIcon from '@mui/icons-material/KeyOutlined';
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import SettingAction from "../../../redux/user-settings/action";
import ShowToastify from "../../../utils/ShowToastify";

const ChangePassContainer = () => {
  const dispatch = useDispatch();

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
          window.location.href = '/admin_changepw';
        },
        onError: () => {
          ShowToastify.showErrorToast("Thất bại")
        }
    })
  } 

  return (
    <div className="flex justify-center">
      <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark-bg-boxdark w-1/2">
        <div className="border-b border-stroke py-4 px-7 dark-border-strokedark bg-cyan-900">
          <h3 className="font-medium text-white ">Đổi mật khẩu</h3>
        </div>
        <div className="p-7">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-5.5">
              <label
                className="mb-3 block text-sm font-medium text-black pt-3"
                htmlFor="emailAddress"
              >
                Mật khẩu cũ
              </label>
              <div className="relative">
                <span className="absolute ml-2 left-4.5 top-3">
                  <KeyOutlinedIcon />
                </span>
                <input
                  className="w-full rounded border border-stroke bg-gray py-3 pl-10 pr-4.5 text-black focus-border-primary focus-visible-outline-none dark-border-strokedark dark-bg-meta-4 dark-focus-border-primary"
                  type="password"
                  placeholder="Nhập mật khẩu cũ"
                  {...register("currentPassword", {required:''})}
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
                  <KeyOutlinedIcon />
                </span>
                <input
                  className="w-full rounded border border-stroke bg-gray py-3 pl-10 pr-4.5 text-black focus-border-primary focus-visible-outline-none dark-border-strokedark dark-bg-meta-4 dark-focus-border-primary"
                  type="password"
                  placeholder="Nhập mật khẩu mới"
                  {...register("newPassword", {required:''})}
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
                  <KeyOutlinedIcon />
                </span>
                <input
                  className={`w-full rounded border bg-gray py-3 pl-10 pr-4.5 text-black focus-border-primary focus-visible-outline-none dark-border-strokedark dark-bg-meta-4 dark-focus-border-primary`}
                  type="password"
                  placeholder="Nhập lại mật khẩu mới"
                  {...register("confirmationPassword", {required:''})}
                />
              </div>
            </div>

            <div className="flex justify-end gap-4.5">
              <button
                className="flex justify-center rounded border-red-800 border border-stroke py-2 px-6 font-medium text-black hover-shadow-1 dark-border-strokedark "
                type="reset"
              >
                Hủy
              </button>
              <Space>
                <button
                  className="flex justify-center rounded border-green-600 border py-2 px-6 font-medium text-black hover-shadow-1 dark-border-strokedark "
                  type="submit"
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
