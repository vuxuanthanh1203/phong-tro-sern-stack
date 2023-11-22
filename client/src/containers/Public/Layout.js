import React from 'react'
import { Outlet } from 'react-router-dom'

import Header from './Header'
import { Navigation, Search } from './index'

const Layout = () => {
    return (
        <div className="w-full flex flex-col items-center h-full">
            <Header />
            <Navigation />
            <Search />
            <div className="w-4/5 flex flex-col items-start justify-start mt-3">
                <Outlet />
            </div>
        </div>
    )
}

export default Layout