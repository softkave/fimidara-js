[fimidara](../README.md) / [Exports](../modules.md) / IAppError

# Interface: IAppError

## Hierarchy

- `Error`

  ↳ **`IAppError`**

## Table of contents

### Properties

- [field](IAppError.md#field)
- [message](IAppError.md#message)
- [name](IAppError.md#name)
- [stack](IAppError.md#stack)

## Properties

### field

• `Optional` **field**: `string`

Path to offending value when the error type is a validation error. For example, in the code below:

```typescript
const obj = {
 outerField: {
  innerField: 'value'
 }
};
```

The error path/field is `outerField.innerField` if the value contained does not pass validation.

#### Defined in

[src/definitions/system.ts:75](https://github.com/softkave/files-js/blob/852341e/src/definitions/system.ts#L75)

___

### message

• **message**: `string`

#### Inherited from

Error.message

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1023

___

### name

• **name**: `string`

#### Inherited from

Error.name

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1022

___

### stack

• `Optional` **stack**: `string`

#### Inherited from

Error.stack

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1024
