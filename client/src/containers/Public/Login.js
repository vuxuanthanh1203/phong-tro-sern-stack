import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import Swal from 'sweetalert2'

import { InputForm, Button } from '../../components/index'

import * as actions from '../../store/actions'

const Login = () => {

    const location = useLocation()
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const { isLoggedIn, msg, update } = useSelector(state => state.auth)

    const [isRegister, setIsRegister] = useState(location.state?.flag)
    const [invalidFields, setInvalidFields] = useState([])
    const [payload, setPayload] = useState({
        phone: '',
        password: '',
        name: '',
    })

    // Switch login - register
    useEffect(() => {
        setIsRegister(location.state?.flag)
    }, [location.state?.flag])

    // Change page upon successful login
    useEffect(() => {
        isLoggedIn && navigate('/')
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isLoggedIn])

    // popup when login failed
    useEffect(() => {
        msg && Swal.fire('Oop !', msg, 'error')
    }, [msg, update])

    const handleSubmit = async () => {
        let finalPayload = isRegister ? payload : {
            phone: payload.phone,
            password: payload.password
        }
        let invalids = validate(finalPayload)
        if (!invalids) isRegister ? dispatch(actions.register(payload)) : dispatch(actions.login(payload))
    }

    const validate = (payload) => {
        let invalids = 0
        let fields = Object.entries(payload)
        fields.forEach(item => {
            if (item[1] === '') {
                setInvalidFields(prev => [...prev, {
                    name: item[0],
                    message: 'Không được bỏ trống trường này'
                }])
                invalids++
            }
        })
        fields.forEach(item => {
            switch (item[0]) {
                case 'password':
                    if (item[1].length < 6) {
                        setInvalidFields(prev => [...prev, {
                            name: item[0],
                            message: 'Mật khẩu có tối thiểu 6 ký tự'
                        }])
                        invalids++
                    }
                    break;
                case 'phone':
                    if (!+item[1]) {
                        setInvalidFields(prev => [...prev, {
                            name: item[0],
                            message: 'Số điện thoại không hợp lệ'
                        }])
                        invalids++
                    }
                    break;
                default:
                    break;
            }
        })
        return invalids

    }

    return (
        <div className='bg-white w-[600px] p-[30px] pb-[100px] rounded-md shadow-sm'>
            <h3 className='font-semibold text-2xl mb-3'>{isRegister ? 'Đăng ký tài khoản' : 'Đăng nhập'}</h3>
            <div className='w-full flex flex-col gap-5'>
                {isRegister
                    && <InputForm
                        setInvalidFields={setInvalidFields}
                        invalidFields={invalidFields}
                        label={'Họ tên'}
                        value={payload.name}
                        setValue={setPayload}
                        classify={'name'} />
                }
                <InputForm
                    setInvalidFields={setInvalidFields}
                    invalidFields={invalidFields}
                    label={'Số điện thoại'}
                    value={payload.phone}
                    setValue={setPayload}
                    classify={'phone'} />
                <InputForm
                    setInvalidFields={setInvalidFields}
                    invalidFields={invalidFields}
                    label={'Mật khẩu'}
                    value={payload.password}
                    setValue={setPayload}
                    classify={'password'}
                    type='password'
                />
                <Button
                    text={isRegister ? 'Đăng ký' : 'Đăng Nhập'}
                    textColor='text-white'
                    bgColor='bg-secondary'
                    fullWidth
                    onClick={handleSubmit}
                />
            </div>
            <div className='mt-7 flex items-center justify-between text-sm'>
                {isRegister
                    ? <p>Bạn đã có tài khoản?
                        <span onClick={() => {
                            setIsRegister(false)
                            setPayload({
                                phone: '',
                                password: '',
                                name: '',
                            })
                        }}
                            className="text-[blue] hover:underline cursor-pointer">
                            Đăng nhập ngay
                        </span>
                    </p>
                    : <>
                        <p className="text-[blue] hover:text-[orange] cursor-pointer ">Bạn quên mật khẩu?</p>
                        <p onClick={() => {
                            setIsRegister(true)
                            setPayload({
                                phone: '',
                                password: '',
                                name: '',
                            })
                        }}
                            className="text-[blue] hover:text-[orange] cursor-pointer" >
                            Tạo tài khoản mới
                        </p>
                    </>}
            </div>
        </div>
    )
}

export default Login