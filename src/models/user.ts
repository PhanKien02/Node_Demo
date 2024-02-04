// models/User.ts
import { Table, Column, Model, PrimaryKey, AutoIncrement, NotNull, IsEmail, Min, Max, Length, DataType } from 'sequelize-typescript';
import { IUser } from '../interfaces/IUser';

@Table
class User extends Model<IUser> {
  @PrimaryKey
  @AutoIncrement
  @Column({
    type: DataType.BIGINT,
    allowNull: false
  })
  id: bigint;

  @Column({
    type: DataType.STRING,
    allowNull: false
  })
  fullName: string;

  @Column({
    type: DataType.STRING,
    allowNull: false
  })
  userName: string;
  @Column({
    type: DataType.STRING,
    allowNull: false
  })
  password: string;
  @IsEmail

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  email: string;

  @Length({ msg: " ", max: 10, min: 10 })
  @Column({
    type: DataType.STRING,
    allowNull: true,
    validate: {
      is: '[0-9]{10}'
    }
  })
  phone: string;

  @Column({
    type: DataType.INTEGER,
    allowNull: true
  })
  age: number;

  @Column({
    type: DataType.STRING,
    allowNull: true
  })
  address: string;

  @Column({
    type: DataType.BOOLEAN,
    allowNull: true
  })
  sex: boolean; // 1 => made 0 => femade 

  @Column({
    type: DataType.STRING,
    allowNull: true
  })
  avatar?: string
  @Column({
    type: DataType.STRING,
    allowNull: true
  })
  active?: string

  @Column({
    type: DataType.STRING,
    allowNull: true
  })
  activeKey?: string
}

export default User;