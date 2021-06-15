import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import postRoutes from './routes/posts.js';
import userRoutes from './routes/users.js';
import searchRoutes from './routes/search.js';
import dotenv from 'dotenv';
dotenv.config();
const app = express();


app.use(cors());
app.use(express.json({limit: '25mb'}));
app.use(express.urlencoded({limit: '25mb'}));

app.use('/posts', postRoutes);
app.use('/user', userRoutes);
app.use('/search', searchRoutes);

app.get('/', (req, res) => {
  res.send('Hello to local-advisor API');
});

const PORT = process.env.PORT|| 5000;

mongoose.connect(process.env.CONNECTION_URL )
  .then(() => app.listen(PORT, () => console.log(`Server Running on Port: http://localhost:${PORT}`)))
  .catch((error) => console.log(`${error} did not connect`));

mongoose.set('useFindAndModify', false);