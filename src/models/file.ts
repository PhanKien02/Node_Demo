import { Table, Column, Model, PrimaryKey, AutoIncrement,DataType } from 'sequelize-typescript';
import { IFile } from '../interfaces/IFile';


@Table
class File extends Model<IFile> {

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
  path!: string;
  @Column

  @Column({
    type: DataType.STRING,
    allowNull: false
  })
  servicePath!: string;

  @Column
  @Column({
    type: DataType.STRING,
    allowNull: true
  })
  size: string;

  @Column({
    type: DataType.STRING,
    allowNull: true
  })
  name: string;

  typeFIle : number
}

export default File;
