import React from 'react'
import { Outlet } from 'react-router-dom'

import Header from './Header'
import { Navigation, Search } from './index'
import { Contact, Intro } from '../../components'

const Layout = () => {
    return (
        <div className="w-full flex flex-col gap-6 items-center h-full">
            <Header />
            <Navigation />
            <Search />
            <div className="w-4/5 flex flex-col items-start justify-start">
                <Outlet />
            </div>
            <Intro />
            <Contact />
            <div className="h-12"></div>
        </div>
    )
}

export default Layout