import State, {makeInvalidMessage, isValidDataTypes} from '../../core/State';
import Data, {DataTypes} from '../../core/Data';

import fs from 'fs';

export default class ReadFile extends State {
  constructor() {
    super(
      makeInvalidMessage("ReadFile", ["path(str)"]),
      DataTypes.string
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
    let res = fs.readFileSync(path);
    res = res.toString();

    return new Data(res, this.dataType);
  }
}
