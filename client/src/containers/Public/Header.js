import React, { useCallback } from 'react'
import { useNavigate } from 'react-router-dom'

import Button from '../../components/Button'
import icons from '../../utils/icons'
import logo from '../../assets/logo.png'
import { path } from '../../utils/constant'

const {
    AiOutlinePlusCircle,
    BsArrowRightSquare,
    HiOutlineUserPlus,
    BsSuitHeart
} = icons

const Header = () => {
    const navigate = useNavigate()
    const goLogin = useCallback(() => {
        navigate(path.LOGIN)
    }, [])

    return (
        <div className="w-1100">
            <div className="w-full flex items-center justify-between">
                <img
                    src={logo}
                    alt="logo"
                    className="w-[240px] h-[70px] object-contain"
                />
                <div className="flex items-center gap-2">
                    <Button
                        text={'Yêu thích'}
                        textColor='text-primary'
                        bgColor='bg-transparent'
                        flexDirection='flex-row'
                        Icon={BsSuitHeart} />
                    <Button
                        text={'Đăng nhập'}
                        textColor='text-primary'
                        bgColor='bg-transparent'
                        flexDirection='flex-row'
                        Icon={HiOutlineUserPlus}
                        onClick={goLogin}
                    />
                    <Button
                        text={'Đăng ký'}
                        textColor='text-primary'
                        bgColor='bg-transparent'
                        flexDirection='flex-row'
                        Icon={BsArrowRightSquare} />
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