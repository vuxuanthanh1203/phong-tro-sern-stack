import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'


import { text } from '../../utils/constant'
import { Location } from '../../components'
import { ListPost, ListSidebar, Pagination } from './index'
import * as actions from '../../store/actions'


const HomePage = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(actions.getPrices())
        dispatch(actions.getAcreage())
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

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
                    <Pagination />
                </div>
                <ListSidebar />
            </div>
        </div>
    )
}

export default HomePage