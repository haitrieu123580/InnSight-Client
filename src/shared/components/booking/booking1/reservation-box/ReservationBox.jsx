import React from 'react'
import styles from './index.module.scss'
import IcWarning from '../../../../components/icons/booking/IcWarning'

const ReservationBox = () => {
    return (
        <>
            <div className='font-bold text-xl mb-3'>
                Chi tiết giá
            </div>
            <div className={styles['box']}>
                <div className='flex justify-between'>
                    <div className=' font-bold text-xl'>Thành tiền</div>
                    <div className='font-bold text-xl text-red-800'>........VND</div>
                </div>
                <div className='text-blue-800 font-semibold flex'>
                    <span><IcWarning /></span>
                    Thuế và phí là các khoản được InnSight chuyển trả cho khách sạn. Mọi thắc mắc về thuế và hóa đơn, vui lòng tham khảo Điều khoản và Điều kiện của InnSight để được giải đáp
                </div>
                <div className='border border-solid border-gray-200 my-5'></div>
                <div className='text-base'>
                    <div className='flex justify-between justify-items-center'>
                        <div >
                            <span>{`(1x) `}</span>
                            Phòng Superior Giường Đôi
                        </div>
                        <div>
                            ......VND
                        </div>
                    </div>
                    <div className='flex justify-between justify-items-center'>
                        <div >
                            Thuế và phí
                        </div>
                        <div>
                            ......VND
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default ReservationBox
