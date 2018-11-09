import path from 'path';
import dotenv from 'dotenv-safe';

dotenv.load({
  path: path.join(__dirname, '../', '.env'),
  sample: path.join(__dirname, '../', '.env.example'),
});
