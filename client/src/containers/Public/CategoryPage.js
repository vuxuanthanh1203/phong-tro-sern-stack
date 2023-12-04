import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useLocation } from 'react-router-dom'

import { Location, RelatedList, SideBarItem } from '../../components'
import { ListPost, Pagination } from './index'
import { convertToSlug } from '../../utils/common/convertToSlug'

const CategoryPage = () => {
    const { categories, prices, acreages } = useSelector(state => state.app)
    const [categoryCode, setCategoryCode] = useState('')
    const [currentCategory, setCurrentCategory] = useState({})
    const location = useLocation()

    useEffect(() => {
        const category = categories?.find(item => `/${convertToSlug(item.value)}` === location.pathname)
        console.log(category);
        setCurrentCategory(category)
        if (category) {
            setCategoryCode(category.code)
        }

    }, [categories, location])

    return (
        <div className='w-full flex flex-col gap-3'>
            <div className='flex flex-col items-center justify-center gap-2'>
                <h1 className='text-[28px] font-bold'>{currentCategory?.header}</h1>
                <p className='text-sm text-[#65676b]'>{currentCategory?.subheader}</p>
            </div>
            <Location />
            <div className='w-full flex gap-4'>
                <div className='w-[70%]'>
                    <ListPost categoryCode={categoryCode} />
                    <Pagination />
                </div>
                <div className='w-[30%] flex flex-col gap-4 justify-start items-center'>
                    <SideBarItem content={prices} type='priceCode' twoColumn title='Xem theo giá' />
                    <SideBarItem content={acreages} type='acreageCode' twoColumn title='Xem theo diện tích' />
                    <RelatedList />
                </div>
            </div>
        </div>
    )
}

export default CategoryPage