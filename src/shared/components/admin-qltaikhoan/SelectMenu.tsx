import React from 'react';
import styles from './SelectMenu.module.scss'

const SelectMenu = ({ onSelectChange }) => {
    const handleSelectChange = (event) => {
      const selectedValue = event.target.value;
      onSelectChange(selectedValue);
    };
  
    return (
      <select 
        onChange={handleSelectChange}
        className={styles.menu}
      >
        <option value="Tất cả">Tất cả </option>
        <option value="Host">Host</option>
        <option value="Client">Client</option>
        <option value="Admin">Admin</option>
      </select>
    );
};

export default SelectMenu;