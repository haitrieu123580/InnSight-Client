import { useState } from 'react';
import React from 'react'
import Header from '../admin-header/Header';
import Sidebar from '../sidebar/Sidebar.tsx';

const MainLayoutAdmin = ({ children }) => {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    return (
        <div className="dark:bg-boxdark-2 dark:text-bodydark">
            <div className='flex flex-col'>
                <div className="flex h-screen ">
                    <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
                    <div className="relative flex flex-1 flex-col overflow-y-auto ">
                        <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
                        <main>
                            <div className="mx-auto max-w-screen-2xl p-4 md:p-6 2xl:p-10">
                                {children}
                            </div>
                        </main>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default MainLayoutAdmin
