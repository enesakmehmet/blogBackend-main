import { getAllPosts,createPost,getPostById,updatePost,deletePost }from '../models/postModel.js'

import { Request, Response } from 'express';

export const listPosts = async (req: Request, res: Response) => {
    try {
        const items = await getAllPosts();
        res.json({ items });
    } catch (error) {
        console.log("error:", error);
        res.status(500).json({ error: "Gönderi listeleme hatası" });
    }
};


export const addPost = async (req: Request, res: Response) => {
    try {
    const newItem = await createPost(req.body);
    res.status(201).json(newItem)
    } catch (error) {
        console.log("error:", error);
        res.status(500).json({ error: "Gönderi oluşturma hatası" });
    }
}


export const getPost = async (req: Request, res: Response) => { 
try {
    const { id } = req.params;
    const item = await getPostById(Number(id));
    if (!item){
        res.status(404).json({ error: "Gönderi bulunamadı" })
        return;
    }
    res.json({ item });
} catch (error) {
    console.log("error:", error);
    res.status(500).json({ error: "Gönderi görüntüleme hatası" });
}

}


export const editPost = async (req: Request, res: Response) => { 
    try {
        const { id } = req.params;
        const updateItem= await updatePost(Number(id), req.body);
        res.json({ updateItem });
    } catch (error) {
        console.log("error:", error);
        res.status(500).json({ error: "Gönderi güncelleme hatası" });
    }
}


export const removePost = async (req: Request, res: Response) => { 
    try {
        const { id } = req.params;
        const deleteItem = await deletePost(Number(id));
        res.json({ deleteItem });
    } catch (error) {
        console.log("error:", error);
        res.status(500).json({ error: "Gönderi silme hatası" });
    }
}

     

    
