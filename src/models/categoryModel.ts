import db from '../config/database.js'

export const getAllCategories =async () => {
    const query = db('categories')
    return query;
    }

    
export const getCategoryById =async (id: number) => {
    return db('categories').where({id})
}

export const createCategory =async (data:object) => {
    return db('categories').insert(data).returning('*');
}
