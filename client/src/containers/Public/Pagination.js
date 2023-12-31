import React, { useState, useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import { useSelector } from 'react-redux'

import { PageNumber } from '../../components'
import icons from '../../utils/icons'

const { MdOutlineKeyboardDoubleArrowRight, MdOutlineKeyboardDoubleArrowLeft } = icons


const Pagination = () => {
    const { counts } = useSelector(state => state.post)
    const [params] = useSearchParams()

    const [arrPage, setArrPage] = useState([])
    const [currentPage, setCurrentPage] = useState(1)
    const [hideEndIcon, setHideEndIcon] = useState(false)
    const [hideStartIcon, setHideStartIcon] = useState(false)

    useEffect(() => {
        const page = params.get('page') * 1
        page && page !== currentPage && setCurrentPage(page)
        !page && setCurrentPage(1)
    }, [currentPage, params])

    useEffect(() => {
        let maxPage = Math.ceil(counts / 5)
        let next = (currentPage + 1) > maxPage ? maxPage : (currentPage + 1)
        let prev = (currentPage - 1) < 1 ? 1 : (currentPage - 1)
        let temp = []

        for (let i = prev; i <= next; i++) {
            temp.push(i)
            setArrPage(temp)
        }

        currentPage >= (maxPage - 1) ? setHideEndIcon(true) : setHideEndIcon(false)
        currentPage <= 2 ? setHideStartIcon(true) : setHideStartIcon(false)

    }, [counts, currentPage, hideEndIcon])

    return (
        <div className='flex items-center justify-center gap-2 py-5'>
            {!hideStartIcon
                && <PageNumber
                    icon={<MdOutlineKeyboardDoubleArrowLeft />}
                    setCurrentPage={setCurrentPage}
                    text={1}

                />
            }
            {!hideStartIcon && <PageNumber text={'...'} />}
            {arrPage.length > 0 && arrPage.map(item => {
                return (
                    <PageNumber
                        key={item}
                        text={item}
                        currentPage={currentPage}
                        setCurrentPage={setCurrentPage}
                    />
                )
            })}

            {!hideEndIcon && <PageNumber text={'...'} />}
            {!hideEndIcon
                && <PageNumber
                    icon={<MdOutlineKeyboardDoubleArrowRight />}
                    setCurrentPage={setCurrentPage}
                    text={Math.ceil(counts / 5)}

                />
            }
        </div>
    )
}

export default Pagination