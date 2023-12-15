import React, { useEffect, useState } from 'react';
import styles from './SearchBox.module.scss';
import './Searchbox.scss';
import Constants from '../../../utils/Contants';
import SearchIcon from '@mui/icons-material/Search';
import { Button } from '@mui/material';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import { useNavigate, useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import HomeAction from '../../../redux/home/action';
import ShowToastify from '../../../utils/ShowToastify';

const SearchBox = () => {
    const location = useLocation();
    const dispatch = useDispatch();
    const searchParams = new URLSearchParams(location.search);
    const navigate = useNavigate();

    let dfilter = {
        province: searchParams.get('province'),
        checkinDay: searchParams.get('checkinDay'),
        checkoutDay: searchParams.get('checkoutDay'),
        room: searchParams.get('count'),
        adultCount: searchParams.get('adultCount'),
        childrenCount: searchParams.get('childrenCount'),
        fromPrice: searchParams.get('fromPrice') || 0,
        rate: searchParams.get('rate') !== 'null' ? searchParams.get('rate') : null ,
        review: searchParams.get('review') !== 'null' ? searchParams.get('review') : null,
        pageIndex: 1,
        pageSize: searchParams.get('pageSize'),
    };

    const [rate, setRate] = useState(dfilter.rate !== 'null' ? dfilter.rate : null);
    const [review, setReview] = useState(dfilter.review !== 'null' ? dfilter.review : null);
    const [fromPrice, setFromPrice] = useState(dfilter.fromPrice !== 0 ? dfilter.fromPrice : null);

    const [filter, setFilter] = useState(dfilter)
    const addFilterParams = (field, value) => {
        setFilter(prevFilter => ({
            ...prevFilter,
            [field]: value
        }));
    };

    const handlefromPrice = (event, newValue) => {
        setFromPrice(newValue);
        addFilterParams('fromPrice', newValue);
    };

    const handlerate = (event, newValue) => {
        setRate(newValue);
        addFilterParams('rate', newValue);
    };

    const handlereview = (event, newValue) => {
        setReview(newValue);
        addFilterParams('review', newValue);
    };

    const handleSubmit = () => {
        dispatch({
            type: HomeAction.SEARCH_HOTELS,
            filter: filter,
            onSuccess: () => {
                const queryParams = new URLSearchParams(filter).toString();
                navigate(`/searchresults?${queryParams}&filter=1`);
            },
            onError: () => {
                ShowToastify.showErrorToast("Có lỗi xảy ra, vui lòng thử lại");
            }
        });
    };

    return (
        <div className={`${styles['box-wrapper']} box-wrapper`}>
            <div className={styles['box-item']}>
                <Autocomplete
                    options={Constants.price}
                    getOptionLabel={(option) => option.toString()}
                    value={fromPrice}
                    onChange={handlefromPrice}
                    renderInput={(params) => (
                        <TextField
                            placeholder='Giá từ'
                            {...params}
                            fullWidth
                        />
                    )}
                />
            </div>

            <div className={styles['box-item']}>
                <Autocomplete
                    options={Constants.review}
                    getOptionLabel={(option) => option.toString()}
                    value={review}
                    onChange={handlereview}
                    renderInput={(params) => (
                        <TextField
                            placeholder='Điểm đánh giá'
                            {...params}
                            fullWidth
                        />
                    )}
                />
            </div>
            <div className={styles['box-item']}>
                <Autocomplete
                    options={Constants.rate}
                    getOptionLabel={(option) => option.toString()}
                    value={rate}
                    onChange={handlerate}
                    renderInput={(params) => (
                        <TextField
                            placeholder='Loại khách sạn (sao)'
                            {...params}
                            fullWidth
                        />
                    )}
                />
            </div>
            <div className={styles['box-item']}>
                <Button className={styles['search-button']} onClick={handleSubmit}>
                    <SearchIcon />
                </Button>
            </div>

        </div>
    );
};

export default SearchBox;