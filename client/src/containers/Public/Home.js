import React from 'react'
import { Outlet } from 'react-router-dom'

import Header from './Header'
import Navigation from './Navigation'

const Home = () => {
    return (
        <div className="w-full flex flex-col items-center h-full">
            <Header />
            <Navigation />
            <div className="w-1100 flex flex-col items-center justify-center mt-3">
                <Outlet />
            </div>
        </div>
    )
}

export default Home