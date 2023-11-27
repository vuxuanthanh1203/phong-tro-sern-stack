import React, { memo } from 'react'
import { useNavigate, Link } from 'react-router-dom'

import { convertToSlug } from '../utils/common/convertToSlug'

import icons from '../utils/icons'

const { IoIosStar } = icons
const indexs = [0, 1, 2, 3]

const ItemList = ({ address, attributes, images, description, title, user, postId }) => {
    const navigate = useNavigate()

    return (
        <div className='w-full flex border-t border-orange-600 py-3'>
            <Link
                to={`chi-tiet/${convertToSlug(title.replace('/', '-'))}/${postId}`}
                className='w-2/5 flex flex-wrap gap-[2px] items-center relative cursor-pointer'
            >
                {images.length > 0 && images.filter((i, index) => indexs.some(i => i === index))?.map((i, index) => {
                    return (
                        <img key={index} src={i} alt="preview" className='w-[47%] h-[120px] object-cover' />
                    )
                })}
                <span className='bg-transparent-70 text-white px-2 rounded-md absolute left-1 bottom-2'>{`${images.length} ảnh`}</span>
            </Link>
            <div className='w-3/5'>
                <div className='flex justify-between w-full'>
                    <div className='text-red-600 font-medium'>
                        <IoIosStar className='star-icon' color='#ffd454' />
                        <IoIosStar className='star-icon' color='#ffd454' />
                        <IoIosStar className='star-icon' color='#ffd454' />
                        <IoIosStar className='star-icon' color='#ffd454' />
                        <IoIosStar className='star-icon' color='#ffd454' />
                        <span className='ml-1'>{title}</span>
                    </div>
                </div>
                <div className='my-2 flex flex-col gap-3'>
                    <div className='flex items-center justify-around'>
                        <div className='font-bold text-[#16c784] flex-1 w-full'>Giá: {attributes?.price}</div>
                        <div>Diện tích: {attributes?.acreage}</div>
                    </div>
                    <div className='text-sm font-medium'>
                        Địa chỉ:
                        {`${address.split(',')[address.split(',').length - 2]}, ${address.split(',')[address.split(',').length - 1]}`}
                    </div>
                </div>
                <p className='text-gray-500 w-full h-[50px] splice-des'>
                    {description.toString()}
                </p>
                <div className='flex items-center my-3 justify-between'>
                    <div className='flex items-center gap-3'>
                        <img
                            src="https://phongtro123.com/images/default-user.png"
                            alt="avatar"
                            className='w-[30px] h-[30px] object-cover rounded-full'
                        />
                        <p className='capitalize text-ellipsis overflow-hidden whitespace-nowrap'>{user.name}</p>
                    </div>
                    <div className='flex items-center gap-2'>
                        <button type='button' className='bg-blue-700 text-white p-[2px] rounded-md'>
                            {`Gọi ${user?.phone}`}
                        </button>
                        <button type='button' className='bg-white text-blue-700 p-[2px] rounded-md border border-blue-700'>
                            Nhắn Zalo
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default memo(ItemList)