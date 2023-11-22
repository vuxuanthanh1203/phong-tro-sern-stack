import React, { memo } from 'react'

const LocationCat = ({ name, image }) => {
    return (
        <div className='shadow-md rounded-lg text-blue-700 cursor-pointer hover:text-orange-600'>
            <img
                src={image}
                alt={name}
                className='w-[220px] h-[110px]  object-cover rounded-tl-lg rounded-tr-lg'
            />
            <div className='font-medium p-2 text-center bg-white rounded-bl-lg rounded-br-lg'>{name}</div>
        </div>
    )
}

export default memo(LocationCat)