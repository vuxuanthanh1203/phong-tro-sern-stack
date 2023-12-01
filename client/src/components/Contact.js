import React from 'react'

import { data } from '../utils/dataContact'
import Button from './Button'

const Contact = () => {
    return (
        <div className='border-dashed border-[#e8eefc] border-[7px] bg-white rounded-md shadow-md p-4 w-4/5 flex flex-col justify-center items-center gap-6'>
            <img src={data.image} alt="thumbnail" className="w-full h-48 object-contain" />
            <p>{data.content}</p>
            <div className='flex items-center justify-around w-full'>
                {data.contacts.map((item, index) => {
                    return (
                        <div key={index} className='flex flex-col items-center justify-center'>
                            <div className="text-[#f60] font-semibold">{item.text}</div>
                            <div className='text-[#233762] text-sm font-semibold'>{item.phone}</div>
                            <div className='text-[#233762] text-sm font-semibold'>{item.zalo}</div>
                        </div>
                    )
                })}
            </div>
            <Button
                text='Gửi liên hệ'
                textColor='text-white'
                bgColor='bg-blue-500'
            />
        </div>
    )
}

export default Contact