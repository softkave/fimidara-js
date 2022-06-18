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

[src/definitions/file.ts:151](https://github.com/softkave/files-js/blob/852341e/src/definitions/file.ts#L151)

___

### getFetchFilePath

▸ **getFetchFilePath**(`filepath`, `width?`, `height?`, `workspaceId?`): `string`

Returns a URL for getting the file associated with the filepath if it exists. Useful for getting full profile image URLs or in other instances where you need to fetch a file using a URL.

#### Parameters

| Name | Type |
| :------ | :------ |
| `filepath` | `string` |
| `width?` | `number` |
| `height?` | `number` |
| `workspaceId?` | ``null`` \| `string` |

#### Returns

`string`

#### Defined in

[src/definitions/file.ts:172](https://github.com/softkave/files-js/blob/852341e/src/definitions/file.ts#L172)

___

### getFile

▸ **getFile**(`props`): `Promise`<[`IGetFileEndpointResult`](IGetFileEndpointResult.md)\>

Returns the file binary, not the file details.

#### Parameters

| Name | Type |
| :------ | :------ |
| `props` | [`IGetFileEndpointParams`](IGetFileEndpointParams.md) |

#### Returns

`Promise`<[`IGetFileEndpointResult`](IGetFileEndpointResult.md)\>

#### Defined in

[src/definitions/file.ts:164](https://github.com/softkave/files-js/blob/852341e/src/definitions/file.ts#L164)

___

### getFileDetails

▸ **getFileDetails**(`props`): `Promise`<[`IGetFileDetailsEndpointResult`](IGetFileDetailsEndpointResult.md)\>

Returns file details without the binary. Call `getFile` to retrieve the file binary.

#### Parameters

| Name | Type |
| :------ | :------ |
| `props` | [`IGetFileDetailsEndpointParams`](IGetFileDetailsEndpointParams.md) |

#### Returns

`Promise`<[`IGetFileDetailsEndpointResult`](IGetFileDetailsEndpointResult.md)\>

#### Defined in

[src/definitions/file.ts:154](https://github.com/softkave/files-js/blob/852341e/src/definitions/file.ts#L154)

___

### getUploadFilePath

▸ **getUploadFilePath**(`workspaceId`, `filepath`): `string`

Returns a URL to which a file can be uploaded. Useful for getting full URLs when you're using code that require a URL to upload data to. The upload has to be `multipart/form-data` formatted after [IUploadFileEndpointParams](IUploadFileEndpointParams.md).

#### Parameters

| Name | Type |
| :------ | :------ |
| `workspaceId` | `string` |
| `filepath` | `string` |

#### Returns

`string`

#### Defined in

[src/definitions/file.ts:182](https://github.com/softkave/files-js/blob/852341e/src/definitions/file.ts#L182)

___

### updateFileDetails

▸ **updateFileDetails**(`props`): `Promise`<[`IUpdateFileDetailsEndpointResult`](IUpdateFileDetailsEndpointResult.md)\>

Updates file details not the binary. Call `uploadFile` on an existing file to update the file binary.

#### Parameters

| Name | Type |
| :------ | :------ |
| `props` | [`IUpdateFileDetailsEndpointParams`](IUpdateFileDetailsEndpointParams.md) |

#### Returns

`Promise`<[`IUpdateFileDetailsEndpointResult`](IUpdateFileDetailsEndpointResult.md)\>

#### Defined in

[src/definitions/file.ts:159](https://github.com/softkave/files-js/blob/852341e/src/definitions/file.ts#L159)

___

### uploadFile

▸ **uploadFile**(`props`): `Promise`<[`IUploadFileEndpointResult`](IUploadFileEndpointResult.md)\>

Uploads a new file if the file does not exist, and replaces an existing file if the file does. To update the file details, call `updateFileDetails`.

#### Parameters

| Name | Type |
| :------ | :------ |
| `props` | [`IUploadFileEndpointParams`](IUploadFileEndpointParams.md) |

#### Returns

`Promise`<[`IUploadFileEndpointResult`](IUploadFileEndpointResult.md)\>

#### Defined in

[src/definitions/file.ts:167](https://github.com/softkave/files-js/blob/852341e/src/definitions/file.ts#L167)
