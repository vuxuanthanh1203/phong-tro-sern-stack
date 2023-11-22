import React from 'react'

import SearchInput from '../../components/SearchInput'
import icons from '../../utils/icons'

const {
    FaRegBuilding,
    IoBackspaceOutline,
    MdOutlineNavigateNext,
    IoLocationOutline,
    TbReportMoney,
    BiArea,
    IoSearchSharp
} = icons

const Search = () => {
    return (
        <div className='w-4/5 my-3 h-[55px] p-[10px] bg-[#febb02] rounded-lg flex items-center justify-around gap-2'>
            <SearchInput text='Phòng trọ, nhà trọ' IconAfter={<IoBackspaceOutline color='black' />} IconBefore={<FaRegBuilding />} fontWeight />
            <SearchInput text='Toàn quốc' IconAfter={<MdOutlineNavigateNext color='rgb(156,163,175)' />} IconBefore={<IoLocationOutline />} />
            <SearchInput text='Chọn giá' IconAfter={<MdOutlineNavigateNext color='rgb(156,163,175)' />} IconBefore={<TbReportMoney />} />
            <SearchInput text='Chọn diện tích' IconAfter={<MdOutlineNavigateNext color='rgb(156,163,175)' />} IconBefore={<BiArea />} />
            <button
                type='button'
                className='outline-none py-2 px-4 w-full bg-secondary text-sm rounded-md text-white font-medium flex items-center justify-center gap-1'
            >
                <IoSearchSharp />
                Tìm Kiếm
            </button>
        </div>
    )
}

export default Search