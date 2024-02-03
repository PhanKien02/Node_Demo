import { Table, Column, Model, PrimaryKey, AutoIncrement, NotNull, IsEmail, Min, Max, Length, ForeignKey, DataType } from 'sequelize-typescript';
import { IPost } from '../interfaces/IPost';


@Table
class Post extends Model<IPost> {

  @AutoIncrement
  @PrimaryKey
  @Column({
    type: DataType.BIGINT,
    allowNull: false
  })
  id: bigint;

  @Column({
    type: DataType.STRING,
    allowNull: false
  })
  title!: string;
  @Column({
    type: DataType.STRING,
    allowNull: false
  })
  content!: string;

  @Column({
    type: DataType.STRING,
    allowNull: true
  })
  source: string;

  @Column({
    type: DataType.STRING,
    allowNull: true
  })
  thumnail: string;
}

export default Post;
