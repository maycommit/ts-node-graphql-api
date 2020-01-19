import app from './app';
import { PORT } from './config';
import { createDatabaseConnection } from './database';

(async() => {
  try {
    await createDatabaseConnection()
  } catch (error) {
    console.error(error);
    throw error;
  }

  app.listen(PORT)
})();
