import Data, {DataTypes} from './Data';

export default class State {

  constructor(invalidMessage = "Invalid", dataType = DataTypes.number) {
    this._invalidMessage = invalidMessage;
    this._dataType = dataType;
  }

  // for validation check.
  get invalidMessage() {
    return this._invalidMessage;
  }

  // for validation
  get dataType() {
    return this._dataType;
  }

  // Do override
  // Args: childrenNode
  // Return: bool
  isValid() {
    return true;
  }

  // Do override
  // Args: childrenNode
  // Return: Data type
  process() {
    return new Data();
  }
}

export const makeInvalidMessage = function(nodeName, args = []) {
  let argsStr = "";
  for (const arg in args) {
    argsStr += `${args[arg]}, `;
  }
  argsStr = argsStr.slice(0, -2);
  return `${nodeName} node needs these: (${argsStr})`;
}

export const isValidDataTypes = function(childrenNode, dataTypes) {
  const n = childrenNode.length;
  for (let i = 0; i < n; i++) {
    if (childrenNode[i].state.dataType != dataTypes[i]) {
      return false;
    }
  }
  return true;
}
