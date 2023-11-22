import React from 'react'

import { text } from '../../utils/constant'
import { Location } from '../../components'
import ListPost from './ListPost'

const HomePage = () => {
    return (
        <div className='w-full flex flex-col gap-3'>
            <div className='flex flex-col items-center justify-center gap-2'>
                <h1 className='text-[28px] font-bold'>{text.HOME_TITLE}</h1>
                <p className='text-sm text-[#65676b]'>{text.HOME_DESCRIPTION}</p>
            </div>
            <Location />
            <div className='w-full flex gap-4'>
                <div className='w-[70%]'>
                    <ListPost />
                </div>
                <div className='w-[30%] bg-white'>
                    Sidebar
                </div>
            </div>
        </div>
    )
}

export default HomePage