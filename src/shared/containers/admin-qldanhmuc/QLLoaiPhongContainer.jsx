import * as React from 'react';
import styles from './QLLoaiPhongContainer.module.scss'
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
import Typeroom from '../../components/admin-qldanhmuc/TypeRoom';

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


const QLLoaiPhongContainer = () => {

  const [typeroom, setTyperoom] = React.useState([
    { id: '1', name: 'Phòng 2 Giường Đơn', description: '...................................................'},
    { id: '2', name: 'Phòng Superior 2 giường', description: '...................................................'},
    { id: '3', name: 'Phòng Deluxe Giường Đôi', description: '...................................................'},
    { id: '4', name: 'Phòng Superior 2 giường', description: '...................................................'},
    { id: '5', name: 'Phòng 2 Giường Đơn', description: '...................................................'},
    { id: '6', name: 'Phòng Deluxe Giường Đôi', description: '...................................................'},
    { id: '7', name: 'Phòng 2 Giường Đơn', description: '...................................................'},
    { id: '8', name: 'Phòng Deluxe Giường Đôi', description: '...................................................'},
    { id: '9', name: 'Phòng Superior 2 giường', description: '...................................................'},
    { id: '10', name: 'Phòng Superior 2 giường', description: '...................................................'},
  ]);
  
  const [typeroomCount, setTyperoomCount] = React.useState(1);
  const handleIncrementTyperoomCount = () => {
    setTyperoomCount(typeroomCount + 1);
  };

  //Typeroom
  const [addTyperoomOpen, setAddTyperoomOpen] = React.useState(false);
  const [updateTyperoomOpen, setUpdateTyperoomOpen] = React.useState(false);
  const [selectedTyperoom, setSelectedTyperoom] = React.useState(null);

  // Add Typeroom
  const handleOpenAddTyperoom = () => {
    setSelectedTyperoom(null);
    setAddTyperoomOpen(true);
  };
  const handleAddTyperoom = () => {
    setAddTyperoomOpen(false);
  };
  const handleCloseAddTyperoom = () => {
    setAddTyperoomOpen(false);
  };

  // Update Typeroom
  const handleOpenUpdateTyperoom = (item) => {
    setSelectedTyperoom(item);
    setUpdateTyperoomOpen(true);
  };
  const handleUpdateTyperoom = () => {
    setUpdateTyperoomOpen(false);
  };
  const handleCloseUpdateTyperoom = () => {
    setUpdateTyperoomOpen(false);
  };

  return (
      <div> 
        <h2 className={'items-center text-2xl font-bold text-sky-900 mb-2 justify-center'}>Loại phòng</h2>
        <TableContainer component={Paper} className="mr-14">
          <Table sx={{  }}>
            <TableHead>
              <TableRow>
                <StyledTableCell>STT</StyledTableCell>
                <StyledTableCell align="center">Tên loại phòng</StyledTableCell>
                <StyledTableCell align="center" style={{ width: 700 }}>Mô tả</StyledTableCell>
                <StyledTableCell align="right">Sửa</StyledTableCell>
                <StyledTableCell align="left">Xóa</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {typeroom.map((item, index) => (
                <StyledTableRow key={item.id}>
                  <StyledTableCell component="th" scope="row">
                    {typeroomCount + index}
                  </StyledTableCell>
                  <StyledTableCell align="left">{item.name}</StyledTableCell>
                  <StyledTableCell align="left" style={{ width: 700 }}>{item.description}</StyledTableCell>
                  <StyledTableCell align="right" onClick={() => handleOpenUpdateTyperoom(item)}><button><IcUpdate/></button></StyledTableCell>
                  <Popconfirm
                    title="Xóa loại phòng"
                    description="Bạn có chắc chắc muốn xóa loại phòng này không?"
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
              <Typeroom
                open={updateTyperoomOpen}
                onClose={handleCloseUpdateTyperoom}
                onUpdateTyperoom={handleUpdateTyperoom}
                typeroom={selectedTyperoom}
                setTyperoom={setSelectedTyperoom}
              />
            </TableBody>
          </Table>
        </TableContainer>

        <div className='mt-3'>
          <Button variant="outlined" onClick={handleOpenAddTyperoom}>
            Thêm loại phòng
          </Button>
          <Typeroom
            open={addTyperoomOpen}
            onClose={handleCloseAddTyperoom}
            onAddTyperoom={handleAddTyperoom}
          />
        </div>
      </div>
  );
};
export default QLLoaiPhongContainer;
