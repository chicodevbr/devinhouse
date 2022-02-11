import { Model, DataTypes } from 'sequelize';
import bcrypt from 'bcrypt';

class User extends Model {
  static init(sequelize) {
    super.init(
      {
        name: DataTypes.STRING,
        nickname: DataTypes.STRING,
        email: DataTypes.STRING,
        password_hash: DataTypes.STRING,
      },
      {
        sequelize,
        hooks: {
          beforeCreate: async (user) => {
            user.password_hash = await bcrypt.hash(user.password_hash, 8);
          },
        },
      }
    );
  }
  static associate(models) {
    this.hasMany(models.Posts, {
      foreignKey: 'user_id',
      as: 'posts',
    });
  }
}

export default User;
