[fimidara](../README.md) / [Exports](../modules.md) / IUpdateFolderInput

# Interface: IUpdateFolderInput

## Table of contents

### Properties

- [description](IUpdateFolderInput.md#description)
- [publicAccessOps](IUpdateFolderInput.md#publicaccessops)

## Properties

### description

• `Optional` **description**: `string`

#### Defined in

[src/definitions/folder.ts:66](https://github.com/softkave/files-js/blob/852341e/src/definitions/folder.ts#L66)

___

### publicAccessOps

• `Optional` **publicAccessOps**: [`IPublicAccessOpInput`](IPublicAccessOpInput.md)[]

List of public access actions allowed on this folder and it's children files. Will replace existing list of public access actions. Meaning if you want to add a new public access action, you need to pass it with the existing list, and if you want to remove an existing public access action, you need to pass the existing list without the action.

#### Defined in

[src/definitions/folder.ts:71](https://github.com/softkave/files-js/blob/852341e/src/definitions/folder.ts#L71)
