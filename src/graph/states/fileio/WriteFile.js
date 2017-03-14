import State, {makeInvalidMessage, isValidDataTypes} from '../../core/State';
import Data, {DataTypes} from '../../core/Data';

import fs from 'fs';

export default class ReadFile extends State {
  constructor() {
    super(
      makeInvalidMessage("ReadFile", ["path(str)", "data(str)"]),
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
    const data = childrenNode[1].data.value;
    fs.writeFileSync(path, data);

    return new Data(data, this.dataType);
  }
}
