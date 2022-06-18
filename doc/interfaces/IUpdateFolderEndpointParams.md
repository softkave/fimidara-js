[fimidara](../README.md) / [Exports](../modules.md) / IUpdateFolderEndpointParams

# Interface: IUpdateFolderEndpointParams

## Hierarchy

- [`IFolderMatcher`](IFolderMatcher.md)

- [`IEndpointParamsBase`](IEndpointParamsBase.md)

  ↳ **`IUpdateFolderEndpointParams`**

## Table of contents

### Properties

- [authToken](IUpdateFolderEndpointParams.md#authtoken)
- [folder](IUpdateFolderEndpointParams.md#folder)
- [folderId](IUpdateFolderEndpointParams.md#folderid)
- [folderpath](IUpdateFolderEndpointParams.md#folderpath)

## Properties

### authToken

• `Optional` **authToken**: `string`

#### Inherited from

[IEndpointParamsBase](IEndpointParamsBase.md).[authToken](IEndpointParamsBase.md#authtoken)

#### Defined in

[src/definitions/types.ts:10](https://github.com/softkave/files-js/blob/852341e/src/definitions/types.ts#L10)

___

### folder

• **folder**: [`IUpdateFolderInput`](IUpdateFolderInput.md)

#### Defined in

[src/definitions/folder.ts:114](https://github.com/softkave/files-js/blob/852341e/src/definitions/folder.ts#L114)

___

### folderId

• `Optional` **folderId**: `string`

Folder ID. Optional if `folderpath` is set.

#### Inherited from

[IFolderMatcher](IFolderMatcher.md).[folderId](IFolderMatcher.md#folderid)

#### Defined in

[src/definitions/folder.ts:45](https://github.com/softkave/files-js/blob/852341e/src/definitions/folder.ts#L45)

___

### folderpath

• `Optional` **folderpath**: `string`

Folder path. Optional if `folderId` is set.
Folder names are case sensitive, meaning 'MyFolderName' will **not** match 'myfoldername'.

#### Inherited from

[IFolderMatcher](IFolderMatcher.md).[folderpath](IFolderMatcher.md#folderpath)

#### Defined in

[src/definitions/folder.ts:42](https://github.com/softkave/files-js/blob/852341e/src/definitions/folder.ts#L42)
