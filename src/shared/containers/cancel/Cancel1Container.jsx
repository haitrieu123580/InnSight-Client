import styles from './Cancel1Container.module.scss';
import React, { useState } from 'react';
import { Col, Row } from 'antd';
import { LeftOutlined } from '@ant-design/icons';
import { Link, useNavigate } from 'react-router-dom';
import { Box } from '@mui/material';
import IcBed from '../../components/icons/cancelbooking-icons/IcBed';
import { useDispatch, useSelector } from 'react-redux';
import moment from 'moment';
import BookingAction from '../../../redux/booking/action';
import ShowToastify from '../../../utils/ShowToastify';

const Cancel1Container = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { bookingReserved } = useSelector(state => state.Booking);
  const handleAcceptCancel = () => {
    dispatch({
      type: BookingAction.RESERVATION_CANCEL,
      reservationCode: bookingReserved.reservationCode,
      onSuccess: () => {
        ShowToastify.showSuccessToast("Bạn đã hủy phòng thành công")
        navigate('/cancel/2');
      },
      onError: () => {
        ShowToastify.showErrorToast("Xảy ra lỗi, xin hãy thử lại")
      }
    });
  };

  let cancel_charge = 0;
  const today = new Date();
  const bookingStartDate = new Date(bookingReserved?.startDay);
  if (Math.floor((bookingStartDate - today) / (24 * 60 * 60 * 1000)) >= 1) {
    cancel_charge = 0;
  } else {
    cancel_charge = bookingReserved?.total *0.1;
  }
  return (
    bookingReserved && bookingReserved.roomList ? (
      <div className={styles['content']}>
        <Row>
          <Col flex="1 1 500px">
            <h1 className='text-2xl font-bold pt-2 pb-2'>Xác nhận hủy</h1>
            <h3 className='text-base'>Bạn sắp hủy toàn bộ đặt phòng của mình. Vui lòng xem lại thông tin bên dưới trước khi hủy.</h3>
            <div className='mt-6 flex '>
              <IcBed/>
              <div>
              {bookingReserved.roomList.map((item, index) => (
                  <div className='ml-2 mb-3 text-base'>
                    <h3 className='font-bold'>({item.count}x) {item.name}</h3>
                    <h3>{item.adultCount} người lớn - {item.childrenCount} trẻ em  -  {item.nightCount} đêm</h3>
                  </div>
                ))}
                {cancel_charge ? (
                  <h2 className='mb-3 ml-2 text-red-600 font-semibold text-base'>Hủy mất phí</h2>
                ):(
                  <h2 className='mb-3 ml-2 text-green-600 font-semibold text-base'>Hủy miễn phí</h2>
                )
                }
              </div>
            </div>
              <div className='border-t border-b pt-5'>
                <h1 className='text-2xl font-bold mb-4'>Chi tiết giá</h1>
                <Row className='ml-10 text-lg mb-3'>
                  <Col flex={2} className='text-lg mb-3'>
                    <h3 className=' mb-3'>Đặt phòng của bạn</h3>
                    <h3 className=' mb-3'>Phí hủy</h3>
                    <h3 className='font-bold mb-3'>Số tiền bạn sẽ trả</h3>
                  </Col>
                  <Col flex={3} className='text-right text-lg mb-3 mr-14'>
                    <h3 className=' mb-3'>{bookingReserved.total} VND</h3>
                    <h3 className=' mb-3'>10% * {bookingReserved.total}</h3>
                    <h3 className='font-bold mb-3'>{cancel_charge} VND</h3>
                  </Col>
                </Row>
              </div>
            {cancel_charge ? (
                  <h2 className='mt-3 mb-3 ml-10 text-red-600 font-semibold text-base'>Tiền hoàn lại là {bookingReserved.total - cancel_charge} VND</h2>
                ):(
                  <h2 className='mt-3 mb-3 ml-10 text-green-600 font-semibold text-base'>Số tiền {bookingReserved.total - cancel_charge} VND sẽ được hoàn vào tài khoản của bạn.</h2>
                )
                }
            <div className="flex gap-2 mt-6 text-lg">
              <button
                className="flex justify-center rounded bg-red-600 border py-2 px-6 font-medium text-white hover:shadow-1 dark:border-strokedark"
                type="button"
                onClick={handleAcceptCancel}
              >
                  <Link to={'/cancel/4'}> Xác nhận hủy</Link>
              </button>
              <Link to={'/book/invoice'}>
                <button
                  className="flex justify-center rounded bg-sky-100 border border-stroke py-2 px-6 font-medium text-black hover:shadow-1 dark:border-strokedark"
                  type="button"
                >
                  Tôi muốn giữ đặt phòng này
                </button>
              </Link>
            </div>
          </Col>
          <Col flex="1 1 200px" style={{ marginLeft: '50px' }}>
            <Box className='border mb-6'>
                <div className='flex m-3'>
                  <img src={bookingReserved.imagePath}  alt="" className={`${styles.image}`}/>
                  <div className='ml-3'>
                    <h1 className='text-xl font-bold'>{bookingReserved.hotelName}</h1>
                    <span className='mt-2 text-base'>
                    {moment(bookingReserved?.startDay, 'YYYY-MM-DD').format('DD [thg] MM[,] YYYY')} - {moment(bookingReserved?.endDay, 'YYYY-MM-DD').format('DD [thg] MM[,] YYYY')}
                    </span>
                    <h1 className='text-base'>{bookingReserved.roomList.length} phòng</h1>
                  </div>
                </div>
                <Row className='m-4 text-xl border-t'>
                  <Col flex={2}>
                    <h2 className='text-lg mb-4 mt-2'>Đặt phòng của bạn</h2>
                    <h2 className='text-lg mb-4'>Phí hủy</h2>
                    <h2 className='text-lg font-bold'>Số tiền bạn sẽ trả</h2>
                  </Col>
                    <Col flex={3} className='text-right'>
                    <h2 className='text-lg mb-4 mt-2'>{bookingReserved.total} VND</h2>
                    <h2 className='text-lg mb-4'>10% * {bookingReserved.total}</h2>
                    <h2 className='text-lg font-bold '>{cancel_charge} VND</h2>
                  </Col>
                </Row>
            </Box>
            <Box className='border p-3'>
              <h1 className='text-xl font-bold'>Chính sách hủy</h1>
              <h1 className='text-base mt-2'>Bạn có thể hủy miễn phí đến 2 ngày trước khi tới nhận phòng. Bạn sẽ phải trả 10% tiền phòng nếu bạn hủy trong vòng 1 ngày trước khi tới nhận phòng. Nếu bạn vắng mặt, phí vắng mặt sẽ bằng với phí hủy.</h1>
            </Box>
          </Col>
        </Row>
      </div>
    ):(
      <div>Null</div>
    )
  );
}

export default Cancel1Container;
