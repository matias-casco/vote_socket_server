import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();

//Path público
const publicPath = path.resolve(__dirname, "public");

app.use(express.static(publicPath));

app.listen(3000, (err) => {
  if (err) throw new Error(err);
  console.log("Server is running on port 3000");
});
