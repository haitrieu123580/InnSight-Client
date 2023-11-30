import React, { useEffect, useState } from 'react'
import styles from './index.module.scss'
import IcWarning from '../../../../components/icons/booking/IcWarning'
import { useSelector } from 'react-redux';
import Constants from '../../../../../utils/Contants';

const ReservationBox = () => {
    const { cart } = useSelector(state => state.Booking);
    const [vat, setVat] = useState(null);
    useEffect(() => {
        if (cart?.rooms?.length) {
            const total = cart.rooms.reduce((acc, room) => (
                acc + (room?.price * parseInt(room?.count || 0, 10))
            ), 0);
            const totalWithTax = total + total * Constants.tax / 100;
            setVat(parseFloat(totalWithTax.toFixed(3)));
        }
    }, [cart]);

    return (
        <>
            <div className='font-bold text-xl mb-3'>
                Chi tiết giá
            </div>
            <div className={styles['box']}>
                <div className='flex justify-between'>
                    <div className=' font-bold text-xl'>Thành tiền</div>
                    <div className='font-bold text-xl text-red-800'>{vat ? `${vat.toLocaleString('vi-VN')}VND` : '0VND'}</div>
                </div>
                <div className='text-blue-800 font-semibold flex'>
                    <span><IcWarning /></span>
                    Thuế và phí là các khoản được InnSight chuyển trả cho khách sạn. Mọi thắc mắc về thuế và hóa đơn, vui lòng tham khảo Điều khoản và Điều kiện của InnSight để được giải đáp
                </div>
                <div className='border border-solid border-gray-200 my-5'></div>
                <div className='text-base'>
                    {cart?.rooms?.map((room, idx) => (
                        <div key={idx} className='flex justify-between justify-items-center pb-2'>
                            <div >
                                <span>{`(${room?.count}x) `}</span>
                                {room?.roomName}
                            </div>
                            <div>
                                {(room?.count && room?.price) ? (room.count * room.price).toLocaleString('vi-VN') + 'VND' : ''}
                            </div>
                        </div>
                    ))}

                    <div className='flex justify-between justify-items-center'>
                        <div >
                            Thuế và phí
                        </div>
                        <div>
                            {`${Constants.tax}%`}
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default ReservationBox
