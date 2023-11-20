import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'

import { apiGetCategory } from '../../services/category'
import { convertToSlug } from '../../utils/constant'

const active = 'hover:bg-tertiary px-4 h-full flex items-center  bg-tertiary'
const notActive = 'hover:bg-tertiary px-4 h-full flex items-center bg-secondary'

const Navigation = () => {

    const [categories, setCategory] = useState([])
    useEffect(() => {
        const fetchCategory = async () => {
            const res = await apiGetCategory()
            if (res?.data.err === 0) {
                setCategory(res.data.response)
            }
        }
        fetchCategory()
    }, [])

    return (
        <div className='w-screen flex justify-center items-center  bg-secondary text-white'>
            <div className='w-1100 h-[40px] flex items-center text-sm font-medium'>
                <NavLink
                    to={'/'}
                    className={({ isActive }) => isActive ? active : notActive}
                >
                    Trang chủ
                </NavLink>
                {categories?.length > 0 && categories.map((item) => {
                    return (
                        <div key={item.code} className="h-[40px]">
                            <NavLink
                                to={`${convertToSlug(item.value)}`}
                                className={({ isActive }) => isActive ? active : notActive}
                            >
                                {item.value}
                            </NavLink>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Navigation