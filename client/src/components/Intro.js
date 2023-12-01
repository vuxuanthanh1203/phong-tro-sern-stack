import React, { memo } from 'react'
import { useSelector } from 'react-redux'

import { data } from '../utils/dataIntro'
import icons from '../utils/icons'
import Button from './Button'
import { Link } from 'react-router-dom'
import { convertToSlug } from '../utils/common/convertToSlug'

const { IoIosStar } = icons

const Intro = () => {
    const { categories } = useSelector(state => state.app)

    return (
        <div className='border w-4/5 text-[#333] bg-white rounded-md shadow-md p-4 flex-col flex justify-center items-center'>
            <h3 className='font-semibold text-lg'>{data.title}</h3>
            <p className='text-center my-4'>
                {data.description}
                <span className='text-link'>
                    {categories?.length > 0 && categories.map((item) => {
                        return (
                            <Link
                                to={`${convertToSlug(item.value)}`}
                                key={item.code}
                                className='text-blue-600 hover:text-orange-600 font-medium'
                            >
                                {`${item.value.toLowerCase()}, `}
                            </Link>
                        )
                    })}
                </span>
                {data.description2}
            </p>
            <div className='flex items-center justify-around w-full'>
                {data.statistic.map((item, index) => {
                    return (
                        <div className='flex flex-col justify-center items-center' key={index}>
                            <h4 className='font-bold text-lg'>{item.value}</h4>
                            <p>{item.name}</p>
                        </div>
                    )
                })}
            </div>
            <h3 className='font-bold text-lg py-2 '>{data.price}</h3>
            <div className='flex items-center justify-center gap-1 text-[#ffd454] text-lg mb-3'>
                <IoIosStar />
                <IoIosStar />
                <IoIosStar />
                <IoIosStar />
                <IoIosStar />
            </div>
            <p className='italic text-center'>{data.comment}</p>
            <span >{data.author}</span>
            <h3 className='font-bold text-lg py-2'>{data.question}</h3>
            <p className='mb-3'>{data.answer}</p>
            <Button
                className='my-3'
                text='Đăng tin ngay'
                textColor='text-white'
                bgColor='bg-tertiary'
            />
            <div className='h-12'></div>
        </div>
    )
}

export default memo(Intro)