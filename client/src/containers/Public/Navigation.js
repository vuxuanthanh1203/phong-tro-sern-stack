import React, { useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import { convertToSlug } from '../../utils/common/convertToSlug'
import * as actions from '../../store/actions'

const active = 'hover:bg-tertiary px-4 h-full flex items-center  bg-tertiary'
const notActive = 'hover:bg-tertiary px-4 h-full flex items-center bg-secondary'

const Navigation = () => {
    // const [categories, setCategory] = useState([])
    const dispatch = useDispatch()
    const { categories } = useSelector(state => state.app)
    useEffect(() => {
        dispatch(actions.getCategories())
    }, [])

    return (
        <div className='w-full flex justify-center items-center  bg-secondary text-white'>
            <div className='w-4/5 h-[40px] flex items-center text-sm font-medium'>
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