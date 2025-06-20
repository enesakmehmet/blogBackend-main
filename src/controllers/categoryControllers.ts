import { Request, Response } from 'express';
import { getAllCategories } from '../models/categoryModel.js';

export const listCategories = async (req: Request, res: Response) => {
    try {
        const items = await getAllCategories();
        res.json({ items });
    } catch (error) {
        console.log("error:", error);
        res.status(500).json({ error: "Kategori listeleme hatası" });
    }
};
