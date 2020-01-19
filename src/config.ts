const ENV = process.env;

export const PORT = ENV.PORT || 3000

export const DB = {
  HOST: ENV.DB_HOST || 'localhost',
  USER: ENV.DB_USER || 'helpsreparos',
  PASSWORD: ENV.DB_PASSWORD || '',
  DIALECT: ENV.DB_DIALECT || 'postgres',
  PORT: ENV.DB_PORT || '5432',
  NAME: ENV.DB_NAME || 'helpspreparos',
};

