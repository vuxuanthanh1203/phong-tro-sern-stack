import React from 'react'

import { InputForm, Button } from '../../components/index'

const Login = () => {
    return (
        <div className='bg-white w-[600px] p-[30px] pb-[100px] rounded-md shadow-sm'>
            <h3 className='font-semibold text-2xl mb-3'>Đăng nhập</h3>
            <div className='w-full flex flex-col gap-5'>
                <InputForm label={'Số điện thoại'} />
                <InputForm label={'Mật khẩu'} />
                <Button text='Đăng Nhập' textColor='text-white' bgColor='bg-secondary' fullWidth />
            </div>
            <div className='mt-7 flex items-center justify-between text-sm'>
                <p className="text-[blue] hover:text-[orange] cursor-pointer ">Bạn quên mật khẩu?</p>
                <p className="text-[blue] hover:text-[orange] cursor-pointer">Tạo tài khoản mới</p>
            </div>
        </div>
    )
}

export default Login