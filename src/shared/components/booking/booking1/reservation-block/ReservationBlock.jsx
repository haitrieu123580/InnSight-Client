import React from 'react'
import ApartmentIcon from '@mui/icons-material/Apartment';
import styles from './index.module.scss'
import CheckIcon from '@mui/icons-material/Check';
const ReservationBlock = ({ props }) => {
  return (
    <div className={styles['box']}>
      <div className='font-bold text-2xl px-10'>
        <span><ApartmentIcon className='text-blue-800' /></span>{props?.hotelName || "Hotel"}
      </div>
      <div className='text-sm text-center px-10'>
        {props?.hotelLocation || "Đà Nẵng"}
      </div>
      <div className='bg-blue-100 w-full py-5  text-base'>
        <div className='flex justify-between px-10'>
          <div className='text-gray-500 '>Ngày nhận phòng</div>
          <div className='font-bold'>
            {props?.checkin || "Today"}
          </div>
        </div>
        <div className='flex justify-between px-10'>
          <div className='text-gray-500 '>Ngày trả phòng</div>
          <div className='font-bold'>
            {props?.checkout || "Today"}
          </div>
        </div>
      </div>
      <div className='px-10 my-5'>
        <div>
          <div className='font-bold text-xl'><span>{`(1x) `}</span>Phòng Superior giường đôi</div>
          <div>
            <div className='flex justify-between text-base my-4'>
              <div className='text-gray-500'>Khách/phòng</div>
              <div> 2 người lớn</div>
            </div>
            <div className='flex justify-between text-base my-4'>
              <div className='text-gray-500'>Kiểu giường</div>
              <div> 1 giường đôi</div>
            </div>
          </div>
        </div>
      </div>
      <div className='px-10 my-5'>
        <div className='flex justify-between'>
          <div className='w-4/12 '>{props?.hotelImgPath}</div>
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
