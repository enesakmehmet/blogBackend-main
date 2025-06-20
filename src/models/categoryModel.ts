import db from '../config/database.js'

export const getAllCategories =async () => {
    const query = db('categories')
    return query;
    }

    
