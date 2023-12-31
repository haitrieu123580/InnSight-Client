import React, { useEffect, useState } from "react";
import styles from './ApproveHotelsContainer.module.scss'
import { useDispatch, useSelector } from "react-redux";
import ShowToastify from "../../../utils/ShowToastify";
import AdminAction from '../../../redux/admin/action';
import PlaceIcon from '@mui/icons-material/Place';
import ApartmentIcon from '@mui/icons-material/Apartment';
import moment from "moment";
import PersonIcon from '@mui/icons-material/Person';
import { NavLink } from "react-router-dom";
import InfoIcon from '@mui/icons-material/Info';

const ApproveHotels = () => {
  const dispatch = useDispatch();
  const [reloadData, setReloadData] = useState(false);
  const {listPending} = useSelector((state) => state.Admin) || {}
  useEffect(() => {
    dispatch({
      type: AdminAction.PENDING_HOTEL,
        onSuccess: () => {
        },
        onError: () => {
            ShowToastify.showErrorToast("Xảy ra lỗi, xin thử lại 1")
        }
    });
    setReloadData(false);
  }, [reloadData]);

  const handleApprove = (hotelId) => {
    dispatch({
        type: AdminAction.APPROVE_HOTEL,
        hotelId: hotelId,
        onSuccess: () => {
          setReloadData(true);
          ShowToastify.showSuccessToast("Đã phê duyệt");
        },
        onError: () => {
          ShowToastify.showErrorToast("Xảy ra lỗi, xin thử lại 2");
        }
    })
  }
  
  const handleDecline = (hotelId) => {
    dispatch({
        type: AdminAction.DECLINE_HOTEL,
        hotelId: hotelId,
        onSuccess: () => {
          setReloadData(true);
          ShowToastify.showSuccessToast("Đã từ chối");
        },
        onError: () => {
          ShowToastify.showErrorToast("Xảy ra lỗi, xin thử lại 3");
        }
    })
  }
  

  return (
    <div>
      {listPending && Object.keys(listPending).length > 0 ? (
        listPending.map((item, index) => (
          <div className='border rounded-md px-7 py-5 mx-20 my-6 text-base flex items-start justify-between'>
            <div>
              <ApartmentIcon className="text-blue-900 text-4xl mr-2 pb-2"/>
              <span className="text-xl font-bold text-green-700">{item.hotel?.name}</span>
              <div className="flex">
                <PlaceIcon className="text-yellow-800 mt-1 text-xl"/>
                <div className="mt-1">{item.hotel?.street}, {item.hotel?.ward}, {item.hotel?.district}, <span className="font-semibold">{item.hotel?.province}</span></div>
              </div>
              <li className="ml-2 my-2">Thời gian check-in: {item.hotel?.checkInTime}</li>
              <li className="ml-2 mb-2">Thời gian check-out: {item.hotel?.checkOutTime}</li>
              <NavLink to={`/qltaikhoan/detail?id=${item.host?.id}&role=${item.host?.role}`}>
                <PersonIcon className=" text-3xl mr-2 mb-2 text-green-900"/>
                <span className="text-lg font-bold text-green-900">{item.host?.email}</span>
                <InfoIcon className="text-lg ml-1 mb-1 text-gray-600"/>
              </NavLink>
              <h1>Thời gian tạo yêu cầu: {moment(item.hotel?.createdAt).format("DD-MM-YYYY  HH:mm:ss")}</h1>
            </div>
            <div className="flex flex-col items-end">
              <button className="border-spacing-0 px-3 py-1 bg-cyan-400 w-24 rounded-md" onClick={() => handleApprove(item.hotel?.id)}>Phê duyệt</button>
              <button className="border px-3 py-1 bg-red-400 w-24 rounded-md" onClick={() => handleDecline(item.hotel?.id)}>Từ chối</button>
            </div>
          </div>
        ))  
      ):(
        <h1 className=' my-10 text-lg text-gray-500 text-center'>Loading...</h1>
        )
      }
    </div>
  );
};

export default ApproveHotels;
