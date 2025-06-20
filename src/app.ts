import express from "express";
import dotenv from "dotenv";
import categoryRoutes from "./routes/categoryRoutes.js";
dotenv.config();

const PORT = process.env.PORT || 3000;

const app = express();
app.use(express.json());

app.get('/healtcheck', (req, res) => {
    res.status(200).json({ message: 'ok' });
});

app.use('api/v1/catagories',categoryRoutes)



app.listen(PORT, () => {

    console.log(`Server is running on port ${PORT}`);
});