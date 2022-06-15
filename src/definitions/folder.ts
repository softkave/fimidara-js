import {IFile} from './file';
import {
  AppResourceType,
  BasicCRUDActions,
  IAgent,
  IPublicAccessOp,
  IPublicAccessOpInput,
} from './system';
import {IEndpointParamsBase, IEndpointResultBase} from './types';

export interface IFolder {
  resourceId: string;
  workspaceId: string;
  idPath: string[];
  namePath: string[];
  parentId?: string;
  createdBy: IAgent;
  createdAt: Date | string;
  maxFileSizeInBytes: number;
  lastUpdatedBy?: IAgent;
  lastUpdatedAt?: Date | string;
  name: string;
  description?: string;
  publicAccessOps: IPublicAccessOp[];
}

export interface INewFolderInput {
  folderpath: string;
  description?: string;
  // maxFileSizeInBytes?: number;
  publicAccessOps?: IPublicAccessOpInput[];
}

export interface IUpdateFolderInput {
  description?: string;
  maxFileSizeInBytes?: number;
  publicAccessOps?: IPublicAccessOpInput[];
}

export interface IFolderMatcher {
  folderpath?: string;
  folderId?: string;
  workspaceId?: string;
}

export function makePublicAccessOpInputs(
  type: AppResourceType,
  actions: BasicCRUDActions[] = [
    BasicCRUDActions.Create,
    BasicCRUDActions.Read,
    BasicCRUDActions.Update,
    BasicCRUDActions.Delete,
  ]
) {
  return actions.map(action => ({
    action,
    resourceType: type,
  }));
}

export interface IAddFolderEndpointParams extends IEndpointParamsBase {
  folder: INewFolderInput;
}

export interface IAddFolderEndpointResult extends IEndpointResultBase {
  folder: IFolder;
}

export interface IDeleteFolderEndpointParams
  extends IFolderMatcher,
    IEndpointParamsBase {}

export interface IGetFolderEndpointParams
  extends IFolderMatcher,
    IEndpointParamsBase {}

export interface IGetFolderEndpointResult extends IEndpointResultBase {
  folder: IFolder;
}

export interface IListFolderContentEndpointParams
  extends IFolderMatcher,
    IEndpointParamsBase {}

export interface IListFolderContentEndpointResult extends IEndpointResultBase {
  folders: IFolder[];
  files: IFile[];
}

export interface IUpdateFolderEndpointParams
  extends IFolderMatcher,
    IEndpointParamsBase {
  folder: IUpdateFolderInput;
}

export interface IUpdateFolderEndpointResult extends IEndpointResultBase {
  Folder: IFolder;
}

export interface IFolderEndpoints {
  addFolder(props: IAddFolderEndpointParams): Promise<IAddFolderEndpointResult>;
  listFolderContent(
    props: IListFolderContentEndpointParams
  ): Promise<IListFolderContentEndpointResult>;

  getFolder(props: IGetFolderEndpointParams): Promise<IGetFolderEndpointResult>;
  deleteFolder(
    props: IDeleteFolderEndpointParams
  ): Promise<IEndpointResultBase>;

  updateFolder(
    props: IUpdateFolderEndpointParams
  ): Promise<IUpdateFolderEndpointResult>;
}
