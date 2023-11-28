import React, { useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'


import { text } from '../../utils/constant'
import { Location, SideBarItem } from '../../components'
import { ListPost, Pagination } from './index'
import * as actions from '../../store/actions'


const HomePage = () => {
    const [params] = useSearchParams()
    const { categories, prices, acreages } = useSelector(state => state.app)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(actions.getPrices())
        dispatch(actions.getAcreage())
    }, [dispatch])

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
                <div className='w-[30%] flex flex-col gap-4 justify-start items-center'>
                    <SideBarItem content={categories} title='Danh sách cho thuê' />
                    <SideBarItem content={prices} twoColumn spliceAt={4} title='Xem theo giá' />
                    <SideBarItem content={acreages} twoColumn spliceAt={3} title='Xem theo diện tích' />
                </div>
            </div>
        </div>
    )
}

export default HomePage