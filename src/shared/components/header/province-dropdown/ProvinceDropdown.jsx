import React, { useState } from 'react';
import data from '../../../../utils/VNProvince';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import './CustomAutocomplete.scss'
// import { makeStyles } from "@material-ui/core/styles";

// const useStyles = makeStyles({
//   option: {
//     "&:hover": {
//       backgroundColor: "cyan !important"
//     }
//   }
// });
const ProvinceDropdown = ({ selectProvince }) => {
  const [selectedOption, setSelectedOption] = useState(null);
  function trimProvinceOrCityName(inputString) {
    const cityKeyword = "Thành phố";
    const provinceKeyword = "Tỉnh";

    if (inputString?.includes(cityKeyword)) {
      return inputString?.replace(cityKeyword, "").trim();
    }

    if (inputString?.includes(provinceKeyword)) {
      return inputString?.replace(provinceKeyword, "").trim();
    }

    return inputString?.trim();
  }

  const handleOptionChange = (event, newValue) => {
    setSelectedOption(newValue);
    selectProvince(trimProvinceOrCityName(newValue?.name))
    // selectProvince(newValue?.name)
  };

  return (
    <div className={`custom-autocomplete`}>
      <Autocomplete
        options={data}
        getOptionLabel={(option) => option.name}
        value={selectedOption}
        onChange={handleOptionChange}
        clearIcon={true}
        className={`border-none py-0`}
        renderInput={(params) => (
          <TextField
            {...params}
            // label="Tỉnh/Thành phố"
            // variant="outlined"
            fullWidth
          />
        )}
      />
    </div>

  );
};

export default ProvinceDropdown;
