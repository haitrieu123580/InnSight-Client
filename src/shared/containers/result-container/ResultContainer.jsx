import React from 'react'
import styles from './ResultContainer.module.scss'
import Header from '../../components/header/Header'
import ResultList from '../../components/result-list/ResultList'
import SearchBox from '../../components/search-box/SearchBox'
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import { useState } from 'react'
import { useSelector } from 'react-redux/es/hooks/useSelector'
import './Pagination.scss'

const ResultContainer = () => {
    const { result } = useSelector(state => state.Home) || {}
    const [page, setPage] = useState(1);
    const handleChange = (event, value) => {
        setPage(value);
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
                                count={10}
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
