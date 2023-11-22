import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { getPosts } from '../../store/actions/post'

import { Button, ItemList } from '../../components'

const ListPost = () => {
    const dispatch = useDispatch()
    const { posts } = useSelector(state => state.post)
    useEffect(() => {
        dispatch(getPosts())
    }, [])
    // console.log(posts);
    // console.log('#20 - 13:45');
    return (
        <div className='p-2 bg-white rounded-md border border-[#dedede] shadow-sm px-4'>
            <div className='flex items-center gap-2'>
                <span>Sắp xếp: </span>
                <Button bgColor='bg-gray-200' text='Mặc định' />
                <Button bgColor='bg-gray-200' text='Mới nhất' />
            </div>
            <div className='items pt-3'>
                {posts?.length > 0 && posts.map(post => {
                    return (
                        <ItemList
                            key={post?.id}
                            address={post?.address}
                            attributes={post?.attributes}
                            description={JSON.parse(post?.description)}
                            images={JSON.parse(post?.images?.image)}
                            start={post?.start * 1}
                            title={post?.title}
                            user={post?.user}
                        />
                    )
                })}
            </div>
        </div>
    )
}

export default ListPost