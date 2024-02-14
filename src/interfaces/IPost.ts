import { IFile } from "./IFile";

export interface IPost {
  title: string;
  content: string;
  source: string;
  thumnail: IFile[];
}