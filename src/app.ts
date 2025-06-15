import express from "express";
import dotenv from "dotenv";
dotenv.config();

const PORT = process.env.PORT || 3000;

const app = express();
app.use(express.json());

app.get('/healtcheck', (req, res) => {
    res.status(200).json({ message: 'ok' });
});





app.listen(PORT, () => {
// db test edildi
    console.log(`Server is running on port ${PORT}`);
});