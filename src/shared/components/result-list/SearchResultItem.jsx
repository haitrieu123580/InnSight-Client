import React from 'react'
import styles from './SearchResultItem.module.scss'
import PlaceIcon from '@mui/icons-material/Place';
import CheckIcon from '@mui/icons-material/Check';
import { useLocation, useNavigate } from 'react-router';
import { useDispatch } from 'react-redux';
import HomeAction from '../../../redux/home/action';
import ShowToastify from '../../../utils/ShowToastify';

const SearchResultItem = ({ item }) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    
    const handleSelectItem = (data) => {
        data={
            hotelId: `${item?.id}`,
            checkInDay: searchParams.get('checkinDay'),
            checkOutDay: searchParams.get('checkoutDay')
        }
        console.log('data', data)
        dispatch({
            type: HomeAction.GET_HOTEL,
            data: data,
            onSuccess: () => {
                navigate(`/hotel/${item?.id}`);
            },
            onError: () => {
                ShowToastify.showErrorToast("Xảy ra lỗi, xin thử lại sau")
            }
        });
        }
    return (
        <div className='border-2 rounded-2xl border-gray-200 p-4 mb-4 h-full'>
            <div className='grid grid-cols-10 gap-4 h-full'>
                <div className='col-span-3'>
                    <img className='rounded-2xl h-60 w-52' src={item?.hotelImgPath} alt="" />
                </div>
                <div className='col-span-7 h-full'>
                    <div className={styles['hotel-title']}>{item?.hotelName}</div>
                    <div className='flex flex-row mt-4'>
                        <div className='flex flex-col w-8/12'>
                            <div><PlaceIcon /> {item?.address}</div>
                            {item?.amenities?.slice(0, 5).map((item, index) => (
                                <div key={index}>
                                    <CheckIcon /> {item}
                                </div>
                            ))}
                            <div className='flex justify-start mt-2'>
                                <span style={{ color: '#F70000' }} className='block mr-2'>{item?.rating}/10 </span>
                                <span style={{ color: 'black' }}>{item?.reviews} lượt đánh giá</span> 
                            </div>
                        </div>
                        <div className='flex flex-col-reverse items-end w-4/12'>
                            <button className={styles['item-button']} onClick={handleSelectItem}>Chọn phòng</button>
                            <div className='flex flex-col items-end mb-5'>
                                <span className={styles['item-price']}>
                                    {item?.minPrice.toLocaleString('vi-VN')} VND
                                </span>

                                <span>
                                    Phòng/đêm
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}
SearchResultItem.defaultProps = {
    item: {
        id: null,
        hotelName: '',
        type: "",
        address: "",
        hotelImgPath: '',
        amenities: [],
        rating: null,
        reviews: null,
        minPrice: null,
    }
}
export default SearchResultItem
