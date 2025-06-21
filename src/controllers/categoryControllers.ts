import { Request, Response } from 'express';
import { getAllCategories,getCategoryById,createCategory,deleteCategory,updateCategory} from '../models/categoryModel.js';

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
       if (!item){
        res.status(404).json({ error: "Kategori bulunamadı" })
        return;
       }
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


export const editCategory = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const updateItem= await updateCategory(Number(id), req.body);
        res.json({ updateItem });
    } catch (error) {
        console.log("error:", error);
        res.status(500).json({ error: "Kategori güncelleme hatası" });
    }
} 


export const removeCategory = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const deleteItem = await deleteCategory(Number(id));
        res.json({ deleteItem });
    } catch (error) {
        console.log("error:", error);
        res.status(500).json({ error: "Kategori silme hatası" });
    }

}