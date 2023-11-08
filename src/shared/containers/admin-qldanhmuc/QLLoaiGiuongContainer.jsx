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
import Bed from '../../components/admin-qldanhmuc/Bed';

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

const confirm = (e) => {
  console.log(e);
  // 
  message.success('Xóa thành công');
};


const QLLoaiGiuongContainer = () => {

  const [bed, setBed] = React.useState([
    { id: '1', name: 'Giường Đơn', description: '...................................................'},
    { id: '2', name: 'Giường Đôi', description: '...................................................'},
    { id: '3', name: 'Giường Đôi Lớn', description: '...................................................'},
    { id: '4', name: 'Giường Đôi Lớn', description: '...................................................'},
    { id: '5', name: 'Giường Đơn', description: '...................................................'},
    { id: '6', name: 'Giường Đôi Lớn', description: '...................................................'},
    { id: '7', name: 'Giường Đơn', description: '...................................................'},
    { id: '8', name: 'Giường Đôi', description: '...................................................'}
  ]);
  
  const [bedCount, setBedCount] = React.useState(1);
  const handleIncrementBedCount = () => {
    setBedCount(bedCount + 1);
  };

  //Bed
  const [addBedOpen, setAddBedOpen] = React.useState(false);
  const [updateBedOpen, setUpdateBedOpen] = React.useState(false);
  const [selectedBed, setSelectedBed] = React.useState(null);

  // Add Bed
  const handleOpenAddBed = () => {
    setSelectedBed(null);
    setAddBedOpen(true);
  };
  const handleAddBed = () => {
    setAddBedOpen(false);
  };
  const handleCloseAddBed = () => {
    setAddBedOpen(false);
  };

  // Update Bed
  const handleOpenUpdateBed = (item) => {
    setSelectedBed(item);
    setUpdateBedOpen(true);
  };
  const handleUpdateBed = () => {
    setUpdateBedOpen(false);
  };
  const handleCloseUpdateBed = () => {
    setUpdateBedOpen(false);
  };

  return (
      <div> 
        <h2 className={'items-center text-2xl font-bold text-sky-900 mb-2 justify-center'}>Loại giường</h2>
        <TableContainer component={Paper} className="mr-14">
          <Table sx={{  }}>
            <TableHead>
              <TableRow>
                <StyledTableCell>STT</StyledTableCell>
                <StyledTableCell align="center">Tên loại giường</StyledTableCell>
                <StyledTableCell align="center" style={{ width: 700 }}>Mô tả</StyledTableCell>
                <StyledTableCell align="right">Sửa</StyledTableCell>
                <StyledTableCell align="left">Xóa</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {bed.map((item, index) => (
                <StyledTableRow key={item.id}>
                  <StyledTableCell component="th" scope="row">
                    {bedCount + index}
                  </StyledTableCell>
                  <StyledTableCell align="left">{item.name}</StyledTableCell>
                  <StyledTableCell align="left" style={{ width: 700 }}>{item.description}</StyledTableCell>
                  <StyledTableCell align="right" onClick={() => handleOpenUpdateBed(item)}><button><IcUpdate/></button></StyledTableCell>
                  <Popconfirm
                    title="Xóa loại giường"
                    description="Bạn có chắc chắc muốn xóa loại giường này không?"
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
              <Bed
                open={updateBedOpen}
                onClose={handleCloseUpdateBed}
                onUpdateBed={handleUpdateBed}
                bed={selectedBed}
                setBed={setSelectedBed}
              />
            </TableBody>
          </Table>
        </TableContainer>

        <div className='mt-3'>
          <Button variant="outlined" onClick={handleOpenAddBed}>
            Thêm loại giường
          </Button>
          <Bed
            open={addBedOpen}
            onClose={handleCloseAddBed}
            onAddBed={handleAddBed}
          />
        </div>
      </div>
  );
};
export default QLLoaiGiuongContainer;
