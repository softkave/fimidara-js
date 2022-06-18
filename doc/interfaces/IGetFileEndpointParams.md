[fimidara](../README.md) / [Exports](../modules.md) / IGetFileEndpointParams

# Interface: IGetFileEndpointParams

## Hierarchy

- `Required`<`Pick`<[`IFileMatcher`](IFileMatcher.md), ``"filepath"``\>\>

- [`IEndpointParamsBase`](IEndpointParamsBase.md)

  ↳ **`IGetFileEndpointParams`**

## Table of contents

### Properties

- [authToken](IGetFileEndpointParams.md#authtoken)
- [filepath](IGetFileEndpointParams.md#filepath)
- [imageTranformation](IGetFileEndpointParams.md#imagetranformation)

## Properties

### authToken

• `Optional` **authToken**: `string`

#### Inherited from

[IEndpointParamsBase](IEndpointParamsBase.md).[authToken](IEndpointParamsBase.md#authtoken)

#### Defined in

[src/definitions/types.ts:10](https://github.com/softkave/files-js/blob/852341e/src/definitions/types.ts#L10)

___

### filepath

• **filepath**: `string`

File path including the file extension if present. `fileId` is optional if `filepath` is provided. Example, `/path/to/file.txt`. When used to upload a file, the parent folders will also be created if they do not exist, for example, in the file path `/path/to/file.txt`, if `/path` and `/to` do not exist, they will be created.

File and folder names are case sensitive, meaning 'MyFileName' will **not** match 'myfilename'.

#### Inherited from

Required.filepath

#### Defined in

[src/definitions/file.ts:71](https://github.com/softkave/files-js/blob/852341e/src/definitions/file.ts#L71)

___

### imageTranformation

• `Optional` **imageTranformation**: [`IImageTransformationParams`](IImageTransformationParams.md)

Optional image transformation options. Will be applied if the file is an image.

#### Defined in

[src/definitions/file.ts:97](https://github.com/softkave/files-js/blob/852341e/src/definitions/file.ts#L97)
