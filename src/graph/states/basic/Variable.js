import State from '../../core/State';
import {DataTypeError, DataTypeOf} from '../../core/Data';

export default class Variable extends State {
  constructor(data) {
    super("Invalid", DataTypeOf(data.value));
    this._data = data;
  }

  isValid(childrenNode) {
    if (childrenNode == [] || childrenNode == null) return true;
    return false;
  }

  assign(data) {
    if (this._data.dataType != data.dataType) {
      throw new DataTypeError(this._data.dataType, data.dataType);
    }

    this._data = data;
  }

  process() {
    return this._data;
  }
}
