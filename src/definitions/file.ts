import {Readable} from 'form-data';
import {IAgent, IPublicAccessOp} from './system';
import {IEndpointParamsBase, IEndpointResultBase} from './types';

export interface IFile {
  resourceId: string;
  workspaceId: string;
  folderId?: string;
  idPath: string[];
  namePath: string[];
  mimetype?: string;
  encoding?: string;
  size: number;
  createdBy: IAgent;
  createdAt: Date | string;
  lastUpdatedBy?: IAgent;
  lastUpdatedAt?: Date | string;
  name: string;
  extension: string;
  description?: string;
  publicAccessOps: IPublicAccessOp[];
}

export interface IImageTransformationParams {
  width?: number;
  height?: number;
}

export interface IUpdateFileDetailsInput {
  description?: string;
  mimetype?: string;
}

export enum UploadFilePublicAccessActions {
  None = 'none',
  Read = 'read',
  ReadAndUpdate = 'read-update',
  ReadUpdateAndDelete = 'read-update-delete',
}

export interface IFileMatcher {
  filepath?: string;
  fileId?: string;
  // workspaceId?: string;
}

export interface IGetFileDetailsEndpointParams
  extends IFileMatcher,
    IEndpointParamsBase {}

export interface IGetFileDetailsEndpointResult extends IEndpointResultBase {
  file: IFile;
}

export interface IDeleteFileEndpointParams
  extends IFileMatcher,
    IEndpointParamsBase {}

export interface IGetFileEndpointParams
  extends Required<Pick<IFileMatcher, 'filepath'>>,
    IEndpointParamsBase {
  imageTranformation?: IImageTransformationParams;
}

export interface IGetFileEndpointResult {
  body: NodeJS.ReadableStream | ReadableStream;
}

export interface IUpdateFileDetailsEndpointParams
  extends IFileMatcher,
    IEndpointParamsBase {
  file: IUpdateFileDetailsInput;
}

export interface IUpdateFileDetailsEndpointResult extends IEndpointResultBase {
  file: IFile;
}

export interface IUploadFileEndpointParams
  extends Required<Pick<IFileMatcher, 'filepath'>>,
    IEndpointParamsBase {
  description?: string;
  encoding?: string;
  extension?: string;
  mimetype?: string;
  // data: Blob;
  data: Readable | ReadableStream;
  publicAccessActions?: UploadFilePublicAccessActions;
}

export interface IUploadFileEndpointResult extends IEndpointResultBase {
  file: IFile;
}

export interface IFileEndpoints {
  deleteFile(props: IDeleteFileEndpointParams): Promise<IEndpointResultBase>;
  getFileDetails(
    props: IGetFileDetailsEndpointParams
  ): Promise<IGetFileDetailsEndpointResult>;

  updateFileDetails(
    props: IUpdateFileDetailsEndpointParams
  ): Promise<IUpdateFileDetailsEndpointResult>;

  getFile(props: IGetFileEndpointParams): Promise<IGetFileEndpointResult>;
  uploadFile(
    props: IUploadFileEndpointParams
  ): Promise<IUploadFileEndpointResult>;

  getFetchFilePath(filepath: string, width?: number, height?: number): string;
  getUploadFilePath(workspaceId: string, filepath: string): string;
}
