import { app } from './index';
import dotenv from 'dotenv';
dotenv.config();

const port = process.env.API_PORT || 3000;

app.listen(port, () => {
  console.log(`Server started on http://localhost:${port}/api ! 🚀`);
});
