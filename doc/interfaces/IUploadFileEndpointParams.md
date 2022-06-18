[fimidara](../README.md) / [Exports](../modules.md) / IUploadFileEndpointParams

# Interface: IUploadFileEndpointParams

## Hierarchy

- `Required`<`Pick`<[`IFileMatcher`](IFileMatcher.md), ``"filepath"``\>\>

- [`IEndpointParamsBase`](IEndpointParamsBase.md)

  ↳ **`IUploadFileEndpointParams`**

## Table of contents

### Properties

- [authToken](IUploadFileEndpointParams.md#authtoken)
- [data](IUploadFileEndpointParams.md#data)
- [description](IUploadFileEndpointParams.md#description)
- [encoding](IUploadFileEndpointParams.md#encoding)
- [extension](IUploadFileEndpointParams.md#extension)
- [filepath](IUploadFileEndpointParams.md#filepath)
- [mimetype](IUploadFileEndpointParams.md#mimetype)
- [publicAccessActions](IUploadFileEndpointParams.md#publicaccessactions)

## Properties

### authToken

• `Optional` **authToken**: `string`

#### Inherited from

[IEndpointParamsBase](IEndpointParamsBase.md).[authToken](IEndpointParamsBase.md#authtoken)

#### Defined in

[src/definitions/types.ts:10](https://github.com/softkave/files-js/blob/852341e/src/definitions/types.ts#L10)

___

### data

• **data**: `ReadableStream`<`any`\> \| `Readable`

[Readable](https://nodejs.org/api/stream.html#class-streamreadable) for Node.js,
[ReadableStream](https://developer.mozilla.org/en-US/docs/Web/API/ReadableStream) in the browser

#### Defined in

[src/definitions/file.ts:136](https://github.com/softkave/files-js/blob/852341e/src/definitions/file.ts#L136)

___

### description

• `Optional` **description**: `string`

#### Defined in

[src/definitions/file.ts:125](https://github.com/softkave/files-js/blob/852341e/src/definitions/file.ts#L125)

___

### encoding

• `Optional` **encoding**: `string`

#### Defined in

[src/definitions/file.ts:126](https://github.com/softkave/files-js/blob/852341e/src/definitions/file.ts#L126)

___

### extension

• `Optional` **extension**: `string`

File extension. Can be passed separately or included in the filepath, for example, `/path/to/file.txt`.

#### Defined in

[src/definitions/file.ts:129](https://github.com/softkave/files-js/blob/852341e/src/definitions/file.ts#L129)

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

### mimetype

• `Optional` **mimetype**: `string`

#### Defined in

[src/definitions/file.ts:130](https://github.com/softkave/files-js/blob/852341e/src/definitions/file.ts#L130)

___

### publicAccessActions

• `Optional` **publicAccessActions**: [`UploadFilePublicAccessActions`](../enums/UploadFilePublicAccessActions.md)

Determines the public actions that will be allowed on this file if the operation succeeds.

#### Defined in

[src/definitions/file.ts:141](https://github.com/softkave/files-js/blob/852341e/src/definitions/file.ts#L141)
