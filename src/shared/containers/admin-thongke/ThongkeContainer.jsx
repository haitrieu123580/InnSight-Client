import React, { useEffect, useState } from 'react';
import RevenueMonth from '../../components/admin-thongke/RevenueMonth'
import RevenueYear from '../../components/admin-thongke/RevenueYear';
import {CSVLink} from 'react-csv';
import AdminAction from '../../../redux/admin/action';
import ShowToastify from '../../../utils/ShowToastify';
import { useDispatch, useSelector } from 'react-redux';

const ThongkeContainer = () => {
  const dispatch = useDispatch();
  const {revenueByYear, revenueAllYear} = useSelector((state) => state.Admin) || {}
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();

  const data = { year: currentYear.toString() };
  useEffect(() => {
    dispatch({
      type: AdminAction.REVENUE_BY_YEAR,
      data: data,
        onSuccess: () => {
        },
        onError: () => {
            ShowToastify.showErrorToast("Lỗi, xin vui lòng thử lại sau!")
        }
    });

    dispatch({
      type: AdminAction.REVENUE_ALL_YEAR,
        onSuccess: () => {
        },
        onError: () => {
            ShowToastify.showErrorToast("Lỗi, xin vui lòng thử lại sau!")
        }
    });

  }, [dispatch]);
  return (
    Object.keys(revenueByYear).length > 0 && Object.keys(revenueAllYear).length > 0 ? (
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
