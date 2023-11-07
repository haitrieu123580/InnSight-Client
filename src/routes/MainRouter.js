import HomePage from "../pages/home-page/HomePage";
import MainLayout from "../shared/components/layout/MainLayout";
import HostLayout from "../shared/components/layout/HostLayout/HostLayout";
import ResultPage from "../pages/result-page/ResultPage";
import HotelPage from "../pages/hotel/HotelPage";
import SigninPage from "../pages/signin-page/SigninPage";
import SigninLayout from "../shared/components/layout/SigninLayout";
import SignupPage from "../pages/signup-page/SignupPage"; 
import SettingPage from "../pages/user-settings-page/SettingPage";
import RegisterHost1 from "../pages/host-pages/register-1/RegisterHost1";
import RegisterHost2 from "../pages/host-pages/register-2/RegisterHost2";
import RegisterHost3 from "../pages/host-pages/register-3/RegisterHost3";
import RegisterHost4 from "../pages/host-pages/register-4/RegisterHost4";
import RegisterHost5 from "../pages/host-pages/register-5/RegisterHost5";
import HostRegisterHomePage from "../pages/host-pages/register-home-page/HostRegisterHomePage";
import RegisterListSection from "../pages/host-pages/register-list-section/RegisterListSection";
import AddRoom from "../pages/host-pages/add-room/AddRoom";
import AddRoomPrice from "../pages/host-pages/add-room-price/AddRoomPrice";
import AddCancelPolicy from "../pages/host-pages/add-cancel-policy/AddCancelPolicy";
import AddRoomImage from "../pages/host-pages/add-room-image/AddRoomImage"
import RegisterFinished from "../pages/host-pages/register-finished/RegisterFinished";
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
        path: '/mysettings',
        component: SettingPage,
        layout: SigninLayout,
    },

  {
    path: "/host",
    component:HostRegisterHomePage ,
    layout: HostLayout,
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
];
const privateRoutes = [];
export { publicRoutes, privateRoutes, protectedRoutes }

