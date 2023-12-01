import React, { useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useSearchParams } from 'react-router-dom'

import { getLimitPosts } from '../../store/actions/post'

import { Button, ItemList } from '../../components'

const ListPost = () => {
    const dispatch = useDispatch()
    const [searchParams] = useSearchParams()
    const { posts } = useSelector(state => state.post)
    const listRef = useRef()

    useEffect(() => {
        listRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' })

        let params = []
        for (let entry of searchParams.entries()) {
            params.push(entry)
        }

        //convert arrParmas -> object || 'Object.fromEntries' chuyển đổi mảng các cặp giá trị thành obj
        const searchParamsObj = Object.fromEntries(params || []);

        dispatch(getLimitPosts(searchParamsObj))
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [searchParams])

    return (
        <div ref={listRef} className='p-2 bg-white rounded-md border border-[#dedede] shadow-sm px-4'>
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
                            postId={post?.id}
                            address={post?.address}
                            attributes={post?.attributes}
                            description={JSON.parse(post?.description)}
                            images={JSON.parse(post?.images?.image)}
                            star={post?.star}
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