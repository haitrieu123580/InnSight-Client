import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Paper from '@mui/material/Paper';
import Draggable from 'react-draggable';
import Breadcrumb from '../../components/admin-qltaikhoan/Breadcrumb.tsx';
import image from '../../../assets/images/user.png';
import styles from './DetailUserContainer.module.scss';
import AdminAction from '../../../redux/admin/action.js';
import ShowToastify from '../../../utils/ShowToastify.js';
import moment from 'moment/moment';

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

const Profile = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { detailUser } = useSelector((state) => state.Admin) || {};
  const [open, setOpen] = useState(false);

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

  useEffect(() => {
    dispatch({
      type: AdminAction.DETAIL_USER,
      id: id,
      onSuccess: () => {
      },
      onError: () => {
        ShowToastify.showErrorToast('Xảy ra lỗi, xin thử lại sau');
      },
    });
  }, []);

  const handleDelete = () => {
    dispatch({
      type: AdminAction.DELETE_USER,
      id : id,
        onSuccess: () => {
          navigate('/qltaikhoan');
        },
        onError: () => {
            ShowToastify.showErrorToast("Xảy ra lỗi, xin thử lại sau");
        }
    });
  };

  return (
    <>
      <Breadcrumb pageName="Chi tiết" />
      <div className="overflow-hidden rounded-sm border border-stroke shadow-default">
        <div className="px-4 pb-6 text-center lg:pb-8 xl:pb-11.5">
          {detailUser ? (
            <>
              <div className="relative z-30 mx-auto -mt-22 h-30 w-full max-w-30 rounded-full bg-white/20 p-1 backdrop-blur sm:h-44 sm:max-w-44 sm:p-3">
                <div className="relative drop-shadow-2">
                  <img
                    src={image}
                    className={`mt-5 m-auto ${styles.image}`}
                    alt="User Avatar"
                  />
                </div>
              </div>

              <div className="mt-4">
                <h3 className="mb-1.5 text-2xl font-semibold text-black">
                  {detailUser.fullName}
                </h3>
                <p className="font-medium">
                  {role} (từ {detailUser.dateCreated !== null ? moment(detailUser.dateCreated).format('DD-MM-YYYY') : 'null'})
                </p>
                <div className="border py-1 shadow-1 dark:bg-[#37404F]"></div>

                <div className="flex items-center text-lg mt-4">
                  <div className="flex ml-20 w-96">
                    <h2 className="font-semibold ml-10">Email:</h2>
                    <span className="ml-2 ">{detailUser.email}</span>
                  </div>
                  <div className="flex ml-40">
                    <h2 className="font-semibold ml-10">Số điện thoại:</h2>
                    <span className="ml-2">{detailUser.phoneNumber !== null ? detailUser.phoneNumber : 'null'}</span>
                  </div>
                </div>

                <div className="flex items-center text-lg">
                  <div className="flex w-96 ml-20">
                    <h2 className="font-semibold ml-10">Ngày sinh:</h2>
                    <span className="ml-2">{detailUser.dateOfBirth !== null ? detailUser.dateOfBirth : 'null'}</span>
                  </div>

                  <div className="flex ml-40">
                    <h2 className="font-semibold ml-10">Giới tính:</h2>
                    <span className="ml-2">{detailUser.gender !== null ? detailUser.gender : 'null'}</span>
                  </div>
                </div>
              </div>
              {role === 'CUSTOMER' ? (
                <div className='text-lg'>
                  <div className="flex ml-20">
                    <h2 className="font-semibold ml-10">Số đơn đặt phòng:</h2>
                    <span className="ml-2">{detailUser.reservationCount}</span>
                  </div>
                  {detailUser.reservationCount ? (
                    detailUser.reservationList.map((reservation, index) => (
                      <div>
                        <li key={index} className='text-left pl-36'>
                          <span>Mã đặt phòng:</span>
                          <span className='font-bold ml-2'>{reservation}</span>
                        </li>
                      </div>
                    ))
                  ) : (
                    <div></div>
                  )}
                </div>
              ) : (
                <>
                  <div className=' text-lg'>
                    <div className="flex ml-20">
                      <h2 className="font-semibold ml-10">
                        Số khách sạn sở hữu:
                      </h2>
                      <span className="ml-2">{detailUser && detailUser.hotelList ? detailUser.hotelList.length : 0}</span>
                    </div>
                    {detailUser.hotelList ? (
                      detailUser.hotelList.map((hotel, index) => (
                        <li key={index} className='text-left pl-36'>
                          <span>Tên khách sạn:</span>
                          <span className='font-bold ml-2'>{hotel?.hotelName}</span>
                          <span className='ml-5'>({hotel?.status})</span>
                        </li>
                      ))
                    ) : (
                      <div></div>
                    )}
                  </div>
                  <div className=' text-lg mt-3'>
                    <div className="flex ml-20">
                      <h2 className="font-semibold ml-10">
                        Số đơn đặt phòng:
                      </h2>
                      <span className="ml-2">{detailUser.reservationCount}</span>
                    </div>
                    {detailUser.reservationCount ? (
                      detailUser.reservationList.map((reservation, index) => (
                        <li key={index} className='text-left pl-36'>
                          <span>Tên khách sạn:</span>
                          <span className='font-bold ml-2'>{reservation?.hotelName}</span>
                          <span className='ml-5'>({reservation?.status})</span>
                        </li>
                      ))
                    ) : (
                      <div></div>
                    )}
                  </div>
                </>
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
              Bạn có chắc chắn muốn xóa?
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button autoFocus onClick={handleClose} color='secondary'>
              Hủy
            </Button>
            <Button onClick={handleDelete} color='error'>
              Xóa
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    </>
  );
};

export default Profile;
