import {IAgent, IPublicAccessOp} from './system';

export interface IFile {
  resourceId: string;
  organizationId: string;
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
  filePath?: string;
  fileId?: string;
  organizationId?: string;
}