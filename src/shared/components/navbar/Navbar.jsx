import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import styles from './Navbar.module.scss'
import IcHotel from '../icons/header-icons/IcHotel'
import IcSell from '../icons/header-icons/IcSell'
import IcGroup from '../icons/header-icons/IcGroup'
import IcAvatar from '../icons/header-icons/IcAvatar'
import IcPencil from '../icons/header-icons/IcPencil'
const Navbar = () => {
    const isLogin = localStorage.getItem('isLogin')||false;
    return (
        <div className={`flex  ${styles['navbar']}`}>
            <Link
                to={'/'}
                className={`flex-shrink-0 flex items-center justify-center px-4 lg:px-6 xl:px-8 ${styles['logo-text']}`}>
                InnSight
            </Link>
            <nav className="hidden md:block text-base md:text-sm lg:text-lg mr-auto">
                <div className={`grid grid-cols-3 gap-1 items-center pt-3`}>
                    <Link
                        className={`${styles['nav-item']} pl-44`}
                        to={'/home'}>
                        <IcHotel />
                        <span className='ml-1'>Lưu trú</span>
                    </Link>

                    <Link
                        className={`${styles['nav-item']}`}
                        to={'/home'}>
                        <IcSell />
                        <span className='ml-1'>Ưu đãi</span>
                    </Link>

                    <Link
                        className={`${styles['nav-item']}`}
                        to={'/host'}>
                        <IcGroup />
                        <span className='ml-1'>Hợp tác với chúng tôi</span>
                    </Link>
                </div>
            </nav>

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
                ):(
                    <>
                    <div className="pr-10">
                        <Link to={'/mysettings/info'}>
                            <button
                                className={`sm:py-2 sm:px-4 drop-shadow-md inline-flex items-center justify-between ${styles["button-account"]}`}
                            >
                                <IcAvatar />
                                {/* <span>{name !== null ? name : email}</span> */}
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