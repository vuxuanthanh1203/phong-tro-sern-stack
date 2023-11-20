
import React, { memo } from 'react'

const InputForm = ({ label, value, setValue, classify, invalidFields, setInvalidFields, type }) => {
    return (
        <div>
            <label htmlFor='phone' className="uppercase text-xs">{label}</label>
            <input
                type={type || 'text'}
                id='phone'
                className='outline-none bg-[#e9f0fe] p-2 rounded-md w-full'
                value={value}
                onChange={(e) => setValue(prev => ({ ...prev, [classify]: e.target.value }))}
                onFocus={() => setInvalidFields([])}
            />
            {
                invalidFields.length > 0
                && invalidFields.some(i => i.name === classify)
                && <small className='text-red-500 italic'>
                    {invalidFields.find(i => i.name === classify)?.message}
                </small>
            }
        </div>
    )
}

export default memo(InputForm)