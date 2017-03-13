import State, {makeInvalidMessage, isValidDataTypes} from '../../core/State';
import Data, {DataTypes} from '../../core/Data';
import child_process from 'child_process';

export default class ChildProcess extends State {
  constructor() {
    super(
      makeInvalidMessage("ChildProcess", ["str"]),
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
    let res = childrenNode[0].data.value;

    res = '' + child_process.execSync(res);

    return new Data(res, this.dataType);
  }
}
