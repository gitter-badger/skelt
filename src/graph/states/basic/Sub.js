import State, {makeInvalidMessage, isValidDataTypes} from '../../core/State';
import Data, {DataTypes} from '../../core/Data';

export default class Sub extends State {
  constructor() {
    super(
      makeInvalidMessage("Sub", ["number", "number"]),
      DataTypes.number
    );
  }

  isValid(childrenNode) {
    const nodesNum = childrenNode.length;
    if (nodesNum == 2) {
      if (isValidDataTypes(childrenNode, [DataTypes.number, DataTypes.number])) {
        return true;
      }
    }
    return false;
  }

  process(childrenNode) {
    let res = childrenNode[0].data.value;
    res -= childrenNode[1].data.value;

    return new Data(res, this.dataType);
  }
}
