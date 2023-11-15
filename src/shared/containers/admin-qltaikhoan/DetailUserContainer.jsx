import Breadcrumb from '../../components/admin-qltaikhoan/Breadcrumb.tsx';
import image from '../../../assets/images/user.png';
import styles from './DetailUserContainer.module.scss'
import { useLocation } from 'react-router-dom';
import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Paper from '@mui/material/Paper';
import Draggable from 'react-draggable';

function PaperComponent(props) {
  return (
    <Draggable
      handle="#draggable-dialog-title"
      cancel={'[class*="MuiDialogContent-root"]'}
    >
      <Paper {...props} />
    </Draggable>
  );
}

const data = [
    { id: '1', name: 'Nguyễn Thị Thu Thuyên',email:'abc@gmail.com',phone_number:'098123723', date_of_birth:'17/05/2002',gender:'Nữ',created_at:'21/2/2021', role: 'Khách hàng'},
    { id: '2', name: 'Nguyễn Thị Thu Thuyên',email:'abc@gmail.com',phone_number:'098123723', date_of_birth:'17/05/2002',gender:'Nữ',created_at:'21/2/2021', role: 'Chủ khách sạn'},
    { id: '3', name: 'Nguyễn Thị Thu Thuyên',email:'abc@gmail.com',phone_number:'098123723', date_of_birth:'17/05/2002',gender:'Nữ',created_at:'21/2/2021', role: 'Khách hàng'},
    { id: '4', name: 'Nguyễn Thị Thu Thuyên',email:'abc@gmail.com',phone_number:'098123723', date_of_birth:'17/05/2002',gender:'Nữ',created_at:'21/2/2021', role: 'Khách hàng'},
    { id: '5', name: 'Nguyễn Thị Thu Thuyên',email:'abc@gmail.com',phone_number:'098123723', date_of_birth:'17/05/2002',gender:'Nữ',created_at:'21/2/2021', role: 'Chủ khách sạn'},
    { id: '6', name: 'Nguyễn Thị Thu Thuyên',email:'abc@gmail.com',phone_number:'098123723', date_of_birth:'17/05/2002',gender:'Nữ',created_at:'21/2/2021', role: 'Chủ khách sạn'},
    { id: '7', name: 'Nguyễn Thị Thu Thuyên',email:'abc@gmail.com',phone_number:'098123723', date_of_birth:'17/05/2002',gender:'Nữ',created_at:'21/2/2021', role: 'Khách hàng'},
    { id: '8', name: 'Nguyễn Thị Thu Thuyên',email:'abc@gmail.com',phone_number:'098123723', date_of_birth:'17/05/2002',gender:'Nữ',created_at:'21/2/2021', role: 'Khách hàng'},
];
const invoice = [
    { id: '1', user_id:'1' },
    { id: '1', user_id:'2' },
    { id: '1', user_id:'2' },
    { id: '1', user_id:'1' },
    { id: '1', user_id:'2' },
];
const hotel = [
    { id: '1', user_id:'1', name:'abc' },
    { id: '2', user_id:'2', name:'abc' },
    { id: '3', user_id:'1', name:'abc' },
    { id: '2', user_id:'2', name:'abc' },
    { id: '1', user_id:'1', name:'abc' },
    { id: '1', user_id:'1', name:'abc' },
];


const UserInfo = ({ user }) => {
    
    return (
        <>
                <div className="relative z-30 mx-auto -mt-22 h-30 w-full max-w-30 rounded-full bg-white/20 p-1 backdrop-blur sm:h-44 sm:max-w-44 sm:p-3">
                    <div className="relative drop-shadow-2">
                    <img src={image} className={`mt-5 m-auto ${styles.image}`} />
                    </div>
                </div>
                <div className="mt-4">
                    <h3 className="mb-1.5 text-2xl font-semibold text-black">
                    {user.name} 
                    </h3>
                    <p className="font-medium">{user.role} (từ {user.created_at})</p>
                    <div className="border py-1 shadow-1  dark:bg-[#37404F]">
                    </div>

                    <div className='flex items-center text-lg mt-4'>
                        <div className="flex ml-20">
                            <h2 className="font-semibold ml-10">Email:</h2> 
                            <span className="ml-2">{user.email}</span>
                        </div>
                        <div className="flex ml-80">
                            <h2 className="font-semibold ml-10">Số điện thoại:</h2> 
                            <span className="ml-2">{user.phone_number}</span>
                        </div>
                    </div>
                    <div className='flex items-center text-lg'>
                        <div className="flex ml-20">
                            <h2 className="font-semibold ml-10">Ngày sinh:</h2> 
                            <span className="ml-2">{user.date_of_birth}</span>
                        </div>
                        <div className="flex ml-80">
                            <h2 className="font-semibold ml-10">Giới tính:</h2> 
                            <span className="ml-2">{user.gender}</span>
                        </div>
                    </div>
                    
                </div>
            
      </>
    );
};

const Profile = () => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const id = searchParams.get('id');
    const role = searchParams.get('role');
    const foundItem = data.find(item => item.id === id);
    const inv = invoice.filter(item => item.user_id === id).length;
    const hotl = hotel.filter(item => item.user_id === id).length;
    const hotelNames = hotel.filter(item => item.user_id === id).map(item => item.name);
    return (
      <>
        <Breadcrumb pageName="Chi tiết" />
        <div className="overflow-hidden rounded-sm border border-stroke  shadow-default ">
            <div className="px-4 pb-6 text-center lg:pb-8 xl:pb-11.5">
                {foundItem ? (
                <>
                    <UserInfo user={foundItem} />
                    {role === 'Khách hàng' ? (
                    <div className='flex items-center text-lg'>
                        <div className="flex ml-20">
                        <h2 className="font-semibold ml-10">Số đơn đặt phòng:</h2> 
                        <span className="ml-2">{inv}</span>
                        </div>
                    </div>
                    ) : (
                    <div className=' text-lg'>
                        <div className="flex ml-20">
                        <h2 className="font-semibold ml-10">Số khách sạn sở hữu:</h2> 
                        <span className="ml-2">{hotl}</span>
                        </div>
                        <div className=''>
                            {hotelNames.map((name, index) => (
                            <li
                                key={index}>{name}
                            </li>
                            ))}
                        </div>
                    </div>
                    
                    )}
                </>
                ) : (
                <p>Không tìm thấy thông tin</p>
                )}
            </div>
        </div>
        <div>
      <Button variant="outlined" onClick={handleClickOpen} color='error'>
        Xóa
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        PaperComponent={PaperComponent}
        aria-labelledby="draggable-dialog-title"
      >
        <DialogTitle style={{ cursor: 'move' }} id="draggable-dialog-title">
          Xóa dữ liệu người dùng
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            Bạn có chắc chắn muốn xóa ?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose} color='secondary'>
            Hủy
          </Button>
          <Button onClick={handleClose} color='error'>Xóa</Button>
        </DialogActions>
      </Dialog>
    </div>
      </>
    );
  };

export default Profile;
