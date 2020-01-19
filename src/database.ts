import { Sequelize } from 'sequelize';
import { DB } from './config';
import models from './models';

export const createDatabaseConnection = () => {
  const { HOST, USER, PASSWORD, DIALECT, PORT, NAME } = DB
  const url = `${DIALECT}://${USER}:${PASSWORD}@${HOST}:${PORT}/${NAME}`
  const sequelize = new Sequelize(url)

  models.map(model => model(sequelize))
}

