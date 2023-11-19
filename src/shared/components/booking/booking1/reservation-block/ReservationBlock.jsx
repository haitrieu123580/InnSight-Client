import React from 'react'
import ApartmentIcon from '@mui/icons-material/Apartment';
import styles from './index.module.scss'
import CheckIcon from '@mui/icons-material/Check';
import { useSelector } from 'react-redux';
const ReservationBlock = () => {
  const { cart, checkIn, checkOut } = useSelector(state => state.Booking);
  return (
    <div className={styles['box']}>
      <div className='font-bold text-2xl px-10'>
        <span><ApartmentIcon className='text-blue-800' /></span>{cart?.hotel?.hotelName || "Hotel"}
      </div>
      <div className='text-sm text-center px-10'>
        {cart?.hotel?.address || "Dia chi"}
      </div>
      <div className='bg-blue-100 w-full py-5  text-base'>
        <div className='flex justify-between px-10'>
          <div className='text-gray-500 '>Ngày nhận phòng</div>
          <div className='font-bold'>
            {`${checkIn} ${cart?.hotel?.checkIn}` || "Today"}
          </div>
        </div>
        <div className='flex justify-between px-10'>
          <div className='text-gray-500 '>Ngày trả phòng</div>
          <div className='font-bold'>
            {`${checkOut} ${cart?.hotel?.checkOut}` || "Today"}
          </div>
        </div>
      </div>
      <div className='px-10 my-5'>
        {cart?.rooms?.map((room, idx) => (
          <div key={idx}>
            <div className='font-bold text-xl'><span>{`${room?.count}x`}</span>{room?.roomName}</div>
            <div>
              <div className='flex justify-between text-base my-4'>
                <div className='text-gray-500'>Khách/phòng</div>
                <div>{`${room?.adult} Người lớn ${room?.children || 0} trẻ em`}</div>
              </div>
            </div>
          </div>

        ))}
      </div>
      <div className='px-10 my-5'>
        <div className='flex justify-between'>
          <div className='w-4/12 '>{cart?.hotel?.hotelImgPath}</div>
          <div className='w-7/12'>
            <div className='font-bold'><span><CheckIcon className='text-green-500' /></span>Miễn phí bữa sáng</div>
            <div className='font-bold'><span><CheckIcon className='text-green-500' /></span>  Wifi miễn phí  </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ReservationBlock
