import React, { useEffect, useState } from 'react'
import styles from './RoomList.module.scss'
import { Card } from '@mui/material'
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import DoneIcon from '@mui/icons-material/Done';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import PersonIcon from '@mui/icons-material/Person';
import { useSelector, useDispatch } from 'react-redux';
// import BookingAction from '../../../redux/booking/action';
import { addRoomToCart } from '../../../redux/booking/slice'
import ShowToastify from '../../../utils/ShowToastify';
const Room = ({ room }) => {
  const { hotel } = useSelector(state => state.Home);
  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState(null);
  const [hotelId, setHotelId] = useState(null);
  const handleAddRoomToCart = () => {
    dispatch({
      type: addRoomToCart,
      payload: {
        hotel: hotel,
        room: room,
        count: quantity,
        onSuccess: () => {
          ShowToastify.showSuccessToast("Đã thêm!")
        }
      }
    })
  }
  const handleSelectQuantity = (number) => {
    setQuantity(number);
  }
  useEffect(() => {
    if (hotel?.id) {
      setHotelId(hotel?.id)
    }
  }, [hotel])
  return (
    <div className={styles['room']}>
      <div className={styles['room-title']}>
        {room?.roomName}
      </div>
      <div className='grid grid-cols-10 gap-6'>
        <div className='col-span-2'>
          <div>
            <Card sx={{ maxWidth: 345 }}>
              <CardMedia
                sx={{ height: 140 }}
                image={room?.roomImage || ""}
                title="hotel image"
              />
              <CardContent>
                <div className='text-xs text-cyan-400 text-center mb-1'>Xem ảnh và chi tiết</div>
                {Array?.from({ length: 3 })?.map((_, index) => (
                  <div key={index} className='text-xs mb-1'>
                  </div>))}
                <div className='flex items-center text-xs mb-1'>
                  <AddCircleIcon className='mr-1'/> <span className='text-xs text-cyan-400'> Xem thêm tiện ích</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
        <div className={`col-span-8 bg-white`}>
          <div className='grid grid-cols-8 gap-0  h-full'>
            <div className='col-span-3 p-2 border-gray-200 border-solid border-r-2 h-full'>
              <div className='font-bold mb-5'>Giá này đã gồm</div>
              {room?.roomAmenities?.slice(0, 5).map((_, index) => (
                <div key={index} className='text-sm mb-2'>
                  <DoneIcon className='text-cyan-400 mr-1' /> {room?.roomAmenities[index]}
                </div>
              ))}
            </div>
            <div className='col-span-1 p-2 border-gray-200 border-solid border-r-2 h-full'>
              <div className='font-bold mb-5'>Sức chứa</div>
              <div className='flex items-end flex-wrap'>
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
              <div className='text-sm text-red-500 line-through'>
              </div>
              <div className='text-lg font-bold'>
                {room?.price !== undefined ? room.price.toLocaleString('vi-VN') : 'N/A'}
              </div>
            </div>
            <div className='col-span-2 p-2 h-full'>
              <div className='font-bold mb-5 flex w-full justify-between'>Số lượng phòng <span>
                <select
                  onChange={(e) => handleSelectQuantity(e.target.value)}
                  className='border-2 border-solid border-gray-500 font-semibold rounded-md hover:border-gray-500 hover:outline-none'
                >
                  <option value={0}></option>
                  {Array.from({ length: room?.quantity || 0 }).map((_, index) => (
                    <option key={index} value={index + 1}>{index + 1}</option>
                  ))}
                </select>
              </span>
              </div>
              <div>
                <Button
                  variant='contained'
                  style={{ backgroundColor: "#3182D3" }}
                  className='text-black font-bold'
                  onClick={handleAddRoomToCart}
                >
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
    roomName: "",
    price: null,
    roomImage: null,
    quantity: null,
    adult: null,
    children: null,
    roomAmenities: [

    ]
  }
}
export default Room
