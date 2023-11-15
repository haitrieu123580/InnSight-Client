import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import IcDetail from '../../components/icons/qltaikhoan-icons/IcDetail.jsx'
import IcDelete from '../../components/icons/qltaikhoan-icons/IcDelete.jsx'
import SelectMenu from '../../components/admin-qltaikhoan/SelectMenu.tsx'
import styles from './QLTaiKhoanContainer.module.scss'
import { QuestionCircleOutlined } from '@ant-design/icons';
import TableContainer from '@mui/material/TableContainer';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Pagination, Button, Popconfirm } from 'antd';

const data = [
  { id: '1', name: 'Nguyễn Thị Thu Thuyên', role: 'Client'},
  { id: '2', name: 'Nguyễn Thị Thu Thuyên', role: 'Host'},
  { id: '3', name: 'Nguyễn Thị Thu Thuyên', role: 'Host'},
  { id: '4', name: 'Nguyễn Thị Thu Thuyên', role: 'Client'},
  { id: '5', name: 'Nguyễn Thị Thu Thuyên', role: 'Host'},
  { id: '6', name: 'Nguyễn Thị Thu Thuyên', role: 'Client'},
  { id: '7', name: 'Nguyễn Thị Thu Thuyên', role: 'Host'},
  { id: '8', name: 'Nguyễn Thị Thu Thuyên', role: 'Client'}
];

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: '#164E63',
    color: theme.palette.common.white,
    fontSize: 16
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

function handleDelete() {
  // Xử lý xóa
}

const QLTaiKhoanContainer = () => {
  
  const [selectedValue, setSelectedValue] = useState("Tất cả");

  const handleSelectChange = (value) => {
    setSelectedValue(value);
  };

  const filteredData = selectedValue === "Tất cả" ? data : data.filter((item) => item.role === selectedValue);
  const totalCount = filteredData.length

  const [Count, setCount] = React.useState(1);
  const handleIncrementCount = () => {
    setCount(Count + 1);
  };

  return (
    <div>
      <div className={`flex m-2 ${styles['text']}`}>
        <div className="mr-4 pt-1">Loại người dùng</div>
        <SelectMenu onSelectChange={handleSelectChange} className="mr-4" />
        <div className="flex-grow text-right pt-1 font-bold">Tổng: {totalCount}</div>
      </div>
      <div> 
        <TableContainer component={Paper} className="mr-14">
          <Table>
            <TableHead>
              <TableRow>
                <StyledTableCell>STT</StyledTableCell>
                <StyledTableCell>Tên người dùng</StyledTableCell>
                <StyledTableCell>Vai trò</StyledTableCell>
                <StyledTableCell  align="center">Hành động</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {filteredData.map((item, index) => (
                <StyledTableRow key={item.id}>
                  <StyledTableCell component="th" scope="row">
                    {Count + index}
                  </StyledTableCell>
                  <StyledTableCell>{item.name}</StyledTableCell>
                  <StyledTableCell>{item.role}</StyledTableCell>
                  <StyledTableCell >
                    <div className="flex justify-center">
                      <NavLink to={`/qltaikhoan/detail?id=${item.id}&role=${item.role}`}>
                        <Button className='flex gap-2 '>
                          <IcDetail/>
                          Xem chi tiết
                        </Button>
                      </NavLink>
                      <Popconfirm
                        title="Xóa người dùng"
                        description={`Bạn chắc chắn muốn xóa ${item.role} này?`}
                        icon={<QuestionCircleOutlined style={{ color: 'red' }} />}
                        onConfirm={handleDelete}
                        okText="OK"
                      >
                        <Button className="flex ml-5 gap-2 ">
                          <IcDelete/>
                          Xóa
                        </Button>
                      </Popconfirm>
                    </div>
                  </StyledTableCell>
                </StyledTableRow>
              ))}
              
            </TableBody>
          </Table>
        </TableContainer>
      </div>
      <Pagination defaultCurrent={1} total={50} className="mt-3 " />;
    </div>
  );
};

export default QLTaiKhoanContainer;