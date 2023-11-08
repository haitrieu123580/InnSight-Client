import React, { useState } from 'react';
import styles from './SearchBox.module.scss';
import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import './Searchbox.scss';
import Constants from '../../../utils/Contants';
import SearchIcon from '@mui/icons-material/Search';
import { Button } from '@mui/material';
const commonSelectStyles = {
    "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
        border: "1px solid #484850",
        borderRadius: "5px 5px 0 0"
    },
    "& select": {
        padding: "0",
        appearance: "none",
        border: "none",
        background: "transparent",
        borderRadius: "15px"
    },
};
const SearchBox = () => {
    const [selectedPrice, setSelectedPrice] = useState(null);
    const [selectedRoomType, setSelectedRoomType] = useState(null);
    const [selectedRate, setSelectedRate] = useState(null);
    const handleChangePrice = (price) => {
        setSelectedPrice(price)
    }
    const handleChangeRoomType = (type) => {
        setSelectedRoomType(type)
    }
    const handleChangeRate = (rate) => {
        setSelectedRate(rate);
    }
    const search = () => {
        console.log(selectedPrice, selectedRoomType, selectedRate)
    }
    return (
        <div className={`${styles['box-wrapper']} box-wrapper`}>
            <div className={styles['box-item']}>
                <FormControl
                    sx={{
                        width: '100%',
                    }}
                >
                    <FormHelperText
                        sx={{
                            color: 'black',
                            fontBold: '400',
                        }}
                    >
                        {'Giá mỗi đêm'}
                    </FormHelperText>
                    <Select
                        value={selectedPrice || ""}
                        // onChange={onChange}
                        displayEmpty
                        inputProps={{ MenuProps: { disableScrollLock: true } }}
                        sx={commonSelectStyles}
                    >
                        {Constants.price.map((option, index) => (
                            <MenuItem onClick={() => handleChangePrice(option)} key={index} value={option}>
                                {option}
                            </MenuItem>
                        ))}
                    </Select>
                </FormControl>
            </div>
            <div className={styles['box-item']}>
                <FormControl
                    sx={{
                        width: '100%',
                    }}
                >
                    <FormHelperText
                        sx={{
                            color: 'black',
                            fontBold: '400',
                        }}
                    >
                        {'Loại phòng'}
                    </FormHelperText>
                    <Select
                        value={selectedRoomType || ""}
                        // onChange={onChange}
                        displayEmpty
                        inputProps={{ MenuProps: { disableScrollLock: true } }}
                        sx={commonSelectStyles}
                    >
                        {Constants.roomType.map((option, index) => (
                            <MenuItem onClick={() => handleChangeRoomType(option)} key={index} value={option}>
                                {option}
                            </MenuItem>
                        ))}
                    </Select>
                </FormControl>
            </div>
            <div className={styles['box-item']}>
                <FormControl
                    sx={{
                        width: '100%',
                    }}
                >
                    <FormHelperText
                        sx={{
                            color: 'black',
                            fontBold: '400',
                        }}
                    >
                        {'Đánh giá'}
                    </FormHelperText>
                    <Select
                        inputProps={{ MenuProps: { disableScrollLock: true } }}
                    >
                        {Constants.rate.map((option, index) => (
                            <MenuItem onClick={() => handleChangeRate(option)} key={index} value={option}>
                                {option}
                            </MenuItem>
                        ))}
                    </Select>
                </FormControl>
            </div>


            <div className={styles['box-item']}>
                <Button className={styles['search-button']} onClick={search}>
                    <SearchIcon />
                </Button>
            </div>

        </div>
    );
};

export default SearchBox;