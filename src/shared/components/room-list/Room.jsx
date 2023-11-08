import React from 'react'
import styles from './RoomList.module.scss'
import { Card } from '@mui/material'
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import DoneIcon from '@mui/icons-material/Done';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import PersonIcon from '@mui/icons-material/Person';
;
const Room = ({ room }) => {

  return (
    <div className={styles['room']}>
      <div className={styles['room-title']}>
        {room?.roomName}
      </div>
      <div className='grid grid-cols-10 gap-6'>
        <div className='col-span-2'>
          <div>
            {/* <img src={room?.roomImage} /> */}
            <Card sx={{ maxWidth: 345 }}>
              <CardMedia
                sx={{ height: 140 }}
                image={room?.roomImage}
                title="green iguana"
              />
              <CardContent>
                <div className='text-xs text-cyan-400 text-center mb-1'>Xem ảnh và chi tiết</div>
                {Array.from({ length: 3 }).map((_, index) => (
                  <div key={index} className='text-xs mb-1'>
                    <DoneIcon className='mr-1' /> {room?.amenities[index]}
                  </div>))}
                <div className='flex items-center text-xs mb-1'>
                  <AddCircleIcon className='mr-1' /> <span className='text-xs text-cyan-400'> Xem thêm tiện ích</span>
                </div>
              </CardContent>

            </Card>
          </div>
        </div>
        <div className={`col-span-8 bg-white`}>
          <div className='grid grid-cols-8 gap-0  h-full'>
            <div className='col-span-3 p-2 border-gray-200 border-solid border-r-2 h-full'>
              <div className='font-bold mb-5'>Giá này đã gồm</div>
              {Array.from({ length: 4 }).map((_, index) => (
                <div key={index} className='text-sm mb-2'>
                  <DoneIcon className='text-cyan-400 mr-1' /> {room?.services[index]}
                </div>))}
            </div>
            <div className='col-span-1 p-2 border-gray-200 border-solid border-r-2 h-full'>
              <div className='font-bold mb-5'>Sức chứa</div>
              <div className='flex items-end'>
                {Array.from({ length: room?.adult || 0 }).map((_, index) => (
                  <PersonIcon key={index} className='mr-1 text-2xl text-gray-400' />
                ))}
                {Array.from({ length: room?.children || 0 }).map((_, index) => (
                  <PersonIcon key={index} className='mr-1 text-lg text-gray-400' />
                ))}
              </div>
            </div>
            <div className='col-span-2 p-2 border-gray-200 border-solid border-r-2 h-full'>
              <div className='font-bold mb-5'>Giá phòng ngày hôm nay</div>
              {/* <div className='flex items-end'> */}
              <div className='text-sm text-red-500 line-through'>
                {room?.price.toLocaleString('it-IT', { style: 'currency', currency: 'VND' })}
                {/* {room?.discountPrice.toLocaleString('it-IT', { style: 'currency', currency: 'VND' })} */}
              </div>
              <div className='text-lg font-bold'>
                {room?.discountPrice.toLocaleString('it-IT', { style: 'currency', currency: 'VND' })}
                {/* {room?.price.toLocaleString('it-IT', { style: 'currency', currency: 'VND' })} */}
              </div>
              {/* </div> */}
            </div>
            <div className='col-span-2 p-2 h-full'>
              <div className='font-bold mb-5 flex w-full justify-between'>Số lượng phòng <span>
                <select name="" id="" className='border-2 border-solid border-gray-500 font-semibold rounded-md hover:border-gray-500 hover:outline-none'>
                  <option value={0}></option>
                  {Array.from({ length: room?.quatity || 0 }).map((_, index) => (
                    <option key={index}>{index + 1}</option>
                  ))}
                </select>
              </span>
              </div>
              <div>
                <Button variant='contained' style={{ backgroundColor: "#3182D3" }} className='text-black font-bold'>
                  Tôi sẽ đặt
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
Room.defaultProps = {
  room: {
    id: null,
    roomName: '',
    price: 0,
    discountPrice: 0,
    roomImage: "",
    quatity: null,
    adult: null,
    children: null,
    services: [
      ""
    ],
    amenities: [
      ""
    ]
  }
}
export default Room
