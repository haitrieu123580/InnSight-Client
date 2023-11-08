import AirIcon from '@mui/icons-material/Air';
import ElevatorIcon from '@mui/icons-material/Elevator';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import WifiIcon from '@mui/icons-material/Wifi';
import LocalLibraryIcon from '@mui/icons-material/LocalLibrary';
import BathtubIcon from '@mui/icons-material/Bathtub';
import IcStar from "../shared/components/icons/home-icons/IcStar";


const Constants = {
    price: [
        100000,
        300000,
        500000,
        1000000,
        2000000,
        5000000,
    ],
    roomType: [
        'Tất cả',
        'Phòng đôi',
        'Phòng tổng thống',
        'Phòng đơn'
    ],
    rate: [
        1, 2, 3, 4, 5, 6, 7, 8, 9, 10
    ],
    amenities: [
        { name: 'máy lạnh', icon: <AirIcon /> },
        { name: 'thang máy', icon: <ElevatorIcon /> },
        { name: 'thang máy', icon: <RestaurantIcon /> },
        { name: 'wifi', icon: <WifiIcon /> },
        { name: 'lễ tân', icon: <LocalLibraryIcon /> },
        { name: 'nhà tắm riêng', icon: <BathtubIcon /> },


    ],
    rates: [
        { id: 1, value: 1, name: "1 sao", icon: <IcStar /> },
        { id: 2, value: 2, name: "2 sao", icon: (<><IcStar /><IcStar /></>) },
        { id: 3, value: 3, name: "3 sao", icon: (<><IcStar /><IcStar /><IcStar /></>) },
        { id: 4, value: 4, name: "4 sao", icon: (<><IcStar /><IcStar /><IcStar /><IcStar /></>) },
        { id: 5, value: 5, name: "5 sao", icon: (<><IcStar /><IcStar /><IcStar /><IcStar /><IcStar /></>) },

    ]
}
export default Constants;