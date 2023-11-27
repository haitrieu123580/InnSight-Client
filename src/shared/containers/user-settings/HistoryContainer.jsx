import styles from './HistoryContainer.module.scss';
import * as React from 'react';
import PlaceIcon from '@mui/icons-material/Place';
import moment from 'moment';
import { useEffect } from 'react';
import SettingAction from '../../../redux/user-settings/action';
import { useDispatch, useSelector } from 'react-redux';
import ShowToastify from '../../../utils/ShowToastify';
import { NavLink, useNavigate } from 'react-router-dom';


const SettingsContainer = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {userHistoryReservations} = useSelector((state) => state.Setting) || {}

  const id = JSON.parse(localStorage.getItem('id'));
  const data = {}
  data.requestData = id;
  
  useEffect(() => {
    if (data) {
      dispatch({
        type: SettingAction.GET_HISTORY_RESERVATIONS,
        requestData: data,
          onSuccess: () => {
            console.log('reservationList, totalItems', userHistoryReservations.reservationList, userHistoryReservations.totalItems);
          },
          onError: () => {
              ShowToastify.showErrorToast("Xảy ra lỗi, xin thử lại sau")
          }
      });
    }
  }, []);

  const reservationList = userHistoryReservations.reservationList;
  const totalItems = userHistoryReservations.totalItems;

  const [totalRoomCount, setTotalRoomCount] = React.useState([]);

  useEffect(() => {
    const counts = [];
    if (reservationList) {
      reservationList.forEach(reservation => {
        let countSum = 0;
        if (reservation.roomList) {
          reservation.roomList.forEach(room => {
            if (room.count) {
              countSum += room.count;
            }
          });
        }
        counts.push(countSum);
      });
    }
    setTotalRoomCount(counts);
  }, [reservationList]);

  const handleViewReservationClick = (reservationCode) => {
    localStorage.setItem('reservationCode', JSON.stringify(reservationCode));
    console.log('reservationCode', reservationCode);
    window.location.href =  '/book/invoice/detail';
  };


  return (
    <>
      <div className={`${styles['content']} ml-10 border`}>
        <h1 className="text-3xl font-bold my-2">Lịch sử đặt phòng</h1>
        <h3 className="text-gray-600">
          Lịch sử tất cả các đơn đặt phòng của bạn trên nền tảng của chúng tôi
        </h3>
        {totalItems ? (
          <h1 className='font-bold text-right -mb-3 text-base'>Tổng các đặt phòng: {totalItems}</h1>
        ):(
          <span></span>
        )}
        {reservationList ? (
          reservationList.map((item, index) => (
          <NavLink key={index} to="#" onClick={() => handleViewReservationClick(item.reservationCode)} >
            <div key={index} className={`flex my-6 text-base`}>
                <div className={`${styles['left']} border px-7 py-4 bg-white`}>
                  <div className='mb-3 '>
                    <span>Mã đặt chỗ: </span>
                    <span className='font-bold ml-5'>{item.reservationCode}</span>
                  </div>
                  <img
                    src={item.imagePath}
                    alt=""
                    className={`${styles.image}`}
                  />
                  <div className='mt-3'>
                    <PlaceIcon className='text-sky-600 mb-1'/>
                    <span>{item.address}</span>
                  </div>
                </div>
                <div className={`${styles['right']} border px-7 py-4 bg-white`}>
                  <div className='text-lg font-bold mb-2 text-sky-800'>{item.name_hotel}</div>
                  <div >
                    <h2 className='text-gray-700'>Nhận phòng</h2>
                    <h1 className='font-bold'>{moment(item.startDay, 'YYYY-MM-DD').format('DD [tháng] MM [năm] YYYY')}</h1>
                    <h2>{item.checkInTime}</h2>
                  </div>
                  <div className='my-4'>
                    <h2 className='text-gray-700'>Trả phòng</h2>
                    <h1 className='font-bold'>{moment(item.endDay, 'YYYY-MM-DD').format('DD [tháng] MM [năm] YYYY')}</h1>
                    <h2>{item.checkOutTime}</h2>
                  </div>
                  <div className='text-sm mb-4'>
                    <span>Trạng thái:</span>
                    {item.status === 'CONFIRMED' ? (
                      <span className='text-green-600'> {item.status}</span>
                    ):(
                      <span className='text-red-600'> {item.status}</span>
                    )}
                  </div>
                  <div className='border mb-4'></div>
                  <div className='mt-2 mb-2'>Giá</div>
                  <div className='font-bold mb-2'>
                    <span>{moment(item.endDay, 'YYYY-MM-DD').diff(moment(item.startDay, 'YYYY-MM-DD'),'days') }</span>
                    <span className='ml-1'>đêm,</span>
                    <span className='ml-1'>{totalRoomCount[index]}</span>
                    <span className='ml-1'>phòng</span>
                  </div>
                  <div className='font-bold text-2xl'>
                    <span className='text-green-600'>{item.total}</span>
                    <span className='ml-1'>VND</span>
                  </div>
                </div>
              </div>
              
          </NavLink>
          ))
          ):(
            <h1 className=' my-10 text-lg text-gray-500 text-center'>Bạn chưa có đơn đặt nào</h1>
          )
        }
      </div>
    </>
  );
};

export default SettingsContainer;
