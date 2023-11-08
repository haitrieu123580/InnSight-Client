import styles from './HomeContainer.module.scss'
import Header from '../../components/header/Header'
import img from '../../../assets/images/autumn-image.png';
import imgDana from '../../../assets/images/danang.png';
import imgHCM from '../../../assets/images/ho-chi-minh.png';
import imgHaNoi from '../../../assets/images/ha-noi.png';
import imgHA from '../../../assets/images/hoi-an.png';
import imgHue from '../../../assets/images/hue.png';
import CardItem from '../../components/card-item/CardItem';
const city = [
    {
        img: imgDana,
        name: "Đà Nẵng",
    },
    {
        img: imgHCM,
        name: "Hồ Chí Minh",
    },
    {
        img: imgHaNoi,
        name: "Hà Nội",
    },
    {
        img: imgHue,
        name: "Huế",
    },
    {
        img: imgHA,
        name: "Hội An",
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
const getHotelInCity = (city) => {
    console.log(city)
}
const HomeContainer = () => {

    return (
        <div className={`${styles['home']}`}>
            <Header />
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
                                <button className='float-right'>Xem chi tiết</button>
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
                <div className={styles['content-block']}>
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

                </div>
            </div>
        </div>
    )
}

export default HomeContainer