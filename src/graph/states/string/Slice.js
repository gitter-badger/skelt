import State, {makeInvalidMessage, isValidDataTypes} from '../../core/State';
import Data, {DataTypes} from '../../core/Data';

export default class Slice extends State {
  constructor() {
    super(
      makeInvalidMessage("Slice", ["str", "from(int)", "[to(int)]"]),
      DataTypes.string
    );
  }

  isValid(childrenNode) {
    const nodesNum = childrenNode.length;
    if (nodesNum == 2 || nodesNum == 3) {
      if (isValidDataTypes(childrenNode, [DataTypes.string, DataTypes.number, DataTypes.number])) {
        return true;
      }
    }
    return false;
  }

  process(childrenNode) {
    let res = childrenNode[0].data.value;
    if (childrenNode.length == 2) {
      res = res.slice(childrenNode[1].data.value);
    } else {
      res = res.slice(childrenNode[1].data.value, childrenNode[2].data.value);
    }

    return new Data(res, this.dataType);
  }
}
