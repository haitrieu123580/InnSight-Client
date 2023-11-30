import styles from '../index.module.scss'
import ApartmentIcon from '@mui/icons-material/Apartment';
import moment from 'moment';

const ReservationInfoBlock = (reservation, cart) => {
  console.log('cpnreservation', reservation)
  console.log('cpncart', cart)
  return (
    <div className={styles['box']}>
      <div className='font-bold text-xl'>
        Thông tin đặt phòng
      </div>
      <div className={`${styles['line']} mb-3`}></div>
      <div className='my-1 flex justify-items-center'>
        <ApartmentIcon className='text-sky-700 text-2xl mr-2'/>
        <span className='font-bold text-lg text-sky-900'>{cart?.hotel?.hotelName}</span>
      </div>
      <li className='my-1'>
        <span>{moment(reservation?.startDay, 'YYYY-MM-DD').format('DD [tháng] MM[,] YYYY')} - </span>
        <span>{moment(reservation?.endDay, 'YYYY-MM-DD').format('DD [tháng] MM[,] YYYY')}</span>
      </li>
      <li>
        <span>{moment(reservation?.endDay, 'YYYY-MM-DD').diff(moment(reservation?.startDay, 'YYYY-MM-DD'),'days') }</span>
        <span className='ml-1'>đêm</span>
      </li>
      {cart?.rooms?.map((room, idx) => (
        <li key={idx} className='my-1 font-semibold'>
          <span>{`(${room?.count}x) `}</span>
          <span>{room?.roomName}</span>
        </li>
      ))}
    </div>
  )
}

export default ReservationInfoBlock
