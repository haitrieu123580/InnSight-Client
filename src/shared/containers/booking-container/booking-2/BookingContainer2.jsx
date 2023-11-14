import React from 'react'
import styles from './index.module.scss'
import ApartmentIcon from '@mui/icons-material/Apartment';
import ContactBlock from '../../../components/booking/booking2/contact-block/ContactBlock'
import ClientInfoBlock from '../../../components/booking/booking2/client-info-block/ClientInfoBlock'
import ReservationBox from '../../../components/booking/booking1/reservation-box/ReservationBox'
import HotelPolicyBox from '../../../components/booking/booking2/hotel-policy/HotelPolicyBox';
import { Button } from '@mui/material';
const BookingContainer2 = () => {
    const props = {
        hotelName: "Muong Thanh Grand Da Nang Hotel",
        hotelImg: `https://s3-alpha-sig.figma.com/img/1cbb/8932/6e02294b8066d7cdba49dff8115ca949?Expires=1699833600&Signature=So5mY9cy8JpMrtkXkQiU5m6VKaHspGK9pdyLXu4pehoESvFPe9EY4TSs6Ih69LSa8ScUkfPTMwBQQzWqhktrT6IthVZkV6cPgbFKPlmw1Ltwbbw~s79tZTw3xeV~PxHIUeCeOAaM3wdL0guT-jzWfepNkfKICp0KvsZd4d96Uqw~95F4U-1PkiIrm-WrOCesdr-o8pFGlb2M0k1VWQB2~XunVwUrKq4EK92bZg1LfCVJ~2Ji70SP0lkcD3saRuDMjy80DrySf4Ol9hMx2eTwQV1VLtg2NaXuOycmmE6LO8P2QfesfUggnlbwaNCGk3~ls0hs16YaxK6AHq8EW1yQ8w__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4`,
        checkIn: 'today',
        checkOut: "today",
        checkInTime: "now",
        checkOutTime: "now",
        days: "1 đêm",
        roomList: [
            {
                roomName: 'A',
                people: "B",
                bedTye: 'C',
            },
            {
                roomName: 'AA',
                people: "BB",
                bedTye: 'CC',
            }
        ]
    }
    return (
        <div className='w-full px-20 sm:px-3 lg:px-60'>
            <div className='text-3xl w-full my-14 font-bold'>
                Bạn vui lòng kiểm tra lại đặt chỗ
                <div className='text-sm text-gray-500 mt-2 font-semibold'>
                    Vui lòng xem lại chi tiết đặt phòng của bạn trước khi tiếp tục đến bước thanh toán
                </div>
            </div>
            <div className='grid grid-cols-10 gap-7'>
                <div className='col-span-6'>
                    <div className={styles['box-wrapper']}>
                        <div className='w-full h-fit grid grid-cols-8 gap-2'>
                            <div className='col-span-2'>
                                <img src={props?.hotelImg} className='rounded'></img>
                            </div>
                            <div className='col-span-6'>
                                <div>
                                    <div className='text-black text-xl font-bold '>
                                        <span>
                                            <ApartmentIcon className='text-blue-900' />
                                        </span>
                                        {props?.hotelName}
                                    </div>
                                    <div className={`${styles['line']} my-3`}></div>
                                    <div className='flex justify-between'>
                                        <div className='w-fit flex flex-col text-center'>
                                            <div className='text-sm text-gray-400'>Ngày nhận phòng</div>
                                            <div className='font-semibold text-lg my-1'>{props?.checkIn}</div>
                                            <div>{props?.checkInTime}</div>
                                        </div>
                                        <div className='w-fit flex flex-col text-center'>
                                            <div className='text-sm text-gray-400'>Ngày nhận phòng</div>
                                            <div className='font-semibold text-lg my-1'>{props?.checkIn}</div>
                                            <div>{props?.checkInTime}</div>
                                        </div>
                                        <div className='w-fit flex flex-col text-center'>
                                            <div className='text-sm text-gray-400'>Ngày nhận phòng</div>
                                            <div className='font-semibold text-lg my-1'>{props?.checkIn}</div>
                                            <div>{props?.checkInTime}</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={`${styles['line']} my-3`}></div>
                        {props?.roomList?.map((room, index) => (
                            <div className='mb-3'>
                                <div className='font-bold mb-2'>
                                    {room?.roomName}
                                </div>
                                <div className='w-full flex justify-between gap-2 mb-1'>
                                    <span className='w-1/6 text-gray-400'>{`Khách/Phòng`}</span> <span className='w-5/6'>{room?.people}</span>
                                </div>
                                <div className='w-full flex justify-between gap-2 mb-1'>
                                    <span className='w-1/6 text-gray-400'>{`Kiểu giường`}</span> <span className='w-5/6'>{room?.bedTye}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className='my-3'>
                        <HotelPolicyBox />
                    </div>
                    <div className='my-3'>
                        <ReservationBox />
                    </div>
                    <div className='flex justify-between justify-items-center mb-5'>
                        <div className='w-7/12'>
                            Khi nhấn vào nút này bạn công nhận mình đã đọc và đồng ý với các <span className='text-blue-500'>Điều khoản & Điều kiện</span> và <span className='text-blue-500'>Chính sách quyền riêng tư</span> của InnSight
                        </div>
                        <Button className='w-fit h-fit bg-orange-600 text-white font-semibold text-base'
                        >Tiếp tục đến thanh toán</Button>
                    </div>
                </div>
                <div className='col-span-4'>
                    <div className='mb-3'>
                        <ContactBlock />
                    </div>
                    <div className='mb-3'>
                        <ClientInfoBlock />
                    </div>
                </div>
            </div>

        </div>
    )
}

export default BookingContainer2
