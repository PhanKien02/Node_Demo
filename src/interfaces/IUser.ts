export interface IUser {
  id?: bigint;
  fullName?: string;
  userName?: string;
  password?: string;
  email?: string;
  phone?: string;
  age?: number;
  address?: string;
  gender?: boolean; // 1 => made 0 => femade 
  avatar?: string;
  active?: boolean;
  activeKey?: string;
}