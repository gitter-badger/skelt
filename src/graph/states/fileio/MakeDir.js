import State, {makeInvalidMessage, isValidDataTypes} from '../../core/State';
import Data, {DataTypes} from '../../core/Data';

import fs from 'fs';

export default class MakeDir extends State {
  constructor() {
    super(
      makeInvalidMessage("MakeDir", ["path(str)", "dir(str)"]),
      DataTypes.string
    );
  }

  isValid(childrenNode) {
    const nodesNum = childrenNode.length;
    if (nodesNum == 2) {
      if (isValidDataTypes(childrenNode, [DataTypes.string, DataTypes.string])) {
        return true;
      }
    }
    return false;
  }

  process(childrenNode) {
    const path = childrenNode[0].data.value;
    const dirPath = `${path}/${childrenNode[1].data.value}`;
    try {
      fs.statSync(path);
      fs.mkdirSync(dirPath);
    } catch(err) {
      return new Data(false, this.dataType);
    }

    return new Data(dirPath, this.dataType);
  }
}
