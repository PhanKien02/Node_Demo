import { Table, Column, Model, PrimaryKey, AutoIncrement, NotNull, IsEmail, Min, Max, Length, ForeignKey, DataType } from 'sequelize-typescript';
import { IPost } from '../interfaces/IPost';


@Table
class Post extends Model<IPost> {

  @NotNull
  @AutoIncrement
  @PrimaryKey
  @Column({
    type: DataType.BIGINT,
    allowNull: false
  })
  id: bigint;

  @NotNull
  @Column({
    type: DataType.STRING,
    allowNull: false
  })
  path!: string;
  @NotNull
  @Column

  @NotNull
  @Column({
    type: DataType.STRING,
    allowNull: false
  })
  fullPath!: string;

  @Column
  @NotNull
  @Column({
    type: DataType.STRING,
    allowNull: true
  })
  size: string;

  @NotNull
  @Column({
    type: DataType.STRING,
    allowNull: true
  })
  name: string;
}

export default Post;
