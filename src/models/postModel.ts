import db from '../config/database.js'

export const getAllPosts = async () => {
    return db('posts')
}

export const createPost = async (data:object) => {
    return db('posts').insert(data).returning('*');
} 


export const getPostById = async (id:number) => {
    return db('posts').where({id,deleted_at: null}).first();
}

export const updatePost = async (id:number, data:object) => {
    return db('posts').where({id}).update(data).returning('*');
}

export const deletePost = async (id:number) => {
    return db('posts').where({id}).update({deleted_at: new Date()}).returning('*');
}


