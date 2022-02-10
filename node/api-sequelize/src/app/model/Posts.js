import { Model, DataTypes } from 'sequelize';

class Posts extends Model {
  static init(sequelize) {
    super.init(
      {
        title: DataTypes.STRING,
        content: DataTypes.TEXT,
        cover_url: DataTypes.STRING,
        status: DataTypes.BOOLEAN,
        is_fake_news: DataTypes.BOOLEAN,
      },
      {
        sequelize,
      }
    );
  }
  static associate(models) {
    this.belongsTo(models.User, {
      foreignKey: 'user_id',
      as: 'user',
    });

    this.belongsTo(models.Category, {
      foreignKey: 'category_id',
      as: 'category',
    });
  }
}

export default Posts;
