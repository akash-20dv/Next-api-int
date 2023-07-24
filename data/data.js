let posts = []

// handlers
export const getPosts = () => posts;
export const addPost = (post) => posts.push(post)
export const deletePost = (id) => {
    posts.filter(post => post.id !== id)
}
export const updatePost = (id , title ,desc) => {
  const post =  posts.find(post => post.id === id)
    if(post){
        post.title = title;
        post.desc = desc;
    }
    else{
        throw new Error('No Posts found')
    }
}
export const getById = (id) =>{
    return posts.find(post => post.id === id)
}