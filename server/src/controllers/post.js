import * as postService from '../services/post'

export const getPosts = async (req, res) => {
    try {
        const result = await postService.getPostsService()

        return res.status(200).json(result)
    } catch (error) {
        return res.status(404).json({
            err: -1,
            msg: 'Failed at post controller: ' + error
        })
    }
}

export const getLimitPosts = async (req, res) => {
    try {
        const result = await postService.getLimitPostsService(req.query)

        return res.status(200).json(result)
    } catch (error) {
        return res.status(404).json({
            err: -1,
            msg: 'Failed at post controller: ' + error
        })
    }
}

export const getNewPosts = async (req, res) => {
    try {
        const result = await postService.getNewPostsService()

        return res.status(200).json(result)
    } catch (error) {
        return res.status(404).json({
            err: -1,
            msg: 'Failed at post controller: ' + error
        })
    }
}