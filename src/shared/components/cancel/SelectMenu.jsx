import React from 'react';
import styles from './SelectMenu.module.scss';

const SelectMenu = ({ onSelectChange, reasons }) => {
  const handleSelectChange = (event) => {
    const selectedValue = event.target.value;
    onSelectChange(selectedValue);
  };

  return (
    <select onChange={handleSelectChange} className={styles.menu}>
      <option value="">Chọn lý do (bắt buộc)</option>
      {reasons.map((reason) => (
        <option key={reason.id} value={reason.id}>
          {reason.content}
        </option>
      ))}
    </select>
  );
};

export default SelectMenu;
