import { Button } from '@mui/material';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { styled } from '@mui/material/styles';
import { Popconfirm, message } from 'antd';
import * as React from 'react';
import Amentity from '../../components/admin-qldichvu/Amentity';
import Service from '../../components/admin-qldichvu/Service';
import IcDelete from '../../components/icons/qldichvu-icons/IcDelete';
import IcUpdate from '../../components/icons/qldichvu-icons/IcUpdate';
import styles from './QLDichVuContainer.module.scss'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import { useState } from 'react';
import { useEffect } from 'react';
import AdminAction from '../../../redux/admin/action';
import ShowToastify from '../../../utils/ShowToastify';

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
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

const QLDichVuContainer = () => {
  const dispatch = useDispatch();
  const {service, amenity} = useSelector((state) => state.Admin) || {}
  const [reloadData, setReloadData] = useState(false);

  //Service 
  const [addServiceOpen, setAddServiceOpen] = React.useState(false);
  const [updateServiceOpen, setUpdateServiceOpen] = React.useState(false);
  const [dataService, setDataService] = React.useState(null);
  //Amentity
  const [addAmentityOpen, setAddAmentityOpen] = React.useState(false);
  const [updateAmentityOpen, setUpdateAmentityOpen] = React.useState(false);
  const [dataAmentity, setDataAmentity] = React.useState(null);

  useEffect(() => {
      dispatch({
        type: AdminAction.GET_LIST_SERVICE,
          onSuccess: () => {
          },
          onError: () => {
              ShowToastify.showErrorToast("Xảy ra lỗi, xin thử lại sau")
          }
      });

      dispatch({
        type: AdminAction.GET_LIST_AMENITY,
          onSuccess: () => {
          },
          onError: () => {
              ShowToastify.showErrorToast("Xảy ra lỗi, xin thử lại sau")
          }
      });
      setReloadData(false);
  }, [reloadData]);

  const [serviceCount, setServiceCount] = React.useState(1);
  const [amentityCount, setAmentityCount] = React.useState(1);


  const handleIncrementServiceCount = () => {
    setServiceCount(serviceCount + 1);
  };

  const handleIncrementAmentityCount = () => {
    setAmentityCount(amentityCount + 1);
  };

  // add service
  const handleOpenAddService = () => {
    setDataService(null);
    setAddServiceOpen(true);
  };
  const handleAddService = () => {
    if(dataService){
      dispatch({
        type: AdminAction.ADD_SERVICE,
        data: dataService,
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
    setAddServiceOpen(false);
  };
  const handleCloseAddService = () => {
    setAddServiceOpen(false);
  };
  // Update service
  const handleOpenUpdateService = (item) => {
    setDataService(item);
    setUpdateServiceOpen(true);
  };
  const handleUpdateService = () => {
    if(dataService){
      dispatch({
        type: AdminAction.UPDATE_SERVICE,
        data: dataService,
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
    setUpdateServiceOpen(false);
  };
  const handleCloseUpdateService = () => {
    setUpdateServiceOpen(false);
  };

  // Delete Service
  function handleDeleteService(id) {
    dispatch({
      type: AdminAction.DELETE_SERVICE,
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

  // Add Amentity
  const handleOpenAddAmentity = () => {
    setDataAmentity(null);
    setAddAmentityOpen(true);
  };
  const handleAddAmentity = () => {
    if(dataAmentity){
      dispatch({
        type: AdminAction.ADD_AMENITY,
        data: dataAmentity,
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
    setAddAmentityOpen(false);
  };
  const handleCloseAddAmentity = () => {
    setAddAmentityOpen(false);
  };

  // Update Amentity
  const handleOpenUpdateAmentity = (item) => {
    setDataAmentity(item);
    setUpdateAmentityOpen(true);
  };
  const handleUpdateAmentity = () => {
    if(dataAmentity){
      dispatch({
        type: AdminAction.UPDATE_AMENITY,
        data: dataAmentity,
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
    setUpdateAmentityOpen(false);
  };
  const handleCloseUpdateAmentity = () => {
    setUpdateAmentityOpen(false);
  };

  // Delete Amenity
  function handleDeleteAmenity(id) {
    dispatch({
      type: AdminAction.DELETE_AMENITY,
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
    service && amenity ? (
    <div className={`${styles['home']} flex justify-between`}>
      <div >
        <h2 className="ml-60 text-2xl font-bold text-sky-900 mb-2">Dịch vụ</h2>
        <TableContainer component={Paper} className="mr-10">
          <Table sx={{ minWidth: 550 }}>
            <TableHead>
              <TableRow>
                <StyledTableCell>STT</StyledTableCell>
                <StyledTableCell align="left">Tên dịch vụ</StyledTableCell>
                <StyledTableCell align="right">Sửa</StyledTableCell>
                <StyledTableCell align="left">Xóa</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {Array.isArray(service) && service.map((item, index) => (
                <StyledTableRow key={item.id}>
                  <StyledTableCell component="th" scope="row">
                    {serviceCount + index}
                  </StyledTableCell>
                  <StyledTableCell align="left" style={{ width: '360px' }}>{item?.name}</StyledTableCell>
                  <StyledTableCell align="right" onClick={() => handleOpenUpdateService(item)}><button><IcUpdate/></button></StyledTableCell>
                  <Popconfirm
                    title="Xóa dịch vụ"
                    description="Bạn có chắc chắc muốn xóa dịch vụ này không?"
                    onConfirm={() => handleDeleteService(item.id)}
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
              <Service
                open={updateServiceOpen}
                onClose={handleCloseUpdateService}
                onUpdateService={handleUpdateService}
                service={dataService}
                setService={setDataService}
              />
            </TableBody>
          </Table>
        </TableContainer>

        <div className='mt-3'>
          <Button variant="outlined" onClick={handleOpenAddService}>
            Thêm dịch vụ
          </Button>
          <Service
            open={addServiceOpen}
            onClose={handleCloseAddService}
            onAddService={handleAddService}
            service={dataService}
            setService={setDataService}
          />
        </div>
      </div>

      <div>
        <h2 className="ml-60 text-2xl font-bold text-teal-800 mb-2">Tiện ích</h2>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 550 }}>
            <TableHead>
              <TableRow>
                <StyledTableCell>STT</StyledTableCell>
                <StyledTableCell align="left">Tên tiện ích</StyledTableCell>
                <StyledTableCell align="right">Sửa</StyledTableCell>
                <StyledTableCell align="left">Xóa</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {Array.isArray(amenity) && amenity?.map((item, index) => (
                <StyledTableRow key={item.id}>
                  <StyledTableCell component="th" scope="row">
                    {amentityCount + index}
                  </StyledTableCell>
                  <StyledTableCell align="left" style={{ width: '360px'}}>{item?.name}</StyledTableCell>
                  <StyledTableCell align="right" onClick={() => handleOpenUpdateAmentity(item)}><button ><IcUpdate/></button></StyledTableCell>
                  <Popconfirm
                    title="Xóa tiện ích"
                    description="Bạn có chắc chắc muốn xóa tiện ích này không?"
                    onConfirm={() => handleDeleteAmenity(item.id)}
                    okText="Ok"
                    cancelText="Hủy"
                  >
                  <StyledTableCell><button><IcDelete/></button></StyledTableCell>
                  </Popconfirm>
                </StyledTableRow>
              ))}
              <Amentity
                open={updateAmentityOpen}
                onClose={handleCloseUpdateAmentity}
                onUpdateAmentity={handleUpdateAmentity}
                amentity={dataAmentity}
                setAmentity={setDataAmentity}
              />
            </TableBody>
          </Table>
        </TableContainer>

        <div className='mt-3'>
          <Button variant="outlined" onClick={handleOpenAddAmentity}>
            Thêm tiện ích
          </Button>
          <Amentity
            open={addAmentityOpen}
            onClose={handleCloseAddAmentity}
            onAddAmentity={handleAddAmentity}
            amentity={dataAmentity}
            setAmentity={setDataAmentity}
          />
        </div>
      </div>
    </div>
    ) : (
      <div> null </div>
    )
  );
};
export default QLDichVuContainer;
