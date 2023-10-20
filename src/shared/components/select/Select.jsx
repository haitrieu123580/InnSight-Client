import React from "react";
import styles from "../select/Select.module.scss";

const SelectComponent = ({ options, value, setValue, type }) => {
  return (
    <select
      value={value}
      onChange={(e) => setValue(e.target.value)}
      className={`border-2 px-3 py-2 ${styles["select"]}`}
    >
      {
     
     options?.map((option) => {
       return (
         <option
           key={
             type === "province"
               ? option?.province_id
               : type === "district"
               ? option?.district_id
               : option?.ward_id
           }
           value={
             type === "province"
               ? option?.province_id
               : type === "district"
               ? option?.district_id
               : option?.ward_id
           }
         >
           {type === "province"
             ? option?.province_name
             : type === "district"
             ? option?.district_name
             : option?.ward_name}
         </option>
       ); 
     })
     }
     
    </select>
  );
};

export default SelectComponent;
