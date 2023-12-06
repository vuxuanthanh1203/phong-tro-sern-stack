import React from 'react'

import icons from '../utils/icons'

const { GrLinkPrevious } = icons

const Modal = ({ setIsShowModal, content, name }) => {


    return (
        <div
            onClick={() => { setIsShowModal(false) }}
            className="fixed top-0 left-0 right-0 bottom-0 bg-transparent-70 z-20 flex justify-center items-center"
        >
            <div
                onClick={(e) => {
                    e.stopPropagation()
                    setIsShowModal(true)
                }}
                className="w-1/3 bg-white rounded-md"
            >
                <div className="h-[45px] px-3 flex items-center border-b border-gray-200">
                    <span
                        onClick={(e) => {
                            e.stopPropagation()
                            setIsShowModal(false)
                        }}
                        className='cursor-pointer'
                    >
                        <GrLinkPrevious />
                    </span>
                </div>
                <div className='p-4 flex flex-col'>
                    {content?.map(item => {
                        return (
                            <div key={item.code} className="py-2 flex gap-2 items-center border-b border-gray-200">
                                <input type="radio" name={name} id={item.code} value={item.value} />
                                <label className='cursor-pointer' htmlFor={item.code}>{item.value}</label>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default Modal