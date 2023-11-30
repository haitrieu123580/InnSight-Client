import React, { useEffect } from 'react'
import styles from './index.module.scss'
import ActionBlock from '../../../components/booking/booking4/action-block/ActionBlock';
import { useDispatch, useSelector } from 'react-redux';
import useReloadAlert from '../../../../hooks/use-reload-alert';
import moment from 'moment';
import DoneIcon from '@mui/icons-material/Done';
import EventAvailableIcon from '@mui/icons-material/EventAvailable';
import EventNoteIcon from '@mui/icons-material/EventNote';
import VpnKeyIcon from '@mui/icons-material/VpnKey';
import FmdGoodIcon from '@mui/icons-material/FmdGood';
import BookingAction from '../../../../redux/booking/action';
import ShowToastify from '../../../../utils/ShowToastify';

const BookingContainer4 = () => {
    const dispatch = useDispatch();
    const { bookingReserved } = useSelector(state => state.Booking);

    localStorage.removeItem('reservation');

    const reservationCode = JSON.parse(localStorage.getItem('reservationCode'));
    const data ={};
    data.requestData = reservationCode;
    useEffect(() => {
        dispatch({
            type: BookingAction.RESERVATION_DETAIL,
            requestData: data,
            onSuccess: () => {
            },
            onError: () => {
                ShowToastify.showErrorToast("Xảy ra lỗi, xin hãy thử lại")
            }
        });
    }, []);

    useReloadAlert();
    return (
        bookingReserved && bookingReserved.roomList ? (
        <div className='w-full px-20 sm:px-3 lg:px-60 py-5'>
            <div className='w-full mb-6'>
                <div className='text-sm text-green-600'>Đã xác nhận</div>
                <div className='text-xl font-bold mb-2'>Đặt phòng của bạn tại {bookingReserved.province} đã được xác nhận</div>
                <div>
                    <DoneIcon className='text-green-600 font-bold mb-1'/>
                    <span>Hãy kiểm tra hộp thư của bạn! Hóa đơn vừa được gửi.</span>
                </div>
                <div>
                    <DoneIcon className='text-green-600 font-bold mb-1'/>
                    <span>Bạn đã thanh toán thành công cho đơn đặt phòng. Hãy tận hưởng kì nghỉ nhé!</span>
                </div>
            </div>
            <div className='grid grid-cols-10 gap-7'>
                <div className='col-span-6'>
                    <div>
                        <h1 className='text-2xl text-sky-800 font-bold'>{bookingReserved.hotelName}</h1>
                        <h2 className='text-sm'>{bookingReserved.description}</h2>
                        <div className='grid grid-cols-10 pt-5'>
                            <div className='col-span-3 flex '>
                                <EventAvailableIcon/>
                                <div className='pl-2'>
                                    <h1>Nhận phòng</h1>
                                    <h1 className='font-bold py-1'>{moment(bookingReserved?.startDay, 'YYYY-MM-DD').format('DD [tháng] MM[,] YYYY')}</h1>
                                    <h1>từ {bookingReserved.checkInTime}</h1>
                                </div>
                            </div>
                            <div className='col-span-3 py-1 flex'>
                                <div className='border mr-4 mb-8'></div>
                                <div>
                                    <h1>Trả phòng</h1>
                                    <h1 className='font-bold'>{moment(bookingReserved?.endDay, 'YYYY-MM-DD').format('DD [tháng] MM[,] YYYY')}</h1>
                                    <h1>tới {bookingReserved.checkOutTime}</h1>
                                </div>
                            </div>
                            <div className='col-span-4'>
                            <img 
                                src={bookingReserved.imagePath} 
                                alt="" 
                                className={`${styles.image}`}/>
                            </div>
                        </div>
                        <div>
                            <EventNoteIcon />
                            <span className='text-lg font-bold pl-2' >Chi tiết đặt phòng</span>
                            {bookingReserved.roomList.map((item, index) => (
                                <div key={index} className='flex mt-3 mb-3'>
                                    <div className='border-2 my-3 ml-4 mr-3'></div>
                                    <div>
                                        <h1 className='font-semibold'>({item.count}x) {item.name}</h1>
                                        <h1>{item.adultCount} người lớn - {item.childrenCount} trẻ em  -  {item.nightCount} đêm</h1>
                                        <h1>Danh sách phòng: {item.roomName.map((name, i) => (
                                            <span key={i}>{name}, </span>
                                        ))}</h1>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className='mt-7'>
                            <VpnKeyIcon/>
                            <span className='text-lg font-bold pl-2'>Hướng dẫn nhận phòng</span>
                            <h1 className='pl-8 mt-1'>Chìa khóa ở quầy tiếp tân tại chỗ nghỉ.</h1>
                            <h1 className='pl-8 mt-1 italic'>24-hour front desk service</h1>
                        </div>
                        <div className='mt-7'>
                            <FmdGoodIcon/>
                            <span className='text-lg font-bold pl-2'>Địa chỉ</span>
                            <h1 className='pl-8 mt-1'>{bookingReserved.address}, {bookingReserved.province}</h1>
                        </div>
                    </div>
                    <div className='mt-5 font-bold text-base'>
                        <h1 className='text-xl text-sky-800  mb-4'>Chính sách hủy đặt phòng</h1>
                        <div>
                            <span>Miễn phí hủy đến </span>
                            <span className='text-green-600'>{moment(bookingReserved?.startDay, 'YYYY-MM-DD').subtract(2, 'days').format('DD [tháng] MM[,] YYYY')} 23:59 [+07]: </span>
                            <span> 0 VND </span>
                        </div>
                        <div>
                            <span>Từ </span>
                            <span >{moment(bookingReserved?.startDay, 'YYYY-MM-DD').subtract(1, 'days').format('DD [tháng] MM[,] YYYY')} 23:59 [+07]: </span>
                            <span className='text-red-500'>mức phí {bookingReserved.total *0.1} VND - Bạn sẽ trả cho hủy đặt phòng</span>
                        </div>
                    </div>
                </div>
                <div className='col-span-4'>
                    <div className={`${styles['box']} text-base mb-3`}>
                        <span className=''>MÃ ĐẶT CHỖ:</span> <span className='font-bold'>{bookingReserved.reservationCode}</span>
                    </div>
                    <div className='mb-3'>
                        <ActionBlock />
                    </div>
                </div>
            </div>
        </div>
        ):(
            <div>Null</div>
        )
    )
}

export default BookingContainer4
