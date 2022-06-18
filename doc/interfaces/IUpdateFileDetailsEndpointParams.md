[fimidara](../README.md) / [Exports](../modules.md) / IUpdateFileDetailsEndpointParams

# Interface: IUpdateFileDetailsEndpointParams

## Hierarchy

- [`IFileMatcher`](IFileMatcher.md)

- [`IEndpointParamsBase`](IEndpointParamsBase.md)

  ↳ **`IUpdateFileDetailsEndpointParams`**

## Table of contents

### Properties

- [authToken](IUpdateFileDetailsEndpointParams.md#authtoken)
- [file](IUpdateFileDetailsEndpointParams.md#file)
- [fileId](IUpdateFileDetailsEndpointParams.md#fileid)
- [filepath](IUpdateFileDetailsEndpointParams.md#filepath)

## Properties

### authToken

• `Optional` **authToken**: `string`

#### Inherited from

[IEndpointParamsBase](IEndpointParamsBase.md).[authToken](IEndpointParamsBase.md#authtoken)

#### Defined in

[src/definitions/types.ts:10](https://github.com/softkave/files-js/blob/852341e/src/definitions/types.ts#L10)

___

### file

• **file**: [`IUpdateFileDetailsInput`](IUpdateFileDetailsInput.md)

#### Defined in

[src/definitions/file.ts:113](https://github.com/softkave/files-js/blob/852341e/src/definitions/file.ts#L113)

___

### fileId

• `Optional` **fileId**: `string`

File ID. `filepath` is optional if `fileId` is provided.

#### Inherited from

[IFileMatcher](IFileMatcher.md).[fileId](IFileMatcher.md#fileid)

#### Defined in

[src/definitions/file.ts:74](https://github.com/softkave/files-js/blob/852341e/src/definitions/file.ts#L74)

___

### filepath

• `Optional` **filepath**: `string`

File path including the file extension if present. `fileId` is optional if `filepath` is provided. Example, `/path/to/file.txt`. When used to upload a file, the parent folders will also be created if they do not exist, for example, in the file path `/path/to/file.txt`, if `/path` and `/to` do not exist, they will be created.

File and folder names are case sensitive, meaning 'MyFileName' will **not** match 'myfilename'.

#### Inherited from

[IFileMatcher](IFileMatcher.md).[filepath](IFileMatcher.md#filepath)

#### Defined in

[src/definitions/file.ts:71](https://github.com/softkave/files-js/blob/852341e/src/definitions/file.ts#L71)
