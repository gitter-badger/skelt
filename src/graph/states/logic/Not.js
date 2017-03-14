import State, {makeInvalidMessage, isValidDataTypes} from '../../core/State';
import Data, {DataTypes} from '../../core/Data';

export default class Not extends State {
  constructor() {
    super(
      makeInvalidMessage("Not", ["boolean"]),
      DataTypes.boolean
    );
  }

  isValid(childrenNode) {
    const nodesNum = childrenNode.length;
    if (nodesNum == 1) {
      if (isValidDataTypes(childrenNode, [DataTypes.boolean])) {
        return true;
      }
    }
    return false;
  }

  process(childrenNode) {
    let res = !childrenNode[0].data.value;

    return new Data(res, this.dataType);
  }
}
