import React, { useState } from 'react'
import { useSelector } from 'react-redux'

import SearchInput from '../../components/SearchInput'
import icons from '../../utils/icons'
import Modal from '../../components/Modal'

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
    const { categories, provinces, prices, acreages } = useSelector(state => state.app)
    const [isShowModal, setIsShowModal] = useState(false)
    const [name, setName] = useState('')
    const [content, setContent] = useState([])

    const handleShowModal = (content, name) => {
        setContent(content)
        setName(name)
        setIsShowModal(true)
    }

    return (
        <>
            <div className='w-4/5 my-3 h-[55px] p-[10px] bg-[#febb02] rounded-lg flex items-center justify-around gap-2'>
                <span className='cursor-pointer flex-1' onClick={() => handleShowModal(categories, 'category')}>
                    <SearchInput text='Phòng trọ, nhà trọ' IconAfter={<IoBackspaceOutline color='black' />} IconBefore={<FaRegBuilding />} fontWeight />
                </span>
                <span className='cursor-pointer flex-1' onClick={() => handleShowModal(provinces, 'province')}>
                    <SearchInput text='Toàn quốc' IconAfter={<MdOutlineNavigateNext color='rgb(156,163,175)' />} IconBefore={<IoLocationOutline />} />
                </span>
                <span className='cursor-pointer flex-1' onClick={() => handleShowModal(prices, 'price')}>
                    <SearchInput text='Chọn giá' IconAfter={<MdOutlineNavigateNext color='rgb(156,163,175)' />} IconBefore={<TbReportMoney />} />
                </span>
                <span className='cursor-pointer flex-1' onClick={() => handleShowModal(acreages, 'acreage')}>
                    <SearchInput text='Chọn diện tích' IconAfter={<MdOutlineNavigateNext color='rgb(156,163,175)' />} IconBefore={<BiArea />} />
                </span>
                <button
                    type='button'
                    className='outline-none py-2 px-4 bg-secondary text-sm rounded-md text-white font-medium flex items-center justify-center gap-1'
                >
                    <IoSearchSharp />
                    Tìm Kiếm
                </button>
            </div>
            {isShowModal && <Modal content={content} name={name} setIsShowModal={setIsShowModal} />}
        </>
    )
}

export default Search