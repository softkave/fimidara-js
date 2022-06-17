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

[src/definitions/types.ts:10](https://github.com/softkave/files-js/blob/353a07f/src/definitions/types.ts#L10)

___

### filepath

• **filepath**: `string`

#### Inherited from

Required.filepath

#### Defined in

[src/definitions/file.ts:42](https://github.com/softkave/files-js/blob/353a07f/src/definitions/file.ts#L42)

___

### imageTranformation

• `Optional` **imageTranformation**: [`IImageTransformationParams`](IImageTransformationParams.md)

#### Defined in

[src/definitions/file.ts:62](https://github.com/softkave/files-js/blob/353a07f/src/definitions/file.ts#L62)
