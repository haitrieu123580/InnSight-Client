import React, { useEffect } from 'react'
import styles from './ResultContainer.module.scss'
import Header from '../../components/header/Header'
import ResultList from '../../components/result-list/ResultList'
import SearchBox from '../../components/search-box/SearchBox'
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import './Pagination.scss'
import { useLocation, useNavigate } from 'react-router'
import HomeAction from '../../../redux/home/action'
import ShowToastify from '../../../utils/ShowToastify'

const ResultContainer = () => {
    const { result } = useSelector(state => state.Home) || {}
    const [page, setPage] = useState(1);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    let filter = {
        province: searchParams.get('province'),
        checkinDay: searchParams.get('checkinDay'),
        checkoutDay: searchParams.get('checkoutDay'),
        room: searchParams.get('count'),
        adultCount: searchParams.get('adultCount'),
        childrenCount: searchParams.get('childrenCount'),
        fromPrice: searchParams.get('fromPrice') || 0,
        rate: searchParams.get('rate') !== 'null' ? searchParams.get('rate') : null ,
        review: searchParams.get('review') !== 'null' ? searchParams.get('review') : null,
        pageSize: searchParams.get('pageSize'),
    };
    const handleChange = (event, value) => {
        setPage(value);
        filter = {
            ...filter,
            pageIndex: value
        }
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
    return (
        <div>
            <Header />
            <div className={`mx-auto grid grid-cols-12 gap-4 p-1 ${styles['container-content']}`}>
                <div className={`col-span-12 rounded-lg borderp-32 sm:col-span-4 ${styles['container-item']}`}>
                    <SearchBox />
                </div>
                <div className={`col-span-12 rounded-lg borderp-32 sm:col-span-8 ${styles['container-item']}`}>
                    <ResultList result={result} />
                </div>
                <div className={`col-span-12 rounded-lg borderp-32 ${styles['container-item']}`}>
                    <div className='flex flex-row-reverse'>
                        <Stack spacing={2}>
                            <Pagination
                                count={result?.pageTotal || 1}
                                defaultPage={1}
                                page={page}
                                variant="outlined"
                                shape="rounded"
                                onChange={handleChange}
                            />
                        </Stack>
                    </div>

                </div>

            </div>
        </div>
    )
}

export default ResultContainer
