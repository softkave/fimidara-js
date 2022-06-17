[fimidara](../README.md) / [Exports](../modules.md) / IFileEndpoints

# Interface: IFileEndpoints

## Table of contents

### Methods

- [deleteFile](IFileEndpoints.md#deletefile)
- [getFetchFilePath](IFileEndpoints.md#getfetchfilepath)
- [getFile](IFileEndpoints.md#getfile)
- [getFileDetails](IFileEndpoints.md#getfiledetails)
- [getUploadFilePath](IFileEndpoints.md#getuploadfilepath)
- [updateFileDetails](IFileEndpoints.md#updatefiledetails)
- [uploadFile](IFileEndpoints.md#uploadfile)

## Methods

### deleteFile

▸ **deleteFile**(`props`): `Promise`<[`IEndpointResultBase`](IEndpointResultBase.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `props` | [`IDeleteFileEndpointParams`](IDeleteFileEndpointParams.md) |

#### Returns

`Promise`<[`IEndpointResultBase`](IEndpointResultBase.md)\>

#### Defined in

[src/definitions/file.ts:96](https://github.com/softkave/files-js/blob/353a07f/src/definitions/file.ts#L96)

___

### getFetchFilePath

▸ **getFetchFilePath**(`filepath`, `width?`, `height?`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `filepath` | `string` |
| `width?` | `number` |
| `height?` | `number` |

#### Returns

`string`

#### Defined in

[src/definitions/file.ts:107](https://github.com/softkave/files-js/blob/353a07f/src/definitions/file.ts#L107)

___

### getFile

▸ **getFile**(`props`): `Promise`<[`IGetFileEndpointResult`](IGetFileEndpointResult.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `props` | [`IGetFileEndpointParams`](IGetFileEndpointParams.md) |

#### Returns

`Promise`<[`IGetFileEndpointResult`](IGetFileEndpointResult.md)\>

#### Defined in

[src/definitions/file.ts:103](https://github.com/softkave/files-js/blob/353a07f/src/definitions/file.ts#L103)

___

### getFileDetails

▸ **getFileDetails**(`props`): `Promise`<[`IGetFileDetailsEndpointResult`](IGetFileDetailsEndpointResult.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `props` | [`IGetFileDetailsEndpointParams`](IGetFileDetailsEndpointParams.md) |

#### Returns

`Promise`<[`IGetFileDetailsEndpointResult`](IGetFileDetailsEndpointResult.md)\>

#### Defined in

[src/definitions/file.ts:97](https://github.com/softkave/files-js/blob/353a07f/src/definitions/file.ts#L97)

___

### getUploadFilePath

▸ **getUploadFilePath**(`workspaceId`, `filepath`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `workspaceId` | `string` |
| `filepath` | `string` |

#### Returns

`string`

#### Defined in

[src/definitions/file.ts:108](https://github.com/softkave/files-js/blob/353a07f/src/definitions/file.ts#L108)

___

### updateFileDetails

▸ **updateFileDetails**(`props`): `Promise`<[`IUpdateFileDetailsEndpointResult`](IUpdateFileDetailsEndpointResult.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `props` | [`IUpdateFileDetailsEndpointParams`](IUpdateFileDetailsEndpointParams.md) |

#### Returns

`Promise`<[`IUpdateFileDetailsEndpointResult`](IUpdateFileDetailsEndpointResult.md)\>

#### Defined in

[src/definitions/file.ts:100](https://github.com/softkave/files-js/blob/353a07f/src/definitions/file.ts#L100)

___

### uploadFile

▸ **uploadFile**(`props`): `Promise`<[`IUploadFileEndpointResult`](IUploadFileEndpointResult.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `props` | [`IUploadFileEndpointParams`](IUploadFileEndpointParams.md) |

#### Returns

`Promise`<[`IUploadFileEndpointResult`](IUploadFileEndpointResult.md)\>

#### Defined in

[src/definitions/file.ts:104](https://github.com/softkave/files-js/blob/353a07f/src/definitions/file.ts#L104)
