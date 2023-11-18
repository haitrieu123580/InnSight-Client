import styles from '../index.module.scss'
import { useSelector } from 'react-redux';
const ContactBlock = () => {
  const { reservation, checkIn, checkOut, cart } = useSelector(state => state.Booking);

  return (
    <div className={styles['box']}>
      <div className='font-bold text-xl'>
        Chi tiết người liên lạc
      </div>
      <div className={`${styles['line']} mb-3`}></div>
      <div className='my-1'>
        <span>{`Họ và Tên: `}</span><span className='font-bold'>{reservation?.name}</span>
      </div>
      <div className='my-1'>
        <span>{`Số điện thoại: `}</span><span className='font-bold'>{reservation?.phoneNumber}</span>
      </div>
      <div className='my-1'>
        <span>{`Email: `}</span><span className='font-bold'>{reservation?.email}</span>
      </div>
      <div className='my-1'>
        <span>{`Yêu cầu đặc biệt: `}</span><span className='font-bold'>{reservation?.note}</span>
      </div>
    </div>
  )
}

export default ContactBlock
