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

  const handleOptionChange = (event, newValue) => {
    setSelectedOption(newValue);
    selectProvince(newValue?.name)
  };

  return (
    <div className={`custom-autocomplete`}>
      <Autocomplete
        options={data}
        getOptionLabel={(option) => option.name}
        value={selectedOption}
        onChange={handleOptionChange}
        renderInput={(params) => (
          <TextField
            {...params}
            fullWidth
          />
        )}
      />
    </div>

  );
};

export default ProvinceDropdown;
