import React, { useEffect } from 'react'
import styles from './index.module.scss'
import ApartmentIcon from '@mui/icons-material/Apartment';
import ContactBlock from '../../../components/booking/booking2/contact-block/ContactBlock'
import ClientInfoBlock from '../../../components/booking/booking2/client-info-block/ClientInfoBlock'
import ReservationBox from '../../../components/booking/booking1/reservation-box/ReservationBox'
import ReservationInfoBlock from '../../../components/booking/booking2/reservation-info-block/ReservationInfoBlock';
import { Button } from '@mui/material';
import { useSelector, useDispatch } from 'react-redux';
import BookingAction from '../../../../redux/booking/action';
import ShowToastify from '../../../../utils/ShowToastify';
import useReloadAlert from '../../../../hooks/use-reload-alert';
import { useNavigate } from 'react-router';

const BookingContainer3 = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const reservation = JSON.parse(localStorage.getItem('reservation'));
    const cart = JSON.parse(localStorage.getItem('cart'));
    console.log('AAAreservation', reservation);
    console.log('cart', cart);
    const data = {}
    data.userId = JSON.parse(localStorage.getItem('id'));
    data.reservationId = JSON.parse(localStorage.getItem('reservationCode'));

    const searchParams = new URLSearchParams(window.location.search);
    const vnp_TransactionStatus = searchParams.get('vnp_TransactionStatus');
    const vnp_ResponseCode = searchParams.get('vnp_ResponseCode');
    data.price = searchParams.get('vnp_Amount');
    data.orderId = searchParams.get('vnp_BankTranNo');
    data.transDate = searchParams.get('vnp_PayDate');

    console.log('Data:', data);
    
    useEffect(() => {
        if (vnp_TransactionStatus === '00' && vnp_ResponseCode === '00') {
            ShowToastify.showSuccessToast("Thanh toán thành công!");
            dispatch({
                type: BookingAction.BOOKING_START,
                reservation: reservation,
                onSuccess: () => {
                    ShowToastify.showSuccessToast("Đặt phòng thành công!")
                    // window.location.href = ('/book/invoice');
                    navigate('/book/invoice')
                },
                onError: () => {
                    ShowToastify.showErrorToast("Xảy ra lỗi, xin hãy thử lại")
                }
            })

            dispatch({
                type: BookingAction.SAVE_INVOICE,
                data: data,
                onSuccess: () => {
                    console.log('Lưu hóa đơn thành công');
                },
                onError: () => {
                    console.log('lỗi lưu hóa đơn')
                }
            })

        } else {
            ShowToastify.showErrorToast("Thanh toán không thành công!");
            window.location.href = ('/');
        }
    }, []);

    useReloadAlert();
    return (
        <div className='w-full px-20 sm:px-3 lg:px-60'>
            Thanh toán
        </div>
    )
}

export default BookingContainer3
