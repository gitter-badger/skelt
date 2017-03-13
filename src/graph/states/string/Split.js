import State, {makeInvalidMessage, isValidDataTypes} from '../../core/State';
import Data, {DataTypes} from '../../core/Data';

export default class Split extends State {
  constructor() {
    super(
      makeInvalidMessage("Split", ["str", "separator(str)", "[limit(int)]"]),
      DataTypes.array
    );
  }

  isValid(childrenNode) {
    const nodesNum = childrenNode.length;
    if (nodesNum == 2 || nodesNum == 3) {
      if (isValidDataTypes(childrenNode, [DataTypes.string, DataTypes.string, DataTypes.number])) {
        return true;
      }
    }
    return false;
  }

  process(childrenNode) {
    let res = childrenNode[0].data.value;

    if (childrenNode.length == 2) {
      res = res.split(childrenNode[1].data.value);
    } else {
      res = res.split(childrenNode[1].data.value, childrenNode[2].data.value);
    }
    return new Data(res, this.dataType);
  }
}
