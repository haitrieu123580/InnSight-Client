import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import styles from './Navbar.module.scss'
import IcGroup from '../icons/header-icons/IcGroup'
import IcAvatar from '../icons/header-icons/IcAvatar'
import IcPencil from '../icons/header-icons/IcPencil'
import roles from '../../../utils/Roles'
const Navbar = () => {
    const isLogin = localStorage.getItem('isLogin') || false;
    const role = window.atob(JSON.parse(localStorage.getItem("role")));
    return (
        <div className={`flex  ${styles['navbar']}`}>
            <Link
                to={'/'}
                className={`flex-shrink-0 flex items-center justify-center px-4 lg:px-6 xl:px-8 ${styles['logo-text']}`}>
                InnSight
            </Link>
            {/* <nav className="hidden md:block text-base md:text-sm lg:text-lg mr-auto"> */}
            <div className={`flex justify-center w-full pt-3`}>
                <Link
                    className={`${styles['nav-item']}`}
                    to={'/host'}>
                    <IcGroup />
                    <span className='ml-1'>Hợp tác với chúng tôi</span>
                </Link>
            </div>
            {/* </nav> */}

            <div className="flex items-center md:px-4 lg:px-6 xl:px-8">
                {!isLogin ? (
                    <>
                        <Link to={'/sign-in'} className={`py-2 px-4 drop-shadow-md inline-flex items-center justify-between ${styles['navbar-button']}`}>
                            <IcAvatar />
                            <span>Đăng nhập</span>
                        </Link>
                        <Link to={'/sign-up'} className={`py-2 px-10 drop-shadow-md inline-flex items-center justify-between ${styles['navbar-button']}`}>
                            <span className='ml-2'><IcPencil /></span>
                            <span className='pr-3'>Đăng ký</span>
                        </Link>
                    </>
                ) : (
                    <>
                        {role == roles.admin ? 
                        <Link to={'/qltaikhoan'}>
                            <h1 className='font-bold'>DASHBOARD</h1>
                        </Link>
                        : 
                        <Link to={'/host/dashboard'}>
                            <h1 className='font-bold'>DASHBOARD</h1>
                        </Link>
                        }
                        <div className="pr-10">
                            <Link to={'/mysettings/info'}>
                                <button
                                    className={`sm:py-2 sm:px-4 drop-shadow-md inline-flex items-center justify-between ${styles["button-account"]}`}
                                >
                                    <IcAvatar />
                                    <span>Tài khoản của bạn</span>
                                </button>
                            </Link>
                        </div>
                    </>
                )
                }
            </div>
        </div>
    )
}

export default Navbar