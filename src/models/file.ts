import { Table, Column, Model, PrimaryKey, AutoIncrement, DataType, BelongsTo } from 'sequelize-typescript';
import { IFile } from '../interfaces/IFile';
import Post from './post';


@Table
class File extends Model<IFile> {

  @AutoIncrement
  @PrimaryKey
  @Column({
    type: DataType.BIGINT,
    allowNull: false
  })
  id?: bigint;

  @Column({
    type: DataType.STRING,
    allowNull: false
  })
  path: string;

  @Column({
    type: DataType.STRING,
    allowNull: false
  })
  servicePath: string;

  @Column({
    type: DataType.INTEGER,
  })
  size: number;

  @Column({
    type: DataType.STRING,
    allowNull: true
  })
  name: string;

  @Column({
    type: DataType.STRING,
    allowNull: true
  })
  typeFile: string
  @BelongsTo(() => Post, "postId")
  post: bigint;
}

export default File;
