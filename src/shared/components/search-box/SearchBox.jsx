import React, { useEffect, useState } from 'react';
import styles from './SearchBox.module.scss';
import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
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

    const [rate, setRate] = useState(null);
    const [review, setReview] = useState(null);
    const [fromPrice, setFromPrice] = useState(null);

    let dfilter = {
        province: searchParams.get('province'),
        checkinDay: searchParams.get('checkinDay'),
        checkoutDay: searchParams.get('checkoutDay'),
        room: searchParams.get('count'),
        adultCount: searchParams.get('adultCount'),
        childrenCount: searchParams.get('childrenCount'),
        pageIndex: searchParams.get('pageIndex'),
        pageSize: searchParams.get('pageSize'),
    };
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
        console.log('filter',filter);
        dispatch({
            type: HomeAction.SEARCH_HOTELS,
            filter: filter,
            onSuccess: () => {
                const queryParams = new URLSearchParams(filter).toString();
                navigate(`/searchresults?${queryParams}`);
            },
            onError: () => {
                ShowToastify.showErrorToast("Có lỗi xảy ra, vui lòng thử lại");
            }
        });
    };

    useEffect(() => {
        // console.log(filter);
    }, [filter]);

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