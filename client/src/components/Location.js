import React from 'react'

import { LocationCat } from './index'
import { location } from '../utils/constant'

const Location = () => {
    return (
        <div className='flex items- justify-center gap-5 py-5'>
            {location.map((item) => {
                return (
                    <LocationCat
                        key={item.id}
                        name={item.name}
                        image={item.image}
                    />
                )

            })}
        </div>
    )
}

export default Location