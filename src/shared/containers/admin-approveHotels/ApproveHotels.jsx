import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ShowToastify from "../../../utils/ShowToastify";
import AdminAction from '../../../redux/admin/action';

const ApproveHotels = () => {
  const dispatch = useDispatch();
  const [reloadData, setReloadData] = useState(false);
  const {hotel} = useSelector((state) => state.Admin) || {}
  console.log('hotel', hotel);
  useEffect(() => {
    dispatch({
      type: AdminAction.PENDING_HOTEL,
        onSuccess: () => {
        },
        onError: () => {
            ShowToastify.showErrorToast("Xảy ra lỗi, xin thử lại sau")
        }
    });
    setReloadData(false);
  }, [reloadData]);

  const handleApprove = (hotelId) => {
    dispatch({
        type: AdminAction.APPROVE_HOTEL,
        hotelId: hotelId,
        onSuccess: () => {
          ShowToastify.showSuccessToast("Đã phê duyệt");
        },
        onError: () => {
          ShowToastify.showErrorToast("Xảy ra lỗi, xin thử lại sau");
        }
    })
    setReloadData(true);
  }
  
  const handleDecline = (hotelId) => {
    dispatch({
        type: AdminAction.DECLINE_HOTEL,
        hotelId: hotelId,
        onSuccess: () => {
          ShowToastify.showSuccessToast("Đã từ chối");
        },
        onError: () => {
          ShowToastify.showErrorToast("Xảy ra lỗi, xin thử lại sau");
        }
    })
    setReloadData(true);
  }

  return (
    <div>
      
    </div>
  );
};

export default ApproveHotels;
