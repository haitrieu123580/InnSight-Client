import styles from './Header.module.scss';
import IcLocation from '../icons/header-icons/IcLocation';
import IcCalendar from '../icons/header-icons/IcCalendar';
import IcGlass from '../icons/header-icons/IcGlass'
import { useState, useRef, useEffect } from 'react';
import { DateRange } from "react-date-range";
import { format } from "date-fns";
import { useNavigate, useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import useOnClickOutside from '../../../hooks/use-click-outside'
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import imgBg from '../../../assets/images/header-background.png'
import HomeAction from '../../../redux/home/action';
import ShowToastify from '../../../utils/ShowToastify';
import ProvinceDropdown from './province-dropdown/ProvinceDropdown';
import { setCheckInOut } from '../../../redux/booking/slice';
import BookingAction from '../../../redux/booking/action';
const Header = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const filter = {
    province: searchParams.get('province') || '',
    checkinDay: searchParams.get('checkinDay') ? new Date(searchParams.get('checkinDay')) : new Date(),
    checkoutDay: searchParams.get('checkoutDay') ? new Date(searchParams.get('checkoutDay')) : new Date().setDate(new Date().getDate() + 1),
    room: searchParams.get('count') || 1,
    adultCount: searchParams.get('adultCount') || 2,
    childrenCount: searchParams.get('childrenCount') || 0,
    pageIndex: 1,
    pageSize: 5,
  };
  const dateRef = useRef(null);
  const optionRef = useRef(null);
  const navigate = useNavigate();
  const [destination, setDestination] = useState(filter.province)
  const [openDate, setOpenDate] = useState(false)
  const [date, setDate] = useState([
    {
      startDate: filter.checkinDay,
      endDate: filter.checkoutDay,
      key: 'selection'
    }
  ]);
  const [openOptions, setOpenOptions] = useState(false);
  const [options, setOptions] = useState({
    adult: filter?.adultCount,
    children: filter?.childrenCount,
    room: filter.room
  });
  const handleOption = (name, operation) => {
    setOptions((prev) => {
      return {
        ...prev,
        [name]: operation === "i" ? options[name] + 1 : options[name] - 1
      }
    })
  }

  const handleSubmit = () => {
    if (destination !== "") {
      const filter = {
        province: destination,
        checkinDay: format(date[0].startDate, 'yyyy-MM-dd'),
        checkoutDay: format(date[0].endDate, 'yyyy-MM-dd'),
        count: options?.room,
        adultCount: options?.adult,
        childrenCount: options?.children,
        fromPrice: searchParams.get('fromPrice') || 0,
        rate: searchParams.get('rate') !== 'null' ? searchParams.get('rate') : null ,
        review: searchParams.get('review') !== 'null' ? searchParams.get('review') : null,
        pageIndex: 1,
        pageSize: 5,
      }
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
      dispatch(setCheckInOut({ checkIn: filter.checkinDay, checkOut: filter.checkoutDay }))
    }
    else {
      ShowToastify.showWarningToast('Vui lòng địa điểm muốn đến')
    }

  }

  useOnClickOutside(dateRef, () => {
    setOpenDate(false);
  });
  useOnClickOutside(optionRef, () => {
    setOpenOptions(false);
  });



  return (
    <header >
      <div className={` ${styles['header-image']}`}>
        <img src={imgBg} alt="" />
      </div>
      <div className={`flex ${styles['header-search']}`}>
        <div className={`${styles['header-search-item']} flex items-center`}>
          <IcLocation />
          <div className={`${styles['search-item-right']} flex flex-col ml-2`}>
            <span className={styles['item-label']}>Điểm đến</span>
            <ProvinceDropdown selectProvince={(text) => { setDestination(text) }} defaultOption={filter?.province} />
          </div>
        </div>
        <div className={`${styles['header-search-item']}`} ref={dateRef}>
          <div className='flex items-center h-full' onClick={() => { setOpenDate(!openDate) }} style={{ cursor: "pointer" }}>
            <IcCalendar />
            <div
              className={`flex justify-between w-full`}>
              <div className={`${styles['search-item-right']} flex flex-col justify-center ml-2 mr-2 ${styles['border-right']}`}>
                <span className={styles['item-label']}>Nhận phòng</span>
                <span>{`${format(date[0].startDate, 'yyyy-MM-dd')}`}</span>
              </div>
              <div className={`${styles['search-item-right']} flex flex-col ml-2`}>
                <span className={styles['item-label']}>Trả phòng</span>
                <span>{`${format(date[0].endDate, 'yyyy-MM-dd')}`}</span>
              </div>
            </div>
          </div>
          <div className={styles['calendar']}>
            {openDate && <DateRange
              editableDateInputs={true}
              onChange={item => setDate([item.selection])}
              moveRangeOnFirstSelection={false}
              ranges={date}
              className="date"
            />}
          </div>
        </div>
        <div
          ref={optionRef}
          className={`${styles['header-search-item']} flex items-center`}>
          <div className={`${styles['search-item-right']} flex flex-col ml-2`} >
            <span className={styles['item-label']} onClick={() => setOpenOptions(!openOptions)} style={{ cursor: "pointer" }}>Số khách</span>
            <div
              className={styles['header-search-text']}>
              {`${options.adult} người lớn · ${options.children} trẻ em · ${options.room} phòng`}
              {openOptions &&
                <div className={styles['option-box']}>
                  <div className={styles['option-item']}>
                    <span className={styles['option-item']}>Người lớn</span>
                    <div className={styles['option-counter']}>
                      <button
                        disabled={options.adult <= 1}
                        className={styles['optionCounterButton']}
                        onClick={() => handleOption("adult", "d")}
                      >
                        -
                      </button>
                      <span className={styles['optionCounterNumber']}>
                        {options.adult}
                      </span>
                      <button
                        className={styles['optionCounterButton']}
                        onClick={() => handleOption("adult", "i")}
                      >
                        +
                      </button>
                    </div>
                  </div>
                  <div className={styles['option-item']}>
                    <span className={styles['option-item']}>Trẻ em</span>
                    <div className={styles['option-counter']}>
                      <button
                        disabled={options.children <= 0}
                        className={styles['optionCounterButton']}
                        onClick={() => handleOption("children", "d")}
                      >
                        -
                      </button>
                      <span className={styles['optionCounterNumber']}>
                        {options.children}
                      </span>
                      <button
                        className={styles['optionCounterButton']}
                        onClick={() => handleOption("children", "i")}
                      >
                        +
                      </button>
                    </div>
                  </div>
                  <div className={styles['option-item']}>
                    <span className={styles['option-item']}>Phòng</span>
                    <div className={styles['option-counter']}>
                      <button
                        disabled={options.room <= 1}
                        className={styles['optionCounterButton']}
                        onClick={() => handleOption("room", "d")}
                      >
                        -
                      </button>
                      <span className={styles['optionCounterNumber']}>
                        {options.room}
                      </span>
                      <button
                        className={styles['optionCounterButton']}
                        onClick={() => handleOption("room", "i")}
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>}
            </div>
          </div>
        </div>
        <div className={`${styles['header-search-submit']} flex items-center`} onClick={handleSubmit}>
          <IcGlass />
        </div>
      </div>
    </header>
  )
}

export default Header