import React, { useState, useEffect } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import IcDetail from '../../components/icons/qltaikhoan-icons/IcDetail.jsx'
import styles from './QLTaiKhoanContainer.module.scss'
import TableContainer from '@mui/material/TableContainer';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Pagination from '@mui/material/Pagination';
import { Button } from 'antd';
import { useDispatch, useSelector } from "react-redux";
import ShowToastify from '../../../utils/ShowToastify';
import AdminAction from "../../../redux/admin/action.js";

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

const QLTaiKhoanContainer = () => {
  const dispatch = useDispatch();
  const {listUser} = useSelector((state) => state.Admin) || {}
  const [page, setPage] = useState(1);
  const [reloadData, setReloadData] = useState(false);
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);

  const email = searchParams.get('email') || '';
  
  useEffect(() => {
    setPage(1);
      dispatch({
        type: AdminAction.SEARCH_USER,
        email: email,
        pageIndex : page-1,
        pageSize: 20,
          onSuccess: () => {
          },
          onError: () => {
              ShowToastify.showWarningToast("Không có dữ liệu phù hợp!")
          }
      });
  }, [reloadData, email, dispatch]);

  const getEmailUsername = (email) => {
    const atIndex = email.indexOf('@');
    if (atIndex !== -1) {
      return email.substring(0, atIndex);
    } else {
      return email;
    }
  };

  const handleChange = (event, value) => {
    setPage(value);
    dispatch({
      type: AdminAction.SEARCH_USER,
      email: email,
      pageIndex : value-1,
      pageSize: 20,
      onSuccess: () => {
      },
      onError: () => {
        ShowToastify.showErrorToast("Xảy ra lỗi, xin thử lại sau")
      }
    });
  };

  return (
    listUser ? (
    <div className={`${styles['home']}`}>
      <div className={`flex m-2 ${styles['text']}`}>
        <div className="flex-grow text-right pt-1 font-bold">Tổng: {listUser.totalElements}</div>
      </div>
      <div>
        <TableContainer component={Paper} className="mr-14">
          <Table>
            <TableHead>
              <TableRow>
                <StyledTableCell>ID</StyledTableCell>
                <StyledTableCell className="w-96">Tên người dùng</StyledTableCell>
                <StyledTableCell>Vai trò</StyledTableCell>
                <StyledTableCell align="center">Hành động</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {Array.isArray(listUser.content) && listUser.content.map((item, index) => (
                  <StyledTableRow key={item.id}>
                    <StyledTableCell component="th" scope="row">
                      {((page - 1) * 20) + index + 1}
                    </StyledTableCell>
                      <StyledTableCell className="w-96">{getEmailUsername(item.email)}</StyledTableCell>
                    <StyledTableCell>{item.role}</StyledTableCell>
                    <StyledTableCell>
                      <div className="flex justify-center">
                        <NavLink to={`/qltaikhoan/detail?id=${item.id}&role=${item.role}`}>
                          <Button className='flex gap-2 '>
                            <IcDetail />
                            Xem chi tiết
                          </Button>
                        </NavLink>
                      </div>
                    </StyledTableCell>
                  </StyledTableRow>
                ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
      <Pagination
        count={listUser?.totalPages || 1}
        defaultPage={1}
        page={page}
        shape="rounded"
        onChange={handleChange}
        className={`${styles['pagination']}`}
      />
    </div>
    ) : (
      <div>Loading...</div>
    )
  );
};

export default QLTaiKhoanContainer;