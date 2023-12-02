import React from 'react'
import ApartmentIcon from '@mui/icons-material/Apartment';
import styles from './index.module.scss'
import CheckIcon from '@mui/icons-material/Check';
import { useSelector } from 'react-redux';
import FmdGoodIcon from '@mui/icons-material/FmdGood';
import moment from 'moment';
const ReservationBlock = () => {
  const { cart, checkIn, checkOut } = useSelector(state => state.Booking);
  return (
    <div className={styles['box']}>
      <div className='font-bold text-2xl px-10 pt-5 pb-2'>
        <span><ApartmentIcon className='text-blue-800 ' /></span>{cart?.hotel?.hotelName || "Hotel"}
      </div>
      <div className='text-sm px-10 pb-5'>
        <span><FmdGoodIcon className='text-blue-700 mb-1'/></span><span>{cart?.hotel?.address || "Dia chi"}</span>
      </div>
      <div className='bg-blue-100 w-full py-5  text-base'>
        <div className='flex gap-7 px-10'>
          <div className='text-gray-500 '>Ngày nhận phòng</div>
          <div className='font-bold'>
            <div >
              {`${moment(checkIn, 'YYYY-MM-DD').format('DD [tháng] MM[,] YYYY')}` || "Today"}
            </div>
            <div >
              {`Từ ${cart?.hotel?.checkIn}`}
            </div>
          </div>
        </div>
        <div className='flex gap-11 px-10 mt-2'>
          <div className='text-gray-500 '>Ngày trả phòng</div>
          <div className='font-bold'>
            <div >
              {`${moment(checkOut, 'YYYY-MM-DD').format('DD [tháng] MM[,] YYYY')}` || "Today"}
            </div>
            <div >
              {`Trước ${cart?.hotel?.checkOut}`}
            </div>
          </div>
        </div>
      </div>
      <div className='px-10 my-5'>
        {cart?.rooms?.map((room, idx) => (
          <div key={idx}>
            <div className='font-bold text-xl'><span>({`${room?.count}x`}) </span>{room?.roomName}</div>
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
