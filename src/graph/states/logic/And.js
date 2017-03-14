import State, {makeInvalidMessage, isValidDataTypes} from '../../core/State';
import Data, {DataTypes} from '../../core/Data';

export default class And extends State {
  constructor() {
    super(
      makeInvalidMessage("And", ["boolean", "boolean"]),
      DataTypes.boolean
    );
  }

  isValid(childrenNode) {
    const nodesNum = childrenNode.length;
    if (nodesNum == 2) {
      if (isValidDataTypes(childrenNode, [DataTypes.boolean, DataTypes.boolean])) {
        return true;
      }
    }
    return false;
  }

  process(childrenNode) {
    let res = childrenNode[0].data.value && childrenNode[1].data.value;

    return new Data(res, this.dataType);
  }
}
