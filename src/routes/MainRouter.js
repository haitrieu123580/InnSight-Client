import MainLayout from "../shared/components/layout/MainLayout";
import MainLayoutAdmin from "../shared/components/layout/MainLayoutAdmin";
import HostLayout from "../shared/components/layout/HostLayout/HostLayout";
import SinginLayout from "../shared/components/layout/SigninLayout";
import BookingLayout from "../shared/components/layout/booking-layout/BookingLayout";
import HostRegisterHomePage from "../pages/host-pages/register-home-page/HostRegisterHomePage";
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
const BookingPage = lazy(() => import('../pages/booking-pages/BookingPage1'))
const BookingPage2 = lazy(() => import('../pages/booking-pages/BookingPage2'))
const QLTaiKhoan = lazy(() => import('../pages/qltaikhoan/QLTaiKhoan'))
const DetailUser = lazy(() => import('../pages/qltaikhoan/DetailUser'))
const QLDichVu = lazy(() => import('../pages/qldichvu/QLDichVu'))
const QLLoaiPhong = lazy(() => import('../pages/qldanhmuc/QLLoaiPhong'))
const QLLoaiGiuong = lazy(() => import('../pages/qldanhmuc/QLLoaiGiuong'))
const QLTamNhin = lazy(() => import('../pages/qldanhmuc/QLTamNhin'))
const Thongke = lazy(() => import('../pages/admin-thongke/Thongke'))
const Setting = lazy(() => import('../pages/admin-setting/Setting'))
const AddAdmin = lazy(() => import('../pages/admin-addAdmin/AddAdmin'))
const Changepw = lazy(() => import('../pages/admin-ChangePW/Changepw'))
const Cancel1 = lazy(() => import('../pages/cancel/Cancel1'))
const Cancel2 = lazy(() => import('../pages/cancel/Cancel2'))
const Cancel3 = lazy(() => import('../pages/cancel/Cancel3'))
const Cancel4 = lazy(() => import('../pages/cancel/Cancel4'))
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
        layout: SinginLayout,
    },
    {
        path: '/sign-up',
        component: SignupPage,
        layout: SinginLayout,
    },
    {
        path: '/mysettings',
        component: SettingPage,
        layout: SinginLayout,
    },
    {
      path: '/admin',
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
      path: '/addAdmin',
      component: AddAdmin,
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
  {
      path: '/cancel/3',
      component: Cancel3,
      layout: MainLayout,
  },
  {
      path: '/cancel/4',
      component: Cancel4,
      layout: MainLayout,
  },
  {
    path: "/host",
    component: HostRegisterHomePage,
    layout: HostLayout,
  },
  {
    path: '/book',
    component: BookingPage,
    layout: BookingLayout,
  },
  {
    path: '/book/check',
    component: BookingPage2,
    layout: BookingLayout,
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
    path: '/mysettings',
    component: SettingPage,
    layout: SinginLayout,
  },
];
const privateRoutes = [];
export { publicRoutes, privateRoutes, protectedRoutes }
