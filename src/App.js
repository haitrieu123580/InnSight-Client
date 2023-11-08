import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { publicRoutes, protectedRoutes } from './routes/MainRouter';
import "./Common.scss";
import { ProtectedRoute } from './routes/ProtectedRoute';
import MainLayout from './shared/components/layout/MainLayout';
import { Fragment, Suspense } from 'react';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function App() {
  // useEffect(() => {
  //   const handleBeforeUnload = (event) => {
  //     localStorage.removeItem('role');
  //     localStorage.removeItem('Token');
  //   };
  //   window.addEventListener('beforeunload', handleBeforeUnload);

  //   return () => {
  //     window.removeEventListener('beforeunload', handleBeforeUnload);
  //   };
  // }, []);
  const user = true;
  const { userRole } = useSelector(state => state.Auth)
  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
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
                    // userRole === 'host' ? (
                    <Layout>
                      <ProtectedRoute user={userRole === 'host' || true}>
                        <Suspense fallback={<div>Loading...</div>}>
                          {<route.component />}
                        </Suspense>
                      </ProtectedRoute>
                    </Layout>
                    // ) : (
                    //   <Navigate to="/" replace={true} />
                    // )
                  }
                />
              );
            })}
          </Routes>
        </div>
      </Router>
    </>

  );
}

export default App;
