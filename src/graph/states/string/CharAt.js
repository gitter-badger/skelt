import State, {makeInvalidMessage, isValidDataTypes} from '../../core/State';
import Data, {DataTypes} from '../../core/Data';

export default class CharAt extends State {
  constructor() {
    super(
      makeInvalidMessage("CharAt", ["str", "index"]),
      DataTypes.string
    );
  }

  isValid(childrenNode) {
    const nodesNum = childrenNode.length;
    if (nodesNum == 2) {
      if (isValidDataTypes(childrenNode, [DataTypes.string, DataTypes.number])) {
        return true;
      }
    }
    return false;
  }

  process(childrenNode) {
    let res = childrenNode[0].data.value;
    res = res.charAt(childrenNode[1].data.value);

    return new Data(res, this.dataType);
  }
}
