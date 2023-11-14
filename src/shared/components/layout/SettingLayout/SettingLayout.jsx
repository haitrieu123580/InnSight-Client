import React, { useState } from 'react'
import styles from './SettingLayout.module.scss';
import Navbar from '../../navbar/Navbar';
import Sidebar from '../../sidebar-settings-user/Sidebar'

const MainLayout = ({ children }) => {
    const [sidebarOpen, setSidebarOpen] = useState(false);
return (
        <div className='flex flex-col'>
            <div className='w-full'>
                <Navbar />
            </div>
            <div className={`${styles['content']} w-full flex`}>
                <div>
                <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
                </div>
                <div>
                    {children}
                </div>
            </div>
        </div>
    )
}
export default MainLayout
