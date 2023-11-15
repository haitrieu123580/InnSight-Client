import React, { useState } from 'react';
import data from '../../../../utils/VNProvince';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
const ProvinceDropdown = ({ selectProvince }) => {
  const [selectedOption, setSelectedOption] = useState(null);
  function trimProvinceOrCityName(inputString) {
    const cityKeyword = "Thành phố";
    const provinceKeyword = "Tỉnh";

    // Kiểm tra chuỗi có chứa "Thành phố" không
    if (inputString?.includes(cityKeyword)) {
      return inputString?.replace(cityKeyword, "").trim();
    }

    // Kiểm tra chuỗi có chứa "Tỉnh" không
    if (inputString?.includes(provinceKeyword)) {
      return inputString?.replace(provinceKeyword, "").trim();
    }

    // Nếu không có cả "Thành phố" và "Tỉnh", trả về chuỗi ban đầu
    return inputString?.trim();
  }

  const handleOptionChange = (event, newValue) => {
    setSelectedOption(newValue);
    selectProvince(trimProvinceOrCityName(newValue?.name))
  };

  return (
    <Autocomplete
      options={data}
      getOptionLabel={(option) => option.name}
      value={selectedOption}
      onChange={handleOptionChange}
      renderInput={(params) => (
        <TextField
          {...params}
          // label="Tỉnh/Thành phố"
          // variant="outlined"
          fullWidth
        />
      )}
    />
  );
};

export default ProvinceDropdown;
