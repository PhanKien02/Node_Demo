import { Table, Column, Model, PrimaryKey, AutoIncrement, DataType, HasMany } from 'sequelize-typescript';
import { IPost } from '../interfaces/IPost';
import File from './file';


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
  title: string;
  @Column({
    type: DataType.STRING,
    allowNull: false
  })
  content: string;

  @Column({
    type: DataType.STRING,
    allowNull: true
  })
  source: string;

  @HasMany(() => File, "postId")
  thumnails: File[];
}

export default Post;
