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

const confirm = (e) => {
  console.log(e);
  // 
  message.success('Xóa thành công');
};


const QLDichVuContainer = () => {

  const [service, setService] = React.useState([
    { id: '1', name: 'Dịch vụ phòng', description: '...................................................'},
    { id: '2', name: 'Trung tâm thể dục', description: '...................................................'},
    { id: '3', name: 'Trung tâm thể dục', description: '...................................................'},
    { id: '4', name: 'Dịch vụ phòng', description: '...................................................'},
    { id: '5', name: 'Dịch vụ phòng', description: '...................................................'},
    { id: '6', name: 'Trung tâm thể dục', description: '...................................................'},
    { id: '7', name: 'Dịch vụ phòng', description: '...................................................'},
    { id: '8', name: 'Trung tâm thể dục', description: '...................................................'},
    { id: '9', name: 'Dịch vụ phòng', description: '...................................................'},
    { id: '10', name: 'Dịch vụ phòng', description: '...................................................'},
  ]);
  
  const [amentity, setAmentity] = React.useState([
    {id:'1', name:'Điều hòa nhiệt độ'},
    {id:'2', name:'Điều hòa nhiệt độ'},
    {id:'3', name:'Điều hòa nhiệt độ'},
    {id:'4', name:'Điều hòa nhiệt độ'},
    {id:'5', name:'Điều hòa nhiệt độ'},
    {id:'6', name:'Điều hòa nhiệt độ'},
    {id:'7', name:'Điều hòa nhiệt độ'},
  ]);

  const [serviceCount, setServiceCount] = React.useState(1);
  const [amentityCount, setAmentityCount] = React.useState(1);


  const handleIncrementServiceCount = () => {
    setServiceCount(serviceCount + 1);
  };

  const handleIncrementAmentityCount = () => {
    setAmentityCount(amentityCount + 1);
  };

  //Service 
  const [addServiceOpen, setAddServiceOpen] = React.useState(false);
  const [updateServiceOpen, setUpdateServiceOpen] = React.useState(false);
  const [selectedService, setSelectedService] = React.useState(null);

  // add service
  const handleOpenAddService = () => {
    setSelectedService(null);
    setAddServiceOpen(true);
  };
  const handleAddService = () => {
    setAddServiceOpen(false);
  };
  const handleCloseAddService = () => {
    setAddServiceOpen(false);
  };

  // Update service
  const handleOpenUpdateService = (item) => {
    setSelectedService(item);
    setUpdateServiceOpen(true);
  };
  const handleUpdateService = () => {
    // action 
    setUpdateServiceOpen(false);
  };
  const handleCloseUpdateService = () => {
    setUpdateServiceOpen(false);
  };

  //Amentity
  const [addAmentityOpen, setAddAmentityOpen] = React.useState(false);
  const [updateAmentityOpen, setUpdateAmentityOpen] = React.useState(false);
  const [selectedAmentity, setSelectedAmentity] = React.useState(null);

  // Add Amentity
  const handleOpenAddAmentity = () => {
    setSelectedAmentity(null);
    setAddAmentityOpen(true);
  };
  const handleAddAmentity = () => {
    setAddAmentityOpen(false);
  };
  const handleCloseAddAmentity = () => {
    setAddAmentityOpen(false);
  };

  // Update Amentity
  const handleOpenUpdateAmentity = (item) => {
    setSelectedAmentity(item);
    setUpdateAmentityOpen(true);
  };
  const handleUpdateAmentity = () => {
    // action 
    setUpdateAmentityOpen(false);
  };
  const handleCloseUpdateAmentity = () => {
    setUpdateAmentityOpen(false);
  };

  return (
    <div className={`${styles['home']} flex justify-between`}>
      <div >
        <h2 className="ml-80 text-2xl font-bold text-sky-900 mb-2">Dịch vụ</h2>
        <TableContainer component={Paper} className="mr-10">
          <Table sx={{ minWidth: 650 }}>
            <TableHead>
              <TableRow>
                <StyledTableCell>STT</StyledTableCell>
                <StyledTableCell align="left">Tên dịch vụ</StyledTableCell>
                <StyledTableCell align="left">Mô tả</StyledTableCell>
                <StyledTableCell align="right">Sửa</StyledTableCell>
                <StyledTableCell align="left">Xóa</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {service.map((item, index) => (
                <StyledTableRow key={item.id}>
                  <StyledTableCell component="th" scope="row">
                    {serviceCount + index}
                  </StyledTableCell>
                  <StyledTableCell align="left">{item.name}</StyledTableCell>
                  <StyledTableCell align="left">{item.description}</StyledTableCell>
                  <StyledTableCell align="right" onClick={() => handleOpenUpdateService(item)}><button><IcUpdate/></button></StyledTableCell>
                  
                  <Popconfirm
                    title="Xóa dịch vụ"
                    description="Bạn có chắc chắc muốn xóa dịch vụ này không?"
                    onConfirm={confirm}
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
                service={selectedService}
                setService={setSelectedService}
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
          />
        </div>
      </div>

      <div>
        <h2 className="ml-40 text-2xl font-bold text-teal-800 mb-2">Tiện ích</h2>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 450 }}>
            <TableHead>
              <TableRow>
                <StyledTableCell>STT</StyledTableCell>
                <StyledTableCell align="left">Tên tiện ích</StyledTableCell>
                <StyledTableCell align="right">Sửa</StyledTableCell>
                <StyledTableCell align="left">Xóa</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {amentity.map((item, index) => (
                <StyledTableRow key={item.id}>
                  <StyledTableCell component="th" scope="row">
                    {amentityCount + index}
                  </StyledTableCell>
                  <StyledTableCell align="left">{item.name}</StyledTableCell>
                  <StyledTableCell align="right" onClick={() => handleOpenUpdateAmentity(item)}><button ><IcUpdate/></button></StyledTableCell>
                  <Popconfirm
                    title="Xóa tiện ích"
                    description="Bạn có chắc chắc muốn xóa tiện ích này không?"
                    onConfirm={confirm}
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
                amentity={selectedAmentity}
                setAmentity={setSelectedAmentity}
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
          />
        </div>
      </div>
    </div>
  );
};
export default QLDichVuContainer;
