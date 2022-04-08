import type { Blob } from "node-fetch";
import { IAppError } from "./definitions/system";

export interface IEndpointResultBase {
  errors?: IAppError[];
}

export type GetEndpointResult<T extends object = object> = T &
  IEndpointResultBase;

export interface IEndpointParamsBase {
  authToken?: string;
}

type FormDataEntryValue = Blob | string;

export interface FormDataType {
  append(name: string, value: string | Blob, fileName?: string): void;
  delete(name: string): void;
  get(name: string): FormDataEntryValue | null;
  getAll(name: string): FormDataEntryValue[];
  has(name: string): boolean;
  set(name: string, value: string | Blob, fileName?: string): void;
  forEach(
    callbackfn: (
      value: FormDataEntryValue,
      key: string,
      parent: FormDataType
    ) => void,
    thisArg?: any
  ): void;

  [Symbol.iterator](): IterableIterator<[string, FormDataEntryValue]>;
  /** Returns an array of key, value pairs for every entry in the list. */
  entries(): IterableIterator<[string, FormDataEntryValue]>;
  /** Returns a list of keys in the list. */
  keys(): IterableIterator<string>;
  /** Returns a list of values in the list. */
  values(): IterableIterator<FormDataEntryValue>;

  new (): FormDataType;
}
