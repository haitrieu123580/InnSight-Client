import React from 'react';
import styles from './HomeContainer.module.scss'
import Header from '../../components/header/Header'
import img from '../../../assets/images/autumn-image.png';
import imgDana from '../../../assets/images/danang.png';
import imgHCM from '../../../assets/images/ho-chi-minh.png';
import imgHaNoi from '../../../assets/images/ha-noi.png';
import imgHA from '../../../assets/images/hoi-an.png';
import imgHue from '../../../assets/images/hue.png';
import CardItem from '../../components/card-item/CardItem';
import { useDispatch } from 'react-redux';
import HomeAction from '../../../redux/home/action';
import ShowToastify from '../../../utils/ShowToastify';
import { useNavigate, useLocation } from 'react-router-dom';
import { format, addDays } from "date-fns";
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
const city = [
    {
        img: imgDana,
        name: "Thành phố Đà Nẵng",
    },
    {
        img: imgHCM,
        name: "Thành phố Hồ Chí Minh",
    },
    {
        img: imgHaNoi,
        name: "Thành phố Hà Nội",
    },
    {
        img: imgHue,
        name: "Tỉnh Thừa Thiên Huế",
    },
    {
        img: imgHA,
        name: "Tỉnh Quảng Nam",
    },

]
const cityFav = [
    {
        img: imgDana,
        name: "Đà Nẵng",
        describe: 'Biển Mỹ Khê, Đà Nẵng',
        reviews: 1234,
        score: 8.9,
    },
    {
        img: imgHCM,
        name: "Hồ Chí Minh",
        describe: 'Quận 1, Hồ Chí Minh',
        reviews: 1234,
        score: 8.9,
    },
    {
        img: imgHaNoi,
        name: "Hà Nội",
        describe: 'Biển Mỹ Khê, Đà Nẵng',
        reviews: 1234,
        score: 8.9,
    },
    {
        img: imgHue,
        name: "Huế",
        describe: 'Quận 1, Hồ Chí Minh',
        reviews: 1234,
        score: 8.9,
    },
]


const HomeContainer = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const [open, setOpen] = React.useState(false);
    const handleClose = () => {
        setOpen(false);
    };
    const getHotelInCity = (city) => {
        const filter = {
            province: city,
            checkinDay: format(new Date().setDate(new Date().getDate() + 1), 'yyyy-MM-dd'),
            checkoutDay: format(new Date().setDate(new Date().getDate() + 2), 'yyyy-MM-dd'),
            room: searchParams.get('count') || 1,
            adultCount: searchParams.get('adultCount') || 2,
            childrenCount: searchParams.get('childrenCount') || 0,
            pageIndex: 1,
            pageSize: 5,
        };
        dispatch({
            type: HomeAction.SEARCH_HOTELS,
            filter: filter,
            onSuccess: () => {
                const queryParams = new URLSearchParams(filter).toString();
                navigate(`/searchresults?${queryParams}`);
            },
            onError: () => {
                ShowToastify.showErrorToast("Có lỗi xảy ra, vui lòng thử lại")
            }
        })
    }
    return (
        <div className={`${styles['home']}`}>
            <Header />
            <Dialog
                fullWidth={true}
                open={open}
                maxWidth={"lg"}
                onClose={handleClose}
            >
                <DialogTitle>Ưu đãi mùa lễ hội</DialogTitle>
                <DialogContent>
                    <img src='https://www.vodafone.co.uk/newscentre/app/uploads/2019/04/holiday-plane-roaming-1440.jpg'>
                    </img>
                    <DialogContentText color={"InfoText"} textAlign={"center"} fontWeight={700}>
                        Hiện tại chưa có ưu đãi
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button variant='outlined' color='warning' onClick={handleClose}>Close</Button>
                </DialogActions>
            </Dialog>
            <div className={`${styles['home-content']} sm:w-full sm:p-3.5 md:p-3.5 lg:pl-10 lg:pr-10`}>
                <div className={styles['content-block']}>
                    <div className={styles['content-title']}>Các ưu đãi đặc biệt cho bạn</div>
                    <div className={`${styles['content']} flex sm:flex-col lg:flex-row justify-between`}>
                        <div className={`${styles['content-image']} sm:w-full lg:w-9/12`}>
                            <img src={img} alt="Autumn background" />
                        </div>
                        <div className={`${styles['content-script']} flex flex-col justify-center text-justify sm:w-full lg:w-3/12`}>
                            Ưu đãi giảm giá 20% cho tất cả các đặt phòng vào tháng 10. Đừng bỏ lỡ cơ hội thư giãn và thưởng thức mùa thu tại khách sạn của chúng tôi.
                            <div>
                                <button className='float-right' onClick={(e) => { e.preventDefault(); setOpen(true) }}>Xem chi tiết</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles['content-block']}>
                    <div className={styles['content-title']}>Điểm đến thịnh hành</div>
                    <div className={`${styles['content']}`}>
                        <div className={`grid grid-cols-12 gap-4`}>
                            {city.map((cityItem, index) => (
                                <div
                                    key={index}
                                    onClick={() => getHotelInCity(cityItem.name)}
                                    className={`${styles['grid-item']}  ${index < 2 ? 'col-span-6' : 'col-span-4'}`}
                                >
                                    <span>{cityItem.name}</span>
                                    <img src={cityItem.img} alt={cityItem.name} />
                                </div>
                            ))}
                        </div>

                    </div>
                </div>
                {/* <div className={styles['content-block']}>
                    <div className={styles['content-title']}>Top các khách sạn được yêu thích nhất</div>
                    <div className={`${styles['content']}`}>
                        <div className="grid grid-cols-4 gap-4">
                            {cityFav?.map((cityItem, index) => (

                                <div key={index}
                                    onClick={() => getHotelInCity(cityItem.name)}
                                    className={`${styles['grid-item-fav']} col-span-1}`}>
                                    <CardItem item={cityItem} />
                                </div>
                            ))}
                        </div>
                    </div>

                </div> */}
            </div>
        </div>
    )
}

export default HomeContainer