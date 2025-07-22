const axios = require('axios')
const postService = require('../service/postsService')
const crypto = require('crypto')

const generate = function () {
    return crypto.randomBytes(20).toString('hex')
}

test('Should get posts', async function (){
    const post1 = await postService.savePosts({title: generate(), content: generate()})
    const post2 = await postService.savePosts({title: generate(), content: generate()})
    const post3 = await postService.savePosts({title: generate(), content: generate()})
    const response = await axios({
        url: 'http://localhost:3000/posts',
        method: 'get',
    })
    const posts = response.data
    const [firstPost] = posts
    expect(posts).toHaveLength(3)
    expect(firstPost.id).toBe(1)
}) 