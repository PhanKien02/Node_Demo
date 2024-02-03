export interface IUser {
  id: bigint;
  fullName: string;
  userName: string;
  password: string;
  email: string;
  phone: string;
  age: string;
  address: string;
  sex: boolean; // 1 => made 0 => femade 
  avatar?: string;
}