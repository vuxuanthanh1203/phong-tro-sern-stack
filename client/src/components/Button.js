import React, { memo } from 'react'

const Button = ({ text, textColor, bgColor, flexDirection, Icon, onClick, fullWidth }) => {
    return (
        <button
            type="button"
            className={`flex items-center justify-center gap-2 p-2 ${fullWidth && 'w-full'} ${flexDirection} ${textColor} ${bgColor} outline-none rounded-md mr-1 hover:underline`}
            onClick={onClick}
        >
            {Icon && <Icon />}
            <span>{text}</span>
        </button>
    )
}

export default memo(Button)