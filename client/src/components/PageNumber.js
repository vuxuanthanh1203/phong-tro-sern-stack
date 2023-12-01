import React, { memo } from 'react'
import { createSearchParams, useNavigate, useSearchParams } from 'react-router-dom'


const notActive = 'w-10 h-10 flex items-center justify-center bg-white hover:bg-[#DDDDDD] rounded-md cursor-pointer'
const active = 'w-10 h-10 flex items-center justify-center bg-[#E13427] text-white rounded-md cursor-pointer'

const PageNumber = ({ text, icon, currentPage, setCurrentPage }) => {
    const navigate = useNavigate()

    const [searchParams] = useSearchParams()
    const entries = searchParams.entries()
    const appToUrl = () => {
        let params = []
        searchParams.append('page', text)
        for (const entry of entries) {
            params.push(entry)
        }
        //convert arrParmas -> object || 'Object.fromEntries' chuyển đổi mảng các cặp giá trị thành obj
        const searchParamsObj = Object.fromEntries(params || []);

        return searchParamsObj
    }

    const handleChangePage = () => {
        if (!(text === '...')) {
            setCurrentPage(+text)
            navigate({
                pathname: '/',
                search: createSearchParams(appToUrl(entries)).toString()
            })
        }
    }
    return (
        <div
            className={text === currentPage ? active : `${notActive} ${text === '...' ? 'cursor-text' : 'cursor-pointer'}`}
            onClick={handleChangePage}
        >
            {icon || text}
        </div>
    )
}

export default memo(PageNumber)