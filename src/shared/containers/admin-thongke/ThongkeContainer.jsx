import React, { useEffect } from 'react';
import RevenueMonth from '../../components/admin-thongke/RevenueMonth'
import RevenueYear from '../../components/admin-thongke/RevenueYear';
import AdminAction from '../../../redux/admin/action';
import ShowToastify from '../../../utils/ShowToastify';
import { useDispatch, useSelector } from 'react-redux';

const ThongkeContainer = () => {
  const dispatch = useDispatch();
  const { revenueAllYear} = useSelector((state) => state.Admin) || {}
  useEffect(() => {
    dispatch({
      type: AdminAction.REVENUE_ALL_YEAR,
        onSuccess: () => {
        },
        onError: () => {
            ShowToastify.showErrorToast("Lỗi, xin vui lòng thử lại sau!")
        }
    });
  }, []);
  return (
    Object.keys(revenueAllYear).length > 0 ? (
      <>
        <RevenueMonth/>
        <RevenueYear/>
      </>
    ):(
      null
    )
  );
};

export default ThongkeContainer;
