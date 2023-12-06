import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import BookingAction from '../../../../redux/booking/action';
import ShowToastify from '../../../../utils/ShowToastify';
import useReloadAlert from '../../../../hooks/use-reload-alert';
import { useNavigate } from 'react-router';

const BookingContainer3 = () => {
    const { bookingReserved } = useSelector(state => state.Booking);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const reservation = JSON.parse(localStorage.getItem('reservation'));

    const searchParams = new URLSearchParams(window.location.search);
    const vnp_TransactionStatus = searchParams.get('vnp_TransactionStatus');
    const vnp_ResponseCode = searchParams.get('vnp_ResponseCode');
    reservation.orderId = searchParams.get('vnp_TxnRef');
    reservation.transDate = searchParams.get('vnp_PayDate');

    useEffect(() => {
        if (vnp_TransactionStatus === '00' && vnp_ResponseCode === '00') {
            dispatch({
                type: BookingAction.BOOKING_START,
                reservation: reservation,
                onSuccess: () => {
                    ShowToastify.showSuccessToast("Đặt phòng thành công!");
                    navigate('/book/invoice');
                },
                onError: () => {
                    ShowToastify.showErrorToast("Xảy ra lỗi, xin hãy thử lại");
                }
            })

        } else {
            ShowToastify.showSuccessToast("Thanh toán không thành công!");
            navigate('/');
        }
    }, []);
        
    useReloadAlert();

    return (
        <></>
    )
}

export default BookingContainer3
