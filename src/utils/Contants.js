import AirIcon from '@mui/icons-material/Air';
import ElevatorIcon from '@mui/icons-material/Elevator';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import WifiIcon from '@mui/icons-material/Wifi';
import LocalLibraryIcon from '@mui/icons-material/LocalLibrary';
import BathtubIcon from '@mui/icons-material/Bathtub';

import IcStar from "../shared/components/icons/home-icons/IcStar";


const Constants = {
    price: [
        '100.000', '300.000', '400.000', '700.000', '900.000', '1000.000'
    ],

    review: [
        1, 2, 3, 4, 5, 6, 7, 8, 9, 10
    ],
    rate: [
        '1 sao', '2 sao', '3 sao', '4 sao', '5 sao'
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

    ],
    tax: 10,
}
export default Constants;