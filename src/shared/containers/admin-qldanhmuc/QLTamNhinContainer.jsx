import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Button} from '@mui/material';
import { message, Popconfirm } from 'antd';
import IcDelete from '../../components/icons/qldichvu-icons/IcDelete';
import IcUpdate from '../../components/icons/qldichvu-icons/IcUpdate';
import View from '../../components/admin-qldanhmuc/View';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { useEffect } from 'react';
import AdminAction from '../../../redux/admin/action';
import ShowToastify from '../../../utils/ShowToastify';
import { useLocation } from 'react-router';

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

const QLTamNhinContainer = () => {
  const dispatch = useDispatch();
  const {views} = useSelector((state) => state.Admin) || {}
  const [reloadData, setReloadData] = useState(false);
  const [addViewOpen, setAddViewOpen] = React.useState(false);
  const [updateViewOpen, setUpdateViewOpen] = React.useState(false);
  const [selectedView, setSelectedView] = React.useState(null);
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const name = searchParams.get('name') || '';

  const [viewCount, setViewCount] = React.useState(1);
  const handleIncrementViewCount = () => {
    setViewCount(viewCount + 1);
  };

  useEffect(() => {
    dispatch({
      type: AdminAction.SEARCH_VIEWS,
      name: name,
        onSuccess: () => {
        },
        onError: () => {
            ShowToastify.showErrorToast("Xảy ra lỗi, xin thử lại sau")
        }
    });
    setReloadData(false);
  }, [dispatch, reloadData, name]);

  // Add View
  const handleOpenAddView = () => {
    setSelectedView(null);
    setAddViewOpen(true);
  };
  const handleAddView = () => {
    if(selectedView){
      dispatch({
        type: AdminAction.ADD_VIEWS,
        data: selectedView,
          onSuccess: () => {
            ShowToastify.showSuccessToast("Thêm thành công");
            setReloadData(true);
          },
          onError: () => {
              ShowToastify.showErrorToast("Xảy ra lỗi, xin thử lại sau")
          }
      });
    }
    else{
      ShowToastify.showErrorToast("Không thành công");
    }
    setAddViewOpen(false);
  };
  const handleCloseAddView = () => {
    setAddViewOpen(false);
  };

  // Update View
  const handleOpenUpdateView = (item) => {
    setSelectedView(item);
    setUpdateViewOpen(true);
  };
  const handleUpdateView = () => {
    if(selectedView){
      dispatch({
        type: AdminAction.UPDATE_VIEWS,
        id: selectedView.id,
        data: selectedView,
          onSuccess: () => {
            ShowToastify.showSuccessToast("Sửa thành công");
            setReloadData(true);
        },
          onError: () => {
              ShowToastify.showErrorToast("Xảy ra lỗi, xin thử lại sau");
          }
      });
    }
    else{
    ShowToastify.showErrorToast("Không thành công");
    }
    setUpdateViewOpen(false);
  };
  const handleCloseUpdateView = () => {
    setUpdateViewOpen(false);
  };

  // Delete view
  function handleDeleteView(id) {
    dispatch({
      type: AdminAction.DELETE_VIEWS,
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
    views ? (
      <div> 
        <h2 className={'items-center text-2xl font-bold text-sky-900 mb-2 justify-center'}>Tầm nhìn của phòng</h2>
        <TableContainer component={Paper} className="mr-14">
          <Table sx={{  }}>
            <TableHead>
              <TableRow>
                <StyledTableCell>STT</StyledTableCell>
                <StyledTableCell style={{ width: 800}}>Tầm nhìn</StyledTableCell>
                {/* <StyledTableCell style={{ width: 500 }}>Mô tả</StyledTableCell> */}
                <StyledTableCell align="right">Sửa</StyledTableCell>
                <StyledTableCell >Xóa</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {Array.isArray(views.content) && views.content.map((item, index) => (
                <StyledTableRow key={item.id}>
                  <StyledTableCell component="th" scope="row">
                    {viewCount + index}
                  </StyledTableCell>
                  <StyledTableCell style={{ width: 800}}>{item.name}</StyledTableCell>
                  {/* <StyledTableCell style={{ width: 500 }}>{item.description}</StyledTableCell> */}
                  <StyledTableCell align="right" onClick={() => handleOpenUpdateView(item)}><button><IcUpdate/></button></StyledTableCell>
                  <Popconfirm
                    title="Xóa tầm nhìn"
                    description="Bạn có chắc chắc muốn xóa tầm nhìn này không?"
                    onConfirm={() => handleDeleteView(item.id)}
                    okText="OK"
                    cancelText="Hủy"
                  >
                  <StyledTableCell>
                    <button>
                      <IcDelete/>
                    </button>
                  </StyledTableCell>
                  </Popconfirm>
                  
                </StyledTableRow>
              ))}
              <View
                open={updateViewOpen}
                onClose={handleCloseUpdateView}
                onUpdateView={handleUpdateView}
                view={selectedView}
                setView={setSelectedView}
              />
            </TableBody>
          </Table>
        </TableContainer>

        <div className='mt-3'>
          <Button variant="outlined" onClick={handleOpenAddView}>
            Thêm tầm nhìn
          </Button>
          <View
            open={addViewOpen}
            onClose={handleCloseAddView}
            onAddView={handleAddView}
            view={selectedView}
            setView={setSelectedView}
          />
        </div>
      </div>
    ) : (
      <div> Loading... </div>
    )
  );
};
export default QLTamNhinContainer;
