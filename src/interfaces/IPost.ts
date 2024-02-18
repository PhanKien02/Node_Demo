import { IFile } from "./IFile";

export interface IPost {
  id?: bigint;
  title?: string;
  content?: string;
  source?: string;
  thumnails?: IFile[];
}