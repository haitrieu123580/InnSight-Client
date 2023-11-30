import React, { useState, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
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
import Pagination from '@mui/material/Pagination';
import { Button, Popconfirm } from 'antd';
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
  const navigate = useNavigate();
  const {listUser} = useSelector((state) => state.Admin) || {}
  const [page, setPage] = useState(1);
  const [reloadData, setReloadData] = useState(true);
  
  const handleSelectChange = (value) => {
    setPage(value);
  };
  
  const pageIndex = 1;
  const pageSize = 20;
  useEffect(() => {
    if (reloadData) {
      dispatch({
        type: AdminAction.GET_LIST_USER,
        pageIndex : pageIndex,
        pageSize: pageSize,
          onSuccess: () => {
          },
          onError: () => {
              ShowToastify.showErrorToast("Xảy ra lỗi, xin thử lại sau")
          }
      });
      setReloadData(false);
    }
  }, [page, reloadData]);

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
      type: AdminAction.GET_LIST_USER,
      pageIndex : value,
      pageSize: pageSize,
        onSuccess: () => {
        },
        onError: () => {
            ShowToastify.showErrorToast("Xảy ra lỗi, xin thử lại sau")
        }
    });
  };

  function handleDelete(id) {
    dispatch({
      type: AdminAction.DELETE_USER,
      id : id,
        onSuccess: () => {
          ShowToastify.showSuccessToast("Xóa thành công")
          setReloadData(true);
        },
        onError: () => {
            ShowToastify.showErrorToast("Xảy ra lỗi, xin thử lại sau")
        }
    });
  }

  return (
    listUser && listUser.users ? (
    <div className={`${styles['home']}`}>
      <div className={`flex m-2 ${styles['text']}`}>
        {/* <div className="mr-4 pt-1">Loại người dùng</div>
        <SelectMenu onSelectChange={handleSelectChange} className="mr-4" /> */}
        <div className="flex-grow text-right pt-1 font-bold">Tổng: {listUser.totalItems}</div>
      </div>
      <div>
        <TableContainer component={Paper} className="mr-14">
          <Table>
            <TableHead>
              <TableRow>
                <StyledTableCell>STT</StyledTableCell>
                <StyledTableCell className="w-96">Tên người dùng</StyledTableCell>
                <StyledTableCell>Vai trò</StyledTableCell>
                <StyledTableCell align="center">Hành động</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {listUser.users.map((item, index) => (
                  <StyledTableRow key={item.id}>
                    <StyledTableCell component="th" scope="row">
                      {((page - 1) * 20) + index + 1}
                    </StyledTableCell>
                    {item.fullName ? (
                      <StyledTableCell className="w-96">{item.fullName}</StyledTableCell>
                    ) : (
                      <StyledTableCell className="w-96">{getEmailUsername(item.email)}</StyledTableCell>
                    )}
                    <StyledTableCell>{item.role}</StyledTableCell>
                    <StyledTableCell>
                      <div className="flex justify-center">
                        <NavLink to={`/qltaikhoan/detail?id=${item.id}&role=${item.role}`}>
                          <Button className='flex gap-2 '>
                            <IcDetail />
                            Xem chi tiết
                          </Button>
                        </NavLink>
                        <Popconfirm
                          title="Xóa người dùng"
                          description={`Bạn chắc chắn muốn xóa ${item.role} này?`}
                          icon={<QuestionCircleOutlined style={{ color: 'red' }} />}
                          onConfirm={() => handleDelete(item.id)}
                          okText="OK"
                        >
                          <Button className="flex ml-5 gap-2 ">
                            <IcDelete />
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
      <Pagination
        count={listUser?.totalPages || 1}
        defaultPage={1}
        page={page}
        // variant="outlined"
        shape="rounded"
        onChange={handleChange}
        className={`${styles['pagination']}`}
      />
    </div>
    ) : (
      <div></div>
    )
  );
};

export default QLTaiKhoanContainer;
