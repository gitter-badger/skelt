import State from '../../core/State';
import {DataTypeOf} from '../../core/Data';

export default class Constant extends State {
  constructor(data) {
    super("Invalid", DataTypeOf(data.value));
    this._data = data;
  }

  isValid(childrenNode) {
    if (childrenNode.length == 0 || childrenNode == null) return true;
    return false;
  }

  process() {
    return this._data;
  }
}
