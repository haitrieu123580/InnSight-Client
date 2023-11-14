import { Col, Row } from 'antd';
import styles from './HistoryContainer.module.scss';
import * as React from 'react';

const info = [
  {
    name_hotel:'abc Hotel',
    img_path_hotel:'',
    date_start: '2023-12-23',
    date_end: '2023-12-24',
    city:'Đà Nẵng',
    state: 'Đã xác nhận',
    amount: '1000000'
  },
  {
    name_hotel:'abc Hotel',
    img_path_hotel:'',
    date_start: '2023-12-23',
    date_end: '2023-12-24',
    city:'Đà Nẵng',
    state: 'Đã xác nhận',
    amount: '1000000'
  },
  {
    name_hotel:'Shark Hotel',
    img_path_hotel:'',
    date_start: '2023-12-23',
    date_end: '2023-12-24',
    city:'Huế',
    state: 'Đã Hủy',
    amount: '9888888'
  },
];

const cities = [
  {
    name:'Đà Nẵng',
  },
  {
    name:'Huế',
  },
];

const SettingsContainer = () => {
  

  return (
    <>
      <div className={`${styles['content']} ml-10 border`}>
        <h1 className="text-3xl font-bold my-3">Đặt chỗ & Chuyến đi</h1>
          {cities.map((city, cityIndex) => (
            <div>
              <img src="" alt="" />
              <h2 className="text-xl font-semibold my-2">{city.name}</h2>
              <ul>
                {info.map((item, infoIndex) => {
                  if (item.city === city.name) {
                    return (
                      <li key={infoIndex} className='flex border-b py-6'>
                        <img src="https://bstatic.com/xdata/images/hotel/300x300/502024660.jpg?k=1cc08102bdbc70a756994031472da90aedf4f01fa45c4d80161faa78eacaf662&o=" 
                          alt="" 
                          className={`${styles.image}`}
                        />
                        <div className='ml-5'>
                          <div className='flex mb-2'>
                            <h1 className='text-xl font-bold w-96'>{item.name_hotel}</h1>
                            <h1 className=' text-xl font-bold'>{item.amount} VND</h1>
                          </div>
                          <span className='text-base py-52'>{item.date_start} - {item.date_end}, {item.city}</span>
                          <h2 className='text-green-500 mt-3'>{item.state}</h2>
                        </div>
                      </li>
                    );
                  }
                  return null;
                })}
              </ul>
              </div>
          ))}
      </div>
    </>
  );
};

export default SettingsContainer;
