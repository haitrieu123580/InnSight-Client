import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import HostAction from '../../../../redux/host/action';
import RevenueByYear from '../../../components/host-manage/revenue/RevenueByYear';
import ShowToastify from '../../../../utils/ShowToastify';

const RevenueContainer = () => {
  const dispatch = useDispatch();
  const {revenueHotelByYear} = useSelector((state) => state.Host) || {}
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();

  const data = { year: currentYear.toString() };
  const hotelId = localStorage.getItem("hotelId")
  useEffect(() => {
    dispatch({
      type: HostAction.REVENUE_HOTEL_BY_YEAR,
      hotelId:hotelId,
      data: data,
        onSuccess: () => {
        },
        onError: () => {
            ShowToastify.showErrorToast("Lỗi, xin vui lòng thử lại sau!")
        }
    });

  }, [dispatch]);
  return (
      <>
        <RevenueByYear/>
      </>

  );
};

export default RevenueContainer;
