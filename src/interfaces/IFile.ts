import { IPost } from "./IPost";

export interface IFile {
  id?: bigint;
  path: string;
  servicePath: string;
  size: number;
  name: string;
  typeFile: string;
  postId?: bigint;
}