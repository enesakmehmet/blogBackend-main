import db from '../config/database.js'

export const getAllCategories =async () => {
    const query = db('categories')
    return query;
    }

    
export const getCategoryById =async (id: number) => {
    return db('categories').where({id,deleted_at: null}).first();
}

export const createCategory =async (data:object) => {
    return db('categories').insert(data).returning('*');
}

export const updateCategory =async (id:number, data:object) => {
    return db('categories').where({id}).update(data).returning('*');
}

export const deleteCategory =async (id:number) => {
    return db('categories').where({id}).update({deleted_at: new Date()}).returning('*');
}


