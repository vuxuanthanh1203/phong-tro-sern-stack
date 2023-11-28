import React, { memo } from 'react'

import icons from '../utils/icons'

const { MdOutlineNavigateNext } = icons

const SideBarItem = ({ title, content, twoColumn, spliceAt }) => {
    let halfContent = []
    if (twoColumn) halfContent = content.splice(0, spliceAt)

    return (
        <div className="p-4 rounded-md bg-white w-full">
            <h3 className="text-lg font-semibold mb-4">{title}</h3>
            <div className="flex items-start text-[15px]">
                <div className="flex flex-col gap-1">
                    {halfContent?.length > 0 && halfContent.map(item => {
                        return (
                            <div className='flex gap-1 mr-5 items-center cursor-pointer hover:text-orange-600 border-b border-grey-600 border-dashed' key={item.code}>
                                <MdOutlineNavigateNext color='#ccc' />
                                <p>{item.value}</p>
                            </div>
                        )
                    })}
                </div>
                <div className="flex flex-col gap-1">
                    {content?.length > 0 && content.map(item => {
                        return (
                            <div className='flex gap-1 items-center cursor-pointer hover:text-orange-600 border-b border-grey-600 border-dashed' key={item.code}>
                                <MdOutlineNavigateNext color='#ccc' />
                                <p>{item.value}</p>
                            </div>
                        )
                    })}
                </div>
            </div>
            <div className="flex gap-1 items-center">

            </div>
        </div>
    )
}

export default memo(SideBarItem)