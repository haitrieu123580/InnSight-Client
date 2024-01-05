import React, { useEffect, useState } from "react";
import { Button, Skeleton } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import HostAction from "../../../../redux/host/action";
import ShowToastify from "../../../../utils/ShowToastify";
import PriceRoomCard from "../../../components/host-manage/priceRoom/PriceRoomCard";
import IcSearch from "../../../components/icons/admin-header-icons/IcSearch";
import { Input } from "antd";

const RoomPriceContainer = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();
  const [reloadData, setReloadData] = useState(false);
  const roomTypes = useSelector((state) => state.Host.roomTypes);
  const { currentHotel } = useSelector((state) => state.Host);
  const hotelId = currentHotel;
  const [searchValue, setSearchValue] = useState('');
  useEffect(() => {
    setSearchValue('');
  }, [location.pathname]);

  const searchParams = new URLSearchParams(location.search);
  const onSearchChange = (event) => {
    setSearchValue(event.target.value);
  };
  const roomtypeName = searchParams.get('roomtype');
  useEffect(() => {
    if(hotelId){
      dispatch({
        type: HostAction.SEARCH_ROOMTYPE,
        hotelId: hotelId,
        name: roomtypeName,
        onSuccess: () => {
        },
        onError: () => {
          ShowToastify.showErrorToast('Xảy ra lỗi, xin thử lại sau');
        },
      });
    }
    setReloadData(false);
  }, [roomtypeName,hotelId, dispatch,reloadData]);

  const onSearch = () => {
      const queryParams = new URLSearchParams({ roomtype: searchValue }).toString();
      navigate(`/host/price-room?${queryParams}`);

  };

  return (
    <>
      <div className="flex justify-between items-baseline ">
        <h1>Danh sách phòng nghỉ</h1>
        <div className="relative">
              <Input 
                placeholder="Nhập để tìm kiếm" 
                onChange={onSearchChange}
                value={searchValue}
                style={{ width: '300px', height: '40px' }}
                className='pl-10'
              />
              <button className="absolute top-1/2 right-0 -translate-y-1/2 pr-2"  onClick={onSearch}>
                <IcSearch />
              </button>
            </div>
        <Link to="/host/add-room">
          <Button variant="text" size="small" color="primary">
            <AddIcon />
            <span className="text-sm">Thêm phòng mới</span>
          </Button>
        </Link>
      </div>
      <div className={"bg-white min-h-screen"}>
        {roomTypes ? (
          roomTypes.map((room, index) =><div key={index}>
           <PriceRoomCard room={room} />
          </div>)
        ) : (
          <Skeleton variant="rectangular" width={210} height={118} />
        )}
      </div>
    </>
  );
};

export default RoomPriceContainer;
