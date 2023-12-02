import styles from './index.module.scss'
import IcChervonRightGreen from '../../../components/icons/booking/IcChervonRightGreen'
import { Button } from '@mui/material'
import ReservationBlock from '../../../components/booking/booking1/reservation-block/ReservationBlock'
import ReservationBox from '../../../components/booking/booking1/reservation-box/ReservationBox'
import { useNavigate } from 'react-router';
import { useSelector, useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import Constants from '../../../../utils/Contants';
import { useEffect, useState } from 'react';
import BookingAction from '../../../../redux/booking/action';
import ShowToastify from '../../../../utils/ShowToastify';
import { saveReservation } from '../../../../redux/booking/slice';
import useReloadAlert from '../../../../hooks/use-reload-alert';
const BookingContainer1 = () => {
    const email = JSON.parse(localStorage.getItem('email'));
    const isLogin = JSON.parse(localStorage.getItem('isLogin'));
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { cart, checkIn, checkOut } = useSelector(state => state.Booking);
    const { handleSubmit, register, formState: { errors } } = useForm({
        criteriaMode: "all"
    });
    useReloadAlert();
    const onSubmit = (data) => {
        const total = cart.rooms.reduce((acc, room) => (
            acc + (room?.price * parseInt(room?.count || 0, 10))
        ), 0);
        const totalWithTax = total + total * Constants.tax / 100;
        const reservation = {
            ...data,
            hotelId: cart?.hotel?.id,
            roomTypeReservedList: cart?.rooms.map(item => ({
                id: item.id,
                count: parseInt(item.count),
                price: item.price
            })),
            totalPrice: total,
            tax: total * Constants.tax / 100,
            vat: parseFloat(totalWithTax.toFixed(3)),
            startDay: checkIn,
            endDay: checkOut
        }
        dispatch(saveReservation(
            {
                reservation: reservation,
                onSuccess: () => {
                    ShowToastify.showSuccessToast('Đã lưu thông tin')
                    navigate("/book/check");
                },
                onError: () => {

                }
            }
        ))

        dispatch({
            type: BookingAction.PAYMENT,
            reservation: reservation,
            onSuccess: () => {
            },
            onError: () => {
            }
            });
    }
    useEffect(() => {
    }, [cart])
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className='w-full px-20 sm:px-3 lg:px-60'>
                <div className='text-3xl w-full my-14'>
                    Đặt phòng khách sạn
                    <div className='text-sm text-gray-500 mt-2'>Hãy chắc chắn rằng tất cả thông tin trên trang này là chính xác trước khi tiến hành thanh toán.</div>
                </div>
                <div className='grid grid-cols-10 gap-7'>
                    <div className='col-span-6'>
                        {/* <div className={`${styles['box-wrapper']}`}>
                            <div className={`${styles['box']} flex items-center`}>
                                <div className="w-1/12">
                                    <AccountCircleIcon className='w-full h-full' />
                                </div>
                                <div className='w-11/12'>
                                    <div className='text-xl font-bold'>
                                        Bạn đã được đăng nhập
                                    </div>
                                    <div className='text-base'>
                                        Tên email ....
                                    </div>
                                </div>
                            </div>
                        </div> */}
                        <div className={`${styles['box-wrapper']}`}>
                            <div className='font-bold text-xl mb-3'>
                                Chi tiết liên hệ (cho Vé điện tử/Phiếu xác nhận)
                            </div>
                            <div className={styles['box']}>
                                <div className={styles['box-block']}>
                                    <div className='font-bold text-base'>Họ và tên</div>
                                    <input
                                        className='w-full border border-solid'
                                        type="text"
                                        {...register('name', {
                                            required: 'Vui lòng nhập họ và tên',
                                        })}
                                    />
                                    {errors.name && <p className="error" style={{ color: "red" }}>{errors.name.message}</p>}
                                    <div className='text-sm text-gray-400'>*Nhập tên như trên CCCD/hộ chiếu (không dấu)</div>
                                </div>
                                <div className={`${styles['box-block']} flex flex-row justify-between`}>
                                    <div className='w-5/12'>
                                        <div className='font-bold text-base'>
                                            Số điện thoại
                                        </div>
                                        <div className='flex justify-between'>
                                            <input className='w-1/5' placeholder='+84' disabled={true}></input>
                                            <input
                                                className='w-3/4 border border-solid'
                                                type="text"
                                                {...register('phoneNumber', {
                                                    required: 'Vui lòng nhập số điện thoại',
                                                })}
                                            />
                                            {errors.phoneNumber && <p className="error" style={{ color: "red" }}>{errors.phoneNumber.message}</p>}
                                        </div>
                                    </div>
                                    <div className='w-5/12'>
                                        <div className='font-bold text-base'>
                                            Email
                                            <input
                                                className='w-full border border-solid'
                                                type="email"
                                                defaultValue={isLogin ? email : ''}
                                                readOnly={isLogin}
                                                {...register('email', {
                                                    required: 'Vui lòng nhập email',
                                                })}
                                            />
                                            {errors.email && <p className="error" style={{ color: "red" }}>{errors.email.message}</p>}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={`${styles['box-wrapper']}`}>
                            <div className={`${styles['box-block']}`}>
                                <div className='font-bold text-xl mb-3'>
                                    Mách nhỏ
                                </div>
                                <div className={styles['box']}>
                                    <div className='flex flex-row mb-5'>
                                        <IcChervonRightGreen />
                                        <span className='ml-1'>Linh hoạt: Bạn có thể hủy miễn phí trước ngày 11 tháng 9 năm 2023, vậy nên hãy chốt mức giá tốt hôm nay.</span>
                                    </div>
                                    <div className='flex flex-row'>
                                        <IcChervonRightGreen />
                                        <span className='ml-1'>Hôm nay không cần trả tiền. Bạn sẽ thanh toán trong lúc nghỉ.</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className={`${styles['box-wrapper']}`}>
                            <div className={`${styles['box-block']}`}>
                                <div className='font-bold text-xl mb-3'>
                                    Các yêu cầu đặc biệt
                                </div>
                                <div className={styles['box']}>
                                    <div>
                                        Các yêu cầu đặc biệt không đảm bảo sẽ được đáp ứng – tuy nhiên, chỗ nghỉ sẽ cố gắng hết sức để thực hiện. Bạn luôn có thể gửi yêu cầu đặc biệt sau khi hoàn tất đặt phòng của mình!
                                    </div>
                                    <div className='font-bold text-base my-6'>
                                        Vui lòng ghi yêu cầu của bạn tại đây.
                                        <span className='text-sm text-gray-400 font-normal'>
                                            {'(Không bắt buộc)'}
                                        </span>
                                    </div>
                                    <input
                                        className='w-full h-16'
                                        type="text"
                                        {...register('note', {
                                        })}
                                    />
                                    {errors.note && <p className="error" style={{ color: "red" }}>{errors.note.message}</p>}
                                </div>
                            </div>
                        </div>
                        <div className={`${styles['box-wrapper']}`}>
                            <div className={`${styles['box-block']}`}>
                                <ReservationBox />
                            </div>
                        </div>
                        <div className='flex justify-between justify-items-center mb-5'>
                            <div className='w-7/12'>
                                Khi nhấn vào nút này bạn công nhận mình đã đọc và đồng ý với các <span className='text-blue-500'>Điều khoản & Điều kiện</span> và <span className='text-blue-500'>Chính sách quyền riêng tư</span> của InnSight
                            </div>
                            <Button className='w-fit h-fit bg-orange-600 text-white font-semibold text-xl'
                                type="submit"
                            >Tiếp tục</Button>
                        </div>

                    </div>
                    <div className='col-span-4'>
                        <ReservationBlock />
                    </div>
                </div>

            </div>
        </form>

    )
}

export default BookingContainer1
