import { IFile } from "../definitions/file";
import {
  IFolder,
  IFolderMatcher,
  INewFolderInput,
  IUpdateFolderInput,
} from "../definitions/folder";
import {
  GetEndpointResult,
  IEndpointParamsBase,
  IEndpointResultBase,
} from "../types";
import { EndpointsBase, invokeEndpointWithAuth } from "../utils";

const baseURL = "/folders";
const addFolderURL = `${baseURL}/addFolder`;
const listFolderContentURL = `${baseURL}/listFolderContent`;
const getFolderURL = `${baseURL}/getFolder`;
const deleteFolderURL = `${baseURL}/deleteFolder`;
const updateFolderURL = `${baseURL}/updateFolder`;

export interface IAddFolderEndpointParams extends IEndpointParamsBase {
  organizationId?: string;
  folder: INewFolderInput;
}

export type IAddFolderEndpointResult = GetEndpointResult<{
  folder: IFolder;
}>;

export interface IDeleteFolderEndpointParams
  extends IFolderMatcher,
    IEndpointParamsBase {}

export interface IGetFolderEndpointParams
  extends IFolderMatcher,
    IEndpointParamsBase {}
export type IGetFolderEndpointResult = GetEndpointResult<{
  folder: IFolder;
}>;

export interface IListFolderContentEndpointParams
  extends IFolderMatcher,
    IEndpointParamsBase {}
export type IListFolderContentEndpointResult = GetEndpointResult<{
  folders: IFolder[];
  files: IFile[];
}>;

export interface IUpdateFolderEndpointParams
  extends IFolderMatcher,
    IEndpointParamsBase {
  folder: IUpdateFolderInput;
}

export type IUpdateFolderEndpointResult = GetEndpointResult<{
  Folder: IFolder;
}>;

export default class FolderEndpoints extends EndpointsBase {
  async addFolder(props: IAddFolderEndpointParams) {
    return invokeEndpointWithAuth<IAddFolderEndpointResult>({
      path: addFolderURL,
      data: props,
      token: this.getAuthToken(props),
    });
  }

  async listFolderContent(props: IListFolderContentEndpointParams) {
    return await invokeEndpointWithAuth<IListFolderContentEndpointResult>({
      path: listFolderContentURL,
      data: props,
      token: this.getAuthToken(props),
    });
  }

  async getFolder(props: IGetFolderEndpointParams) {
    return await invokeEndpointWithAuth<IGetFolderEndpointResult>({
      path: getFolderURL,
      data: props,
      token: this.getAuthToken(props),
    });
  }

  async deleteFolder(props: IDeleteFolderEndpointParams) {
    return invokeEndpointWithAuth<IEndpointResultBase>({
      path: deleteFolderURL,
      data: props,
      token: this.getAuthToken(props),
    });
  }

  async updateFolder(props: IUpdateFolderEndpointParams) {
    return await invokeEndpointWithAuth<IUpdateFolderEndpointResult>({
      path: updateFolderURL,
      data: props,
      token: this.getAuthToken(props),
    });
  }
}
