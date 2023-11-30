import MainLayout from "../shared/components/layout/MainLayout";
import HostLayout from "../shared/components/layout/HostLayout/HostLayout";
import BookingLayout from "../shared/components/layout/booking-layout/BookingLayout";
import SigninLayout from "../shared/components/layout/SigninLayout";
import SettingLayout from "../shared/components/layout/SettingLayout/SettingLayout";
import MainLayoutAdmin from "../shared/components/layout/MainLayoutAdmin";
import { lazy } from 'react';
const HomePage = lazy(() => import('../pages/home-page/HomePage'))
const ResultPage = lazy(() => import('../pages/result-page/ResultPage'))
const HotelPage = lazy(() => import('../pages/hotel/HotelPage'))
const SigninPage = lazy(() => import('../pages/signin-page/SigninPage'))
const SignupPage = lazy(() => import('../pages/signup-page/SignupPage'))
const SettingPage = lazy(() => import('../pages/user-settings-page/SettingPage'))
const RegisterHost1 = lazy(() => import('../pages/host-pages/register-1/RegisterHost1'))
const RegisterHost2 = lazy(() => import('../pages/host-pages/register-2/RegisterHost2'))
const RegisterHost3 = lazy(() => import('../pages/host-pages/register-3/RegisterHost3'))
const RegisterHost4 = lazy(() => import('../pages/host-pages/register-4/RegisterHost4'))
const RegisterHost5 = lazy(() => import('../pages/host-pages/register-5/RegisterHost5'))
const HostRegisterHomePage = lazy(() => import('../pages/host-pages/register-home-page/HostRegisterHomePage'))
const RegisterListSection = lazy(() => import('../pages/host-pages/register-list-section/RegisterListSection'))
const AddRoom = lazy(() => import('../pages/host-pages/add-room/AddRoom'))
const AddRoomPrice = lazy(() => import('../pages/host-pages/add-room-price/AddRoomPrice'))
const AddCancelPolicy = lazy(() => import('../pages/host-pages/add-cancel-policy/AddCancelPolicy'))
const AddRoomImage = lazy(() => import('../pages/host-pages/add-room-image/AddRoomImage'))
const RegisterFinished = lazy(() => import('../pages/host-pages/register-finished/RegisterFinished'))
const BookingPage = lazy(() => import('../pages/booking-pages/BookingPage1'))
const BookingPage2 = lazy(() => import('../pages/booking-pages/BookingPage2'))
const BookingPage3 = lazy(() => import('../pages/booking-pages/BookingPage3'))
const BookingPage4 = lazy(() => import('../pages/booking-pages/BookingPage4'))
const QLTaiKhoan = lazy(() => import('../pages/qltaikhoan/QLTaiKhoan'))
const DetailUser = lazy(() => import('../pages/qltaikhoan/DetailUser'))
const QLDichVu = lazy(() => import('../pages/qldichvu/QLDichVu'))
const QLLoaiPhong = lazy(() => import('../pages/qldanhmuc/QLLoaiPhong'))
const QLLoaiGiuong = lazy(() => import('../pages/qldanhmuc/QLLoaiGiuong'))
const QLTamNhin = lazy(() => import('../pages/qldanhmuc/QLTamNhin'))
const Thongke = lazy(() => import('../pages/admin-thongke/Thongke'))
const Setting = lazy(() => import('../pages/admin-setting/Setting'))
const Changepw = lazy(() => import('../pages/admin-ChangePW/Changepw'))
const Cancel1 = lazy(() => import('../pages/cancel/Cancel1'))
const Cancel2 = lazy(() => import('../pages/cancel/Cancel2'))
const BookingHistory = lazy(() => import('../pages/user-settings-page/BookingHistory'))
const AccountAndPassword = lazy(() => import('../pages/user-settings-page/AccountAndPassword'))
const publicRoutes = [
    {
        path: '/',
        component: HomePage,
        layout: MainLayout,
    },
    {
        path: '/home',
        component: HomePage,
        layout: MainLayout,
    },
    {
        path: '/searchresults',
        component: ResultPage,
        layout: MainLayout,
    },
    {
        path: '/hotel/:id',
        component: HotelPage,
        layout: MainLayout,
    },
    {
        path: '/sign-in',
        component: SigninPage,
        layout: SigninLayout,
    },
    {
        path: '/sign-up',
        component: SignupPage,
        layout: SigninLayout,
    },
    {
      path: "/host",
      component: HostRegisterHomePage,
      layout: HostLayout,
    },
    {
      path: '/book/fill-info',
      component: BookingPage,
      layout: BookingLayout,
    },
    {
      path: '/book/check',
      component: BookingPage2,
      layout: BookingLayout,
    },
    {
      path: '/book/pay',
      component: BookingPage3,
      layout: BookingLayout,
    },
    {
      path: '/book/invoice',
      component: BookingPage4,
      layout: BookingLayout,
    },
    {
      path: '/book/invoice/detail',
      component: BookingPage4,
      layout: MainLayout,
    },
];
const protectedRoutes = [
  {
    path: "/host/register-1",
    component: RegisterHost1,
    layout: HostLayout,
  },
  {
    path: "/host/register-2",
    component: RegisterHost2,
    layout: HostLayout,
  },
  {
    path: "/host/register-3",
    component: RegisterHost3,
    layout: HostLayout,
  },
  {
    path: "/host/register-4",
    component: RegisterHost4,
    layout: HostLayout,
  },
  {
    path: "/host/register-5",
    component: RegisterHost5,
    layout: HostLayout,
  },
  {
    path: "/host/register-list-section/:sectionStatus",
    component: RegisterListSection,
    layout: HostLayout,
  },
  {
    path: "/host/add-room",
    component: AddRoom,
    layout: HostLayout,
  },
  {
    path: "/host/add-room-price",
    component: AddRoomPrice,
    layout: HostLayout,
  },
  {
    path: "/host/add-cancel-policy",
    component: AddCancelPolicy,
    layout: HostLayout,
  },
  {
    path: "/host/add-room-image",
    component: AddRoomImage,
    layout: HostLayout,
  },
  {
    path: "/host/register-finished",
    component: RegisterFinished,
    layout: HostLayout,
  },
  {
    path: '/mysettings/password',
    component: AccountAndPassword,
    layout: SettingLayout,
  },
  {
    path: '/mysettings/info',
    component: SettingPage,
    layout: SettingLayout,
  },
  {
    path: '/mysettings/history',
    component: BookingHistory,
    layout: SettingLayout,
  },
];
const privateRoutes = [
  {
    path: '/qltaikhoan',
    component: QLTaiKhoan,
    layout: MainLayoutAdmin,
  },
  {
    path: '/qltaikhoan/detail',
    component: DetailUser,
    layout: MainLayoutAdmin,
  },
  {
    path: '/qldichvu',
    component: QLDichVu,
    layout: MainLayoutAdmin,
  },
  {
    path: '/qldanhmuc/loai_phong',
    component: QLLoaiPhong,
    layout: MainLayoutAdmin,
  },
  {
    path: '/qldanhmuc/loai_giuong',
    component: QLLoaiGiuong,
    layout: MainLayoutAdmin,
  },
  {
    path: '/qldanhmuc/tam_nhin',
    component: QLTamNhin,
    layout: MainLayoutAdmin,
  },
  {
    path: '/admin_thongke',
    component: Thongke,
    layout: MainLayoutAdmin,
  },
  {
    path: '/admin_setting',
    component: Setting,
    layout: MainLayoutAdmin,
  },
  {
    path: '/admin_changepw',
    component:Changepw,
    layout: MainLayoutAdmin,
  },
  {
  path: '/cancel/1',
  component: Cancel1,
  layout: MainLayout,
  },
  {
    path: '/cancel/2',
    component: Cancel2,
    layout: MainLayout,
  },
 
];
export { publicRoutes, privateRoutes, protectedRoutes }