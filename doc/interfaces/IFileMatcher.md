[fimidara](../README.md) / [Exports](../modules.md) / IFileMatcher

# Interface: IFileMatcher

## Hierarchy

- **`IFileMatcher`**

  ↳ [`IGetFileDetailsEndpointParams`](IGetFileDetailsEndpointParams.md)

  ↳ [`IDeleteFileEndpointParams`](IDeleteFileEndpointParams.md)

  ↳ [`IUpdateFileDetailsEndpointParams`](IUpdateFileDetailsEndpointParams.md)

## Table of contents

### Properties

- [fileId](IFileMatcher.md#fileid)
- [filepath](IFileMatcher.md#filepath)

## Properties

### fileId

• `Optional` **fileId**: `string`

File ID. `filepath` is optional if `fileId` is provided.

#### Defined in

[src/definitions/file.ts:74](https://github.com/softkave/files-js/blob/852341e/src/definitions/file.ts#L74)

___

### filepath

• `Optional` **filepath**: `string`

File path including the file extension if present. `fileId` is optional if `filepath` is provided. Example, `/path/to/file.txt`. When used to upload a file, the parent folders will also be created if they do not exist, for example, in the file path `/path/to/file.txt`, if `/path` and `/to` do not exist, they will be created.

File and folder names are case sensitive, meaning 'MyFileName' will **not** match 'myfilename'.

#### Defined in

[src/definitions/file.ts:71](https://github.com/softkave/files-js/blob/852341e/src/definitions/file.ts#L71)
