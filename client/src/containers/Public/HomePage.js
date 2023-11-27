import React from 'react'
import { useSearchParams } from 'react-router-dom'

import { text } from '../../utils/constant'
import { Location } from '../../components'
import { ListPost, Pagination } from './index'


const HomePage = () => {
    const [params] = useSearchParams()

    return (
        <div className='w-full flex flex-col gap-3'>
            <div className='flex flex-col items-center justify-center gap-2'>
                <h1 className='text-[28px] font-bold'>{text.HOME_TITLE}</h1>
                <p className='text-sm text-[#65676b]'>{text.HOME_DESCRIPTION}</p>
            </div>
            <Location />
            <div className='w-full flex gap-4'>
                <div className='w-[70%]'>
                    <ListPost page={params.get('page') || 1} />
                    <Pagination page={params.get('page') || 1} />
                </div>
                <div className='w-[30%] bg-white'>
                    Sidebar
                </div>
            </div>
        </div>
    )
}

export default HomePage