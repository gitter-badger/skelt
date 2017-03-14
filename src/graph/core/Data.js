export default class Data {

  constructor(value, dataType = null) {
    if (dataType != null && value != null && DataTypeOf(value) != dataType) {
      if (dataType != DataTypes.any) {
        throw new DataTypeError(dataType, DataTypeOf(value));
      }
    }

    this._value = value;
    this._dataType = DataTypeOf(value);
  }

  get value() {
    return this._value;
  }

  get dataType() {
    return this._dataType;
  }
}

export const DataTypes = {
  string: 'string',
  number: 'number',
  boolean: 'boolean',
  function: 'function',
  regex: 'regex',
  array: 'array',
  unknown: 'unknown',
  undefined: 'undefined',
  any: 'any',
}

export const DataTypeOf = function(value) {
  if (typeof value === 'string') return DataTypes.string;
  if (typeof value === 'number') return DataTypes.number;
  if (typeof value === 'boolean') return DataTypes.boolean;
  if (typeof value === 'function') return DataTypes.function;
  if (value instanceof RegExp) return DataTypes.regex;
  if (value instanceof Array) return DataTypes.array;
  return DataTypes.undefined;
}

export class DataTypeError extends Error {
  constructor(expected, actual) {
    super(`This data type must be ${expected}. But this is ${actual}.`);
  }
}
