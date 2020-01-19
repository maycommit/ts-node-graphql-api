import { Model, DataTypes } from 'sequelize';

const tableName = 'users';

class User extends Model {
  public name!: number;
  public password!: string;
  public email!: string;
}

export default (sequelize: any) => User.init({
  name: {
    type: new DataTypes.STRING(128),
    allowNull: false,
  },
  password: {
    type: new DataTypes.STRING(128),
    allowNull: false,
  },
  email: {
    type: new DataTypes.STRING(255),
    allowNull: false,
  }
}, {
  sequelize,
  tableName,
})
