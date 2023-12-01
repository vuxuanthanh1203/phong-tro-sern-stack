import React, { memo } from 'react'
import { useSelector } from 'react-redux'

import { SideBarItem } from '../../components'

const ListSidebar = () => {
    const { categories, prices, acreages } = useSelector(state => state.app)

    return (
        <div className='w-[30%] flex flex-col gap-4 justify-start items-center'>
            <SideBarItem content={categories} type='categoryCode' title='Danh sách cho thuê' />
            <SideBarItem content={prices} type='priceCode' twoColumn title='Xem theo giá' />
            <SideBarItem content={acreages} type='acreageCode' twoColumn title='Xem theo diện tích' />
        </div>
    )
}

export default memo(ListSidebar)