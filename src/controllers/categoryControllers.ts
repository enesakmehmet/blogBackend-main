import { Request, Response } from 'express';
import { getAllCategories,getCategoryById,createCategory} from '../models/categoryModel.js';

export const listCategories = async (req: Request, res: Response) => {
    try {
        const items = await getAllCategories();
        res.json({ items });
    } catch (error) {
        console.log("error:", error);
        res.status(500).json({ error: "Kategori listeleme hatası" });
    }
};


export const getCategory= async (req: Request, res: Response) => {
    try {
       const { id } = req.params;
       const item = await getCategoryById(Number(id));
       res.json({ item });
    }catch (error) {
        console.log("error:", error);
        res.status(500).json({ error: "Kategori görüntüleme hatası" });
    }
}


export const addCategory = async (req: Request, res: Response) => {
try {
    const newItem = await createCategory(req.body);
    res.status(201).json(newItem)
} catch (error) {
    console.log("error:", error);
    res.status(500).json({ error: "Kategori oluşturma hatası" });
}


}