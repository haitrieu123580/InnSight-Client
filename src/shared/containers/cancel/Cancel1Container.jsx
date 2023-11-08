import styles from './Cancel1Container.module.scss';
import React, { useState } from 'react';
import { Col, Row } from 'antd';
import { LeftOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import SelectMenu from '../../components/cancel/SelectMenu';
import { Box } from '@mui/material';

const reasons = [
  {
    id: 1,
    content: 'aaaaaaaaaaaaa',
  },
  {
    id: 2,
    content: 'bbbbbbbbbbbbbbbb',
  },
];

const invoice = [
  {
    id: 1,
    name_hotel: 'Taian Hotel & Apartment',
    date_start: '15/12/2023',
    date_end: '16/12/2023',
    count_room: 1,
    amount: 1000000,
    cancel_charge: 0,
    will_pay: 0
  }
]
const Cancel1Container = () => {
  const [selectedReason, setSelectedReason] = useState(); // Use useState inside the functional component

  const handleSelectChange = (value) => {
    setSelectedReason(value);
  };

  const handleInputChange = (event) => {
    const value = event.target.value;
    setSelectedReason(value);
  };

  const handleContinue = () => {
    
  };

  return (
    <div className={styles['content']}>
      <Row>
        <Col flex="1 1 200px">
          <Link to="" className='flex text-green-600 font-semibold'>
            <LeftOutlined />
            <h2>Quay lại đặt phòng của tôi</h2>
          </Link>
          <h1 className='text-2xl font-bold pt-2 pb-2'>Lý do hủy</h1>
          <h3>Chúng tôi có thể giúp bạn tìm giải pháp thay thế nếu bạn cần thay đổi đặt phòng của mình.</h3>
          <div>
            <div className='flex mt-10 mb-2'>
              <h3 className='text-base'>Lý do </h3>
              <h3 className='text-red-600'> *</h3>
            </div>
            <SelectMenu onSelectChange={handleSelectChange} reasons={reasons}/>
          </div>
          <div>
            <div className='mt-4 mb-2'>
              <h3 className='text-base'>Khác (nếu có)</h3>
              <h3 className='text-gray-400'>Bạn có thể mô tả rõ lý do hủy phòng nếu không có trong nhóm các lý do trên </h3>
            </div>
            <input 
              className={`${styles.input}`}
              type="text"
              name="reason"
              id="reason"
              onChange={handleInputChange}
            />
          </div>
          <div className="flex gap-2 mt-6 text-lg">
            <button
              className="flex justify-center rounded bg-blue-900 border py-2 px-6 font-medium text-white hover:shadow-1 dark:border-strokedark"
              type="button"
              // onClick={''}
            >
              <Link to="/cancel/2">Tiếp tục</Link>
            </button>
            <button
              className="flex justify-center rounded bg-sky-100 border border-stroke py-2 px-6 font-medium text-black hover:shadow-1 dark:border-strokedark"
              type="button"
              // onClick={''}
            >
              Tôi muốn giữ đặt phòng này
            </button>
          </div>
        </Col>
        <Col flex="1 1 200px" style={{ marginLeft: '50px' }}>
        {invoice.map((item, index) => (
            <Box className='border mb-6'>
              <div className='flex m-3'>
                <img src="https://cdn.britannica.com/96/115096-050-5AFDAF5D/Bellagio-Hotel-Casino-Las-Vegas.jpg" alt="" className={`${styles.image}`}/>
                <div className='ml-3'>
                  <h1 className='text-2xl font-bold'>{item.name_hotel}</h1>
                  <span className='mt-2 text-lg'>
                  {item.date_start} - {item.date_end}
                  </span>
                  <h1 className='text-lg'>{item.count_room} phòng</h1>
                </div>
              </div>
              <Row className='m-4 text-xl border-t'>
                <Col flex={2}>
                  <h2 className='text-lg mb-4 mt-2'>Đặt phòng của bạn</h2>
                  <h2 className='text-lg mb-4'>Phí hủy</h2>
                  <h2 className='text-lg font-bold'>Số tiền bạn sẽ trả</h2>
                </Col>
                  <Col flex={3} className='text-right'>
                  <h2 className='text-lg mb-4 mt-2'>{item.amount} VND</h2>
                  <h2 className='text-lg mb-4'>{item.cancel_charge} VND</h2>
                  <h2 className='text-lg font-bold '>{item.will_pay} VND</h2>
                </Col>
              </Row>
            </Box>
          ))}
          <Box className='border p-3'>
            <h1 className='text-xl font-bold'>Chính sách hủy</h1>
            <h1 className='text-base mt-2'>Bạn có thể hủy miễn phí đến 1 ngày trước khi tới nhận phòng. Bạn sẽ phải trả toàn bộ tiền phòng nếu bạn hủy trong vòng 1 ngày trước khi tới nhận phòng. Nếu bạn vắng mặt, phí vắng mặt sẽ bằng với phí hủy.</h1>
          </Box>
        </Col>
      </Row>
    </div>
  );
}

export default Cancel1Container;
