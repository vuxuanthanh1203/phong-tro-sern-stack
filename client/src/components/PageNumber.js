import React, { memo } from 'react'
import { createSearchParams, useNavigate } from 'react-router-dom'


const notActive = 'w-10 h-10 flex items-center justify-center bg-white hover:bg-[#DDDDDD] rounded-md cursor-pointer'
const active = 'w-10 h-10 flex items-center justify-center bg-[#E13427] text-white rounded-md cursor-pointer'

const PageNumber = ({ text, icon, currentPage, setCurrentPage }) => {
    const navigate = useNavigate()
    const handleChangPage = () => {
        if (!(text === '...')) {
            setCurrentPage(+text)
            navigate({
                pathname: '/',
                search: createSearchParams({
                    page: text
                }).toString()
            })
        }
    }
    return (
        <div
            className={+text === +currentPage ? active : `${notActive} ${text === '...' ? 'cursor-text' : 'cursor-pointer'}`}
            onClick={handleChangPage}
        >
            {icon || text}
        </div>
    )
}

export default memo(PageNumber)