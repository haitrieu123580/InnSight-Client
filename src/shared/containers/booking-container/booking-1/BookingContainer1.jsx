import styles from './index.module.scss'
import IcChervonRightGreen from '../../../components/icons/booking/IcChervonRightGreen'
import { Button } from '@mui/material'
import ReservationBlock from '../../../components/booking/booking1/reservation-block/ReservationBlock'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ReservationBox from '../../../components/booking/booking1/reservation-box/ReservationBox'
const BookingContainer1 = () => {
    return (
        <div className='w-full px-20 sm:px-3 lg:px-60'>
            <div className='text-3xl w-full my-14'>
                Đặt phòng khách sạn
                <div className='text-sm text-gray-500 mt-2'>Hãy chắc chắn rằng tất cả thông tin trên trang này là chính xác trước khi tiến hành thanh toán.</div>
            </div>
            <div className='grid grid-cols-10 gap-7'>
                <div className='col-span-6'>
                    <div className={`${styles['box-wrapper']}`}>
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
                    </div>
                    <div className={`${styles['box-wrapper']}`}>
                        <div className='font-bold text-xl mb-3'>
                            Chi tiết liên hệ (cho Vé điện tử/Phiếu xác nhận)
                        </div>
                        <div className={styles['box']}>
                            <div className={styles['box-block']}>
                                <div className='font-bold text-base'>Họ và tên</div>
                                <input className='w-full'></input>
                                <div className='text-sm text-gray-400'>*Nhập tên như trên CCCD/hộ chiếu (không dấu)</div>
                            </div>
                            <div className={`${styles['box-block']} flex flex-row justify-between`}>
                                <div className='w-5/12'>
                                    <div className='font-bold text-base'>
                                        Số điện thoại
                                    </div>
                                    <div className='flex justify-between'>
                                        <input className='w-1/5' placeholder='+84' disabled={true}></input>
                                        <input className='w-3/4'></input>
                                    </div>
                                </div>
                                <div className='w-5/12'>
                                    <div className='font-bold text-base'>
                                        Email
                                        <input className='w-full' type='email'></input>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={`${styles['box-wrapper']}`}>
                        <div className={`${styles['box-block']}`}>
                            <div className='font-bold text-xl mb-3'>
                                Tên khách
                            </div>
                            <div className={styles['box']}>
                                <div className={styles['box-block']}>
                                    <div className='font-bold text-base'>
                                        Họ và tên khách
                                        <span className='text-sm text-gray-400 font-normal'>
                                            {'(Không dấu)'}
                                        </span>
                                    </div>
                                    <input className='w-full'></input>
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
                                <input className='w-full h-16'></input>
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
                        >Tiếp tục</Button>
                    </div>

                </div>
                <div className='col-span-4'>
                    <ReservationBlock />
                </div>
            </div>

        </div>
    )
}

export default BookingContainer1
