[fimidara](../README.md) / [Exports](../modules.md) / WorkspaceBillStatus

# Enumeration: WorkspaceBillStatus

## Table of contents

### Enumeration Members

- [BillOverdue](WorkspaceBillStatus.md#billoverdue)
- [GracePeriod](WorkspaceBillStatus.md#graceperiod)
- [Ok](WorkspaceBillStatus.md#ok)

## Enumeration Members

### BillOverdue

• **BillOverdue**

The bill for the previous billing period is overdue, and operations will not be served. Meaning API calls will fail with a `UsageLimitExceededError` error until the workspace's bill is resolved.

#### Defined in

[src/definitions/workspace.ts:13](https://github.com/softkave/files-js/blob/852341e/src/definitions/workspace.ts#L13)

___

### GracePeriod

• **GracePeriod**

Workspace is in the grace period. Grace period is the time given to the workspace to pay it's bill for the previous billing period. During this time, operations will still continue as normal.

#### Defined in

[src/definitions/workspace.ts:10](https://github.com/softkave/files-js/blob/852341e/src/definitions/workspace.ts#L10)

___

### Ok

• **Ok**

Workspace is OK and operations will continue as normal.

#### Defined in

[src/definitions/workspace.ts:7](https://github.com/softkave/files-js/blob/852341e/src/definitions/workspace.ts#L7)
