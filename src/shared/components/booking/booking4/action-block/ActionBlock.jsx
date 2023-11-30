import styles from '../index.module.scss';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';

const ActionBlock = () => {
  const { bookingReserved } = useSelector(state => state.Booking);
  const isLogin = localStorage.getItem('isLogin')||false;

  return (
    <>
      <div className={`${styles['box']} text-base`}>
        <div className='font-bold text-xl'>
          Tất cả thông tin có đều chính xác?
        </div>
        <div className={`${styles['line']} mb-4 mt-2`}></div>
        <h2 className='text-sm'>Bạn luôn có thể xem hoặc thay đổi đặt phòng trực tuyến - không cần phải đăng ký.</h2>
        <NavLink to={`/cancel/1`}>
          <div className='my-4 flex justify-items-center'>
            <HighlightOffIcon className='text-2xl mr-2'/>
            <span className='font-bold text-sky-700'>Hủy đặt phòng</span>
          </div>
        </NavLink>
        <NavLink to={isLogin ? '/mysettings/history' : '/sign-in'}>
          <div className='my-4 flex justify-items-center'>
            <RemoveRedEyeIcon className='text-2xl mr-2'/>
            <span className='font-bold text-sky-700'>Xem đặt phòng</span>
          </div>
        </NavLink>
        <NavLink to={'/'}>
          <div className='my-4 flex justify-items-center'>
            <CalendarMonthIcon className='text-2xl mr-2'/>
            <span className='font-bold text-sky-700'>Đặt thêm phòng khác</span>
          </div>
        </NavLink>
      </div>
    </>
  )
}

export default ActionBlock;
