import {IFileSize} from './file-size.model';

export interface IFile {
  mimeType: string;
  extension: string;
  original?: IFileSize;
  thumbnail?: IFileSize;
  fileId: string;
}
