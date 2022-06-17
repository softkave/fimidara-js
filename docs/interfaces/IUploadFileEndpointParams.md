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

[src/definitions/types.ts:10](https://github.com/softkave/files-js/blob/353a07f/src/definitions/types.ts#L10)

___

### data

• **data**: `ReadableStream`<`any`\> \| `Readable`

#### Defined in

[src/definitions/file.ts:87](https://github.com/softkave/files-js/blob/353a07f/src/definitions/file.ts#L87)

___

### description

• `Optional` **description**: `string`

#### Defined in

[src/definitions/file.ts:82](https://github.com/softkave/files-js/blob/353a07f/src/definitions/file.ts#L82)

___

### encoding

• `Optional` **encoding**: `string`

#### Defined in

[src/definitions/file.ts:83](https://github.com/softkave/files-js/blob/353a07f/src/definitions/file.ts#L83)

___

### extension

• `Optional` **extension**: `string`

#### Defined in

[src/definitions/file.ts:84](https://github.com/softkave/files-js/blob/353a07f/src/definitions/file.ts#L84)

___

### filepath

• **filepath**: `string`

#### Inherited from

Required.filepath

#### Defined in

[src/definitions/file.ts:42](https://github.com/softkave/files-js/blob/353a07f/src/definitions/file.ts#L42)

___

### mimetype

• `Optional` **mimetype**: `string`

#### Defined in

[src/definitions/file.ts:85](https://github.com/softkave/files-js/blob/353a07f/src/definitions/file.ts#L85)

___

### publicAccessActions

• `Optional` **publicAccessActions**: [`UploadFilePublicAccessActions`](../enums/UploadFilePublicAccessActions.md)

#### Defined in

[src/definitions/file.ts:88](https://github.com/softkave/files-js/blob/353a07f/src/definitions/file.ts#L88)
