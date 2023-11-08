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


const QLTamNhinContainer = () => {

  const [view, setView] = React.useState([
    { id: '1', name: 'Nhìn ra núi', description: '...................................................'},
    { id: '2', name: 'Nhìn ra địa danh nổi tiếng', description: '...................................................'},
    { id: '3', name: 'Nhìn ra thành phố', description: '...................................................'},
    { id: '4', name: 'Hướng nhìn sân trong', description: '...................................................'},
    { id: '5', name: 'Nhìn ra địa danh nổi tiếng', description: '...................................................'},
    { id: '6', name: 'Hướng nhìn sân trong', description: '...................................................'},
    { id: '7', name: 'Nhìn ra thành phố', description: '...................................................'},
    { id: '8', name: 'Nhìn ra địa danh nổi tiếng', description: '...................................................'}
  ]);
  
  const [viewCount, setViewCount] = React.useState(1);
  const handleIncrementViewCount = () => {
    setViewCount(viewCount + 1);
  };

  //View
  const [addViewOpen, setAddViewOpen] = React.useState(false);
  const [updateViewOpen, setUpdateViewOpen] = React.useState(false);
  const [selectedView, setSelectedView] = React.useState(null);

  // Add View
  const handleOpenAddView = () => {
    setSelectedView(null);
    setAddViewOpen(true);
  };
  const handleAddView = () => {
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
    setUpdateViewOpen(false);
  };
  const handleCloseUpdateView = () => {
    setUpdateViewOpen(false);
  };

  return (
      <div> 
        <h2 className={'items-center text-2xl font-bold text-sky-900 mb-2 justify-center'}>Tầm nhìn của phòng</h2>
        <TableContainer component={Paper} className="mr-14">
          <Table sx={{  }}>
            <TableHead>
              <TableRow>
                <StyledTableCell>STT</StyledTableCell>
                <StyledTableCell align="center">Tầm nhìn</StyledTableCell>
                <StyledTableCell align="center" style={{ width: 700 }}>Mô tả</StyledTableCell>
                <StyledTableCell align="right">Sửa</StyledTableCell>
                <StyledTableCell align="left">Xóa</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {view.map((item, index) => (
                <StyledTableRow key={item.id}>
                  <StyledTableCell component="th" scope="row">
                    {viewCount + index}
                  </StyledTableCell>
                  <StyledTableCell align="left">{item.name}</StyledTableCell>
                  <StyledTableCell align="left" style={{ width: 700 }}>{item.description}</StyledTableCell>
                  <StyledTableCell align="right" onClick={() => handleOpenUpdateView(item)}><button><IcUpdate/></button></StyledTableCell>
                  <Popconfirm
                    title="Xóa tầm nhìn"
                    description="Bạn có chắc chắc muốn xóa tầm nhìn này không?"
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
          />
        </div>
      </div>
  );
};
export default QLTamNhinContainer;
