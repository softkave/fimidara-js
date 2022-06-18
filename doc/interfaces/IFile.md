[fimidara](../README.md) / [Exports](../modules.md) / IFile

# Interface: IFile

## Table of contents

### Properties

- [createdAt](IFile.md#createdat)
- [createdBy](IFile.md#createdby)
- [description](IFile.md#description)
- [encoding](IFile.md#encoding)
- [extension](IFile.md#extension)
- [folderId](IFile.md#folderid)
- [idPath](IFile.md#idpath)
- [lastUpdatedAt](IFile.md#lastupdatedat)
- [lastUpdatedBy](IFile.md#lastupdatedby)
- [mimetype](IFile.md#mimetype)
- [name](IFile.md#name)
- [namePath](IFile.md#namepath)
- [publicAccessOps](IFile.md#publicaccessops)
- [resourceId](IFile.md#resourceid)
- [size](IFile.md#size)
- [workspaceId](IFile.md#workspaceid)

## Properties

### createdAt

• **createdAt**: `string` \| `Date`

#### Defined in

[src/definitions/file.ts:22](https://github.com/softkave/files-js/blob/852341e/src/definitions/file.ts#L22)

___

### createdBy

• **createdBy**: [`IAgent`](IAgent.md)

#### Defined in

[src/definitions/file.ts:21](https://github.com/softkave/files-js/blob/852341e/src/definitions/file.ts#L21)

___

### description

• `Optional` **description**: `string`

#### Defined in

[src/definitions/file.ts:31](https://github.com/softkave/files-js/blob/852341e/src/definitions/file.ts#L31)

___

### encoding

• `Optional` **encoding**: `string`

#### Defined in

[src/definitions/file.ts:19](https://github.com/softkave/files-js/blob/852341e/src/definitions/file.ts#L19)

___

### extension

• **extension**: `string`

File extension. Empty string if file was uploaded without one.

#### Defined in

[src/definitions/file.ts:30](https://github.com/softkave/files-js/blob/852341e/src/definitions/file.ts#L30)

___

### folderId

• `Optional` **folderId**: `string`

Immediate parent folder ID if present.

#### Defined in

[src/definitions/file.ts:11](https://github.com/softkave/files-js/blob/852341e/src/definitions/file.ts#L11)

___

### idPath

• **idPath**: `string`[]

Sorted list of parent folder IDs. 2nd ot the last item is the immediate parent folder if present, and the last will be the file's own ID.

#### Defined in

[src/definitions/file.ts:14](https://github.com/softkave/files-js/blob/852341e/src/definitions/file.ts#L14)

___

### lastUpdatedAt

• `Optional` **lastUpdatedAt**: `string` \| `Date`

#### Defined in

[src/definitions/file.ts:24](https://github.com/softkave/files-js/blob/852341e/src/definitions/file.ts#L24)

___

### lastUpdatedBy

• `Optional` **lastUpdatedBy**: [`IAgent`](IAgent.md)

#### Defined in

[src/definitions/file.ts:23](https://github.com/softkave/files-js/blob/852341e/src/definitions/file.ts#L23)

___

### mimetype

• `Optional` **mimetype**: `string`

#### Defined in

[src/definitions/file.ts:18](https://github.com/softkave/files-js/blob/852341e/src/definitions/file.ts#L18)

___

### name

• **name**: `string`

File name without the extension. File names are case sensitive, meaning 'MyFileName' will **not** match 'myfilename'.

#### Defined in

[src/definitions/file.ts:27](https://github.com/softkave/files-js/blob/852341e/src/definitions/file.ts#L27)

___

### namePath

• **namePath**: `string`[]

Sorted list of parent folder names. 2nd ot the last item is the immediate parent folder if present, and the last will be the file's own name.

#### Defined in

[src/definitions/file.ts:17](https://github.com/softkave/files-js/blob/852341e/src/definitions/file.ts#L17)

___

### publicAccessOps

• **publicAccessOps**: [`IPublicAccessOp`](IPublicAccessOp.md)[]

A list of public actions that can be performed on the file, i.e, this list contains the list of actions an unauthorized or unauthenticated agent can perform on the file. This is useful for public files like profile pictures, css, html, and js files, etc.

#### Defined in

[src/definitions/file.ts:34](https://github.com/softkave/files-js/blob/852341e/src/definitions/file.ts#L34)

___

### resourceId

• **resourceId**: `string`

#### Defined in

[src/definitions/file.ts:7](https://github.com/softkave/files-js/blob/852341e/src/definitions/file.ts#L7)

___

### size

• **size**: `number`

#### Defined in

[src/definitions/file.ts:20](https://github.com/softkave/files-js/blob/852341e/src/definitions/file.ts#L20)

___

### workspaceId

• **workspaceId**: `string`

#### Defined in

[src/definitions/file.ts:8](https://github.com/softkave/files-js/blob/852341e/src/definitions/file.ts#L8)
