import React, { memo } from 'react'

const SearchInput = ({ IconBefore, IconAfter, text, fontWeight }) => {
    return (
        <div className="bg-white py-2 px-4 w-full rounded-md text-gray-400 text-sm flex items-center justify-between">
            <div className="flex items-center gap-1">
                {IconBefore}
                <span className={`${fontWeight && 'font-medium text-black'} w-[120px] overflow-hidden text-ellipsis whitespace-nowrap`}>{text}</span>
            </div>
            {IconAfter}
        </div>
    )
}

export default memo(SearchInput)