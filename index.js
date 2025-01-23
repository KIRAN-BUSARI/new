import express from 'express';
import morgan from "morgan";

const app = express();
app.use(morgan('dev'));

app.get('/', (_, res) => {
  res.json({ message: "Hello from vercel" })
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});