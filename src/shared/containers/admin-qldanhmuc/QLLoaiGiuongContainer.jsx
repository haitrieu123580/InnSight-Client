import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
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

const QLLoaiGiuongContainer = () => {
  const dispatch = useDispatch();
  const {bedTypes} = useSelector((state) => state.Admin) || {}
  const [reloadData, setReloadData] = useState(false);
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const name = searchParams.get('name') || '';
  // const [addBedOpen, setAddBedOpen] = React.useState(false);
  // const [updateBedOpen, setUpdateBedOpen] = React.useState(false);
  // const [selectedBed, setSelectedBed] = React.useState(null);
  const [bedCount, setBedCount] = React.useState(1);
  const handleIncrementBedCount = () => {
    setBedCount(bedCount + 1);
  };

  useEffect(() => {
    dispatch({
      type: AdminAction.SEARCH_BED_TYPES,
      name: name,
        onSuccess: () => {
        },
        onError: () => {
            ShowToastify.showErrorToast("Xảy ra lỗi, xin thử lại sau")
        }
    });
    setReloadData(false);
  }, [dispatch, reloadData, name]);

  // // Add BedTypes
  // const handleOpenAddBedTypes = () => {
  //   setSelectedBed(null);
  //   setAddBedOpen(true);
  // };
  // const handleAddBedTypes = () => {
  //   if(selectedBed){
  //     dispatch({
  //       type: AdminAction.ADD_BED_TYPES,
  //       data: selectedBed,
  //         onSuccess: () => {
  //           ShowToastify.showSuccessToast("Thêm thành công");
  //           setReloadData(true);
  //         },
  //         onError: () => {
  //             ShowToastify.showErrorToast("Xảy ra lỗi, xin thử lại sau")
  //         }
  //     });
  //   }
  //   else{
  //     ShowToastify.showErrorToast("Không thành công");
  //   }
  //   setAddBedOpen(false);
  // };
  // const handleCloseAddBedTypes = () => {
  //   setAddBedOpen(false);
  // };

  // // Update BedTypes
  // const handleOpenUpdateBedTypes = (item) => {
  //   setSelectedBed(item);
  //   setUpdateBedOpen(true);
  // };
  // const handleUpdateBedTypes = () => {
  //   if(selectedBed){
  //     dispatch({
  //       type: AdminAction.UPDATE_BED_TYPES,
  //       id: selectedBed.id,
  //       data: selectedBed,
  //         onSuccess: () => {
  //           ShowToastify.showSuccessToast("Sửa thành công");
  //           setReloadData(true);
  //       },
  //         onError: () => {
  //             ShowToastify.showErrorToast("Xảy ra lỗi, xin thử lại sau");
  //         }
  //     });
  //   }
  //   else{
  //   ShowToastify.showErrorToast("Không thành công");
  //   }
  //   setUpdateBedOpen(false);
  // };
  // const handleCloseUpdateBedTypes = () => {
  //   setUpdateBedOpen(false);
  // };

  // // Delete BedTypes
  // function handleDeleteBedTypes(id) {
  //   dispatch({
  //     type: AdminAction.DELETE_BED_TYPES,
  //     id : id,
  //       onSuccess: () => {
  //         ShowToastify.showSuccessToast("Xóa thành công")
  //         setReloadData(true);
  //       },
  //       onError: () => {
  //           ShowToastify.showErrorToast("Xảy ra lỗi, xin thử lại sau")
  //       }
  //   });
  // }

  // Delete BedTypes
  // function handleDeleteBedTypes(id) {
  //   dispatch({
  //     type: AdminAction.DELETE_BED_TYPES,
  //     id : id,
  //       onSuccess: () => {
  //         ShowToastify.showSuccessToast("Xóa thành công")
  //         setReloadData(true);
  //       },
  //       onError: () => {
  //           ShowToastify.showErrorToast("Xảy ra lỗi, xin thử lại sau")
  //       }
  //   });
  // }

  return (
    bedTypes ? (
      <div> 
        <h2 className={'items-center text-2xl font-bold text-sky-900 mb-2 justify-center'}>Loại giường</h2>
        <TableContainer component={Paper} className="mr-14">
          <Table>
            <TableHead>
              <TableRow>
                <StyledTableCell>STT</StyledTableCell>
                <StyledTableCell style={{ width: 500 }}>Tên loại giường</StyledTableCell>
                <StyledTableCell style={{ width: 500}}>Mô tả</StyledTableCell>
                {/* <StyledTableCell align="right">Sửa</StyledTableCell>
                <StyledTableCell >Xóa</StyledTableCell> */}
              </TableRow>
            </TableHead>
            <TableBody>
              {Array.isArray(bedTypes.content) && bedTypes.content.map((item, index) => (
                <StyledTableRow key={item.id}>
                  <StyledTableCell component="th" scope="row">
                    {bedCount + index}
                  </StyledTableCell>
                  <StyledTableCell style={{ width: 500}}>{item.name}</StyledTableCell>
                  <StyledTableCell style={{ width: 500 }}>{item.description}</StyledTableCell>
                  {/* <StyledTableCell align="right" onClick={() => handleOpenUpdateBedTypes(item)}><button><IcUpdate/></button></StyledTableCell>
                  <Popconfirm
                    title="Xóa loại giường"
                    description="Bạn có chắc chắc muốn xóa loại giường này không?"
                    onConfirm={() => handleDeleteBedTypes(item.id)}
                    okText="OK"
                    cancelText="Hủy"
                  >
                  <StyledTableCell>
                    <button>
                      <IcDelete/>
                    </button>
                  </StyledTableCell>
                  </Popconfirm> */}
                </StyledTableRow>
              ))}
              {/* <Bed
                open={updateBedOpen}
                onClose={handleCloseUpdateBedTypes}
                onUpdateBed={handleUpdateBedTypes}
                bed={selectedBed}
                setBed={setSelectedBed}
              /> */}
            </TableBody>
          </Table>
        </TableContainer>
        {/* <div className='mt-3'>
          <Button variant="outlined" onClick={handleOpenAddBedTypes}>
            Thêm loại giường
          </Button>
          <Bed
            open={addBedOpen}
            onClose={handleCloseAddBedTypes}
            onAddBed={handleAddBedTypes}
            bed={selectedBed}
            setBed={setSelectedBed}
          />
        </div> */}
      </div>
    ) : (
      <div> Loading... </div>
    )
  );
};
export default QLLoaiGiuongContainer;
