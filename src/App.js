import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { publicRoutes, protectedRoutes, privateRoutes } from './routes/MainRouter';
import "./Common.scss";
import MainLayout from './shared/components/layout/MainLayout';
import { Fragment, Suspense } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Roles from './utils/Roles';
import { useSelector } from 'react-redux';
function App() {
  const { userRole, isLogin } = useSelector(state => state.Auth)
  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={true}
        newestOnTop={true}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        limit={1}
      />
      <Router>
        <div className='App'>
          <Routes>
            {/* Public Routes */}
            {publicRoutes.map((route, index) => {
              const Page = route.component;
              const Layout = route.layout;
              return (
                <Route
                  key={index}
                  path={route.path}
                  element={
                    <Layout>
                      <Suspense fallback={<div>Loading...</div>}>
                        <Page />
                      </Suspense>
                    </Layout>
                  }
                />
              );
            })}
            {/* Protected Routes */}
            {protectedRoutes.map((route, index) => {
              let Layout = MainLayout;
              if (route.layout) {
                Layout = route.layout;
              } else if (route.layout === null) {
                Layout = Fragment;
              }
              return (
                <Route
                  key={index}
                  path={route.path}
                  element={
                    isLogin ? (
                      <Layout>
                        <Suspense fallback={<div>Loading...</div>}>
                          {<route.component />}
                        </Suspense>
                      </Layout>
                    ) : (
                      <Navigate to="/sign-in" replace={true} />
                    )
                  }
                />
              );
            })}
            {/* private Routes */}
            {privateRoutes?.map((route, index) => {
              let Layout = MainLayout;
              if (route.layout) {
                Layout = route.layout;
              } else if (route.layout === null) {
                Layout = Fragment;
              }
              return (
                <Route
                  key={index}
                  path={route.path}
                  element={
                    isLogin && (userRole === Roles.host || userRole === Roles.admin) ? (
                      <Layout>

                        <Suspense fallback={<div>Loading...</div>}>
                          {<route.component />}
                        </Suspense>

                      </Layout>
                     ) : (
                       <Navigate to="/" replace={true} />
                    )
                  }
                />
              );
            })}
          </Routes>
        </div>
      </Router >
    </>

  );
}

export default App;

