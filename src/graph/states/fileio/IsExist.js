import State, {makeInvalidMessage, isValidDataTypes} from '../../core/State';
import Data, {DataTypes} from '../../core/Data';

import fs from 'fs';

export default class IsExist extends State {
  constructor() {
    super(
      makeInvalidMessage("IsExist", ["path(str)"]),
      DataTypes.boolean
    );
  }

  isValid(childrenNode) {
    const nodesNum = childrenNode.length;
    if (nodesNum == 1) {
      if (isValidDataTypes(childrenNode, [DataTypes.string])) {
        return true;
      }
    }
    return false;
  }

  process(childrenNode) {
    const path = childrenNode[0].data.value;

    try {
      fs.statSync(path);
      return new Data(true, this.dataType);
    } catch(err) {
      return new Data(false, this.dataType);
    }
  }
}
