import React, { useCallback } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'

import * as actions from '../../store/actions'

import Button from '../../components/Button'
import icons from '../../utils/icons'
import logo from '../../assets/logo.png'
import { path } from '../../utils/constant'

const {
    AiOutlinePlusCircle,
    BsArrowRightSquare,
    HiOutlineUserPlus
} = icons

const Header = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const { isLoggedIn } = useSelector(state => state.auth)

    const goLogin = useCallback((flag) => {
        navigate(path.LOGIN, { state: { flag } })
    }, [])

    return (
        <div className="w-1100">
            <div className="w-full flex items-center justify-between">
                <Link to={'/'}>
                    <img
                        src={logo}
                        alt="logo"
                        className="w-[240px] h-[70px] object-contain"
                    />
                </Link>
                <div className="flex items-center gap-2">
                    {!isLoggedIn && <div className="flex items-center gap-2">
                        <Button
                            text={'Đăng nhập'}
                            textColor='text-primary'
                            bgColor='bg-transparent'
                            flexDirection='flex-row'
                            Icon={HiOutlineUserPlus}
                            onClick={() => goLogin(false)}
                        />
                        <Button
                            text={'Đăng ký'}
                            textColor='text-primary'
                            bgColor='bg-transparent'
                            flexDirection='flex-row'
                            Icon={BsArrowRightSquare}
                            onClick={() => goLogin(true)}
                        />
                    </div>}
                    {isLoggedIn && <div className="flex items-center gap-2">
                        <Button
                            text={'Đăng xuất'}
                            textColor='text-white'
                            bgColor='bg-blue-500'
                            flexDirection='flex-row'
                            onClick={() => dispatch(actions.logout())}
                        />
                    </div>}
                    <Button
                        text={'Đăng tin mới'}
                        textColor='text-white'
                        bgColor='bg-tertiary'
                        flexDirection='flex-row-reverse'
                        Icon={AiOutlinePlusCircle} />
                </div>
            </div>
        </div>
    )
}

export default Header