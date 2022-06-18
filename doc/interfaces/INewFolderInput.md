[fimidara](../README.md) / [Exports](../modules.md) / INewFolderInput

# Interface: INewFolderInput

## Table of contents

### Properties

- [description](INewFolderInput.md#description)
- [folderpath](INewFolderInput.md#folderpath)
- [publicAccessOps](INewFolderInput.md#publicaccessops)

## Properties

### description

• `Optional` **description**: `string`

#### Defined in

[src/definitions/folder.ts:56](https://github.com/softkave/files-js/blob/852341e/src/definitions/folder.ts#L56)

___

### folderpath

• **folderpath**: `string`

Folder path. Example, `/path/to/files`. The parent folders will be created if they do not exist, for example, in the path `/path/to/files`, if `/path`, `/to`, and `/files` do not exist, they will be created.

Folder names are case sensitive, meaning 'MyFolderName' will **not** match 'myfoldername'.

#### Defined in

[src/definitions/folder.ts:55](https://github.com/softkave/files-js/blob/852341e/src/definitions/folder.ts#L55)

___

### publicAccessOps

• `Optional` **publicAccessOps**: [`IPublicAccessOpInput`](IPublicAccessOpInput.md)[]

List of public access actions allowed on this folder and it's children files.

#### Defined in

[src/definitions/folder.ts:61](https://github.com/softkave/files-js/blob/852341e/src/definitions/folder.ts#L61)
