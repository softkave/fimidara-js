[fimidara](../README.md) / [Exports](../modules.md) / IFolderMatcher

# Interface: IFolderMatcher

## Hierarchy

- **`IFolderMatcher`**

  ↳ [`IDeleteFolderEndpointParams`](IDeleteFolderEndpointParams.md)

  ↳ [`IGetFolderEndpointParams`](IGetFolderEndpointParams.md)

  ↳ [`IListFolderContentEndpointParams`](IListFolderContentEndpointParams.md)

  ↳ [`IUpdateFolderEndpointParams`](IUpdateFolderEndpointParams.md)

## Table of contents

### Properties

- [folderId](IFolderMatcher.md#folderid)
- [folderpath](IFolderMatcher.md#folderpath)

## Properties

### folderId

• `Optional` **folderId**: `string`

Folder ID. Optional if `folderpath` is set.

#### Defined in

[src/definitions/folder.ts:45](https://github.com/softkave/files-js/blob/852341e/src/definitions/folder.ts#L45)

___

### folderpath

• `Optional` **folderpath**: `string`

Folder path. Optional if `folderId` is set.
Folder names are case sensitive, meaning 'MyFolderName' will **not** match 'myfoldername'.

#### Defined in

[src/definitions/folder.ts:42](https://github.com/softkave/files-js/blob/852341e/src/definitions/folder.ts#L42)
