import { Col, Row } from 'antd';
import styles from './HistoryContainer.module.scss';
import * as React from 'react';
import PlaceIcon from '@mui/icons-material/Place';
import moment from 'moment';

const info = [
  {
    id: '1',
    name_hotel: 'Monalisa Luxury Hotel',
    img_path_hotel: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/480056968.jpg?k=3c175fc7e631a33bf4909cd2343e8d2a27786966d5c9c77b5fb91e576f81d1b0&o=&hp=1',
    date_start: '23-12-2023',
    date_end: '24-12-2023',
    address: '27 đường An Thượng 34, phường Mỹ An, quận Ngũ Hành Sơn, Đà Nẵng, Việt Nam',
    state: 'Đã xác nhận',
    amount: '1000000',
    countDate:'1',
    countRoom:'1',

  },
  {
    id: '1',
    name_hotel: 'Monalisa Luxury Hotel',
    img_path_hotel: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/480056968.jpg?k=3c175fc7e631a33bf4909cd2343e8d2a27786966d5c9c77b5fb91e576f81d1b0&o=&hp=1',
    date_start: '23-12-2023',
    date_end: '24-12-2023',
    address: '27 đường An Thượng 34, phường Mỹ An, quận Ngũ Hành Sơn, Đà Nẵng, Việt Nam',
    amount: '1000000',
    countDate:'1',
    countRoom:'1',

  },
  {
    id: '1',
    name_hotel: 'Monalisa Luxury Hotel',
    img_path_hotel: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/480056968.jpg?k=3c175fc7e631a33bf4909cd2343e8d2a27786966d5c9c77b5fb91e576f81d1b0&o=&hp=1',
    date_start: '23-12-2023',
    date_end: '24-12-2023',
    address: '27 đường An Thượng 34, phường Mỹ An, quận Ngũ Hành Sơn, Đà Nẵng, Việt Nam',
    state: 'Đã xác nhận',
    amount: '1000000',
    countDate:'1',
    countRoom:'1',

  },
];

const SettingsContainer = () => {
  return (
    <>
      <div className={`${styles['content']} ml-10 border`}>
        <h1 className="text-3xl font-bold my-2">Lịch sử đặt phòng</h1>
        <h3 className="mb-3 text-gray-600">
          Lịch sử tất cả các đơn đặt phòng của bạn trên nền tảng của chúng tôi
        </h3>
        {info.map((item, infoIndex) => (
          <div key={infoIndex} className={`flex my-6 text-base`}>
            <div className={`${styles['left']} border px-7 py-4 bg-white`}>
              <div className='mb-3 '>
                <span>Mã đặt chỗ: </span>
                <span className='font-bold ml-5'>{item.id}</span>
              </div>
              <img
                src={item.img_path_hotel}
                alt=""
                className={`${styles.image}`}
              />
              <div className='mt-3'>
                <PlaceIcon className='text-sky-600 mb-1'/>
                <span>{item.address}</span>
              </div>
            </div>
            <div className={`${styles['right']} border px-7 py-4 bg-white`}>
              <div className='text-lg font-bold mb-2 text-sky-800'>{item.name_hotel}</div>
              <div >
                <h2 className='text-gray-700'>Nhận phòng</h2>
                <h1 className='font-bold'>{moment(item.date_start, 'DD-MM-YYYY').format('DD [tháng] MM [năm] YYYY')}</h1>
                <h2>14:00 - 00:00</h2>
              </div>
              <div className='my-6'>
                <h2 className='text-gray-700'>Trả phòng</h2>
                <h1 className='font-bold'>{moment(item.date_end, 'DD-MM-YYYY').format('DD [tháng] MM [năm] YYYY')}</h1>
                <h2>00:00 - 12:00</h2>
              </div>
              <div className='border mb-4'></div>
              <div className='mt-2 mb-2'>Giá</div>
              <div className='font-bold mb-2'>
                <span>{item.countDate}</span>
                <span className='ml-1'>đêm,</span>
                <span className='ml-1'>{item.countRoom}</span>
                <span className='ml-1'>phòng</span>
              </div>
              <div className='font-bold text-2xl'>
                <span className='text-green-600'>{item.amount}</span>
                <span className='ml-1'>VND</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default SettingsContainer;
