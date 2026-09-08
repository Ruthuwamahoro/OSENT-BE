import app from './app.js';
import 'dotenv/config';
import { env } from './config/env.js';

app.listen(env.port, () => {
  console.log(`Server is running on port ${env.port}`);
});
