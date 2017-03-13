import State, {makeInvalidMessage, isValidDataTypes} from '../../core/State';
import Data, {DataTypes} from '../../core/Data';

export default class Add extends State {
  constructor(stringOrNumber) {
    super(
      makeInvalidMessage("Sub", ["str or number", "str or number"]),
      stringOrNumber
    );
  }

  isValid(childrenNode) {
    const nodesNum = childrenNode.length;
    if (nodesNum == 2) {
      if (isValidDataTypes(childrenNode, [DataTypes.number, DataTypes.number]) ||
          isValidDataTypes(childrenNode, [DataTypes.string, DataTypes.string]))
      {
        return true;
      }
    }
    return false;
  }

  process(childrenNode) {
    let res = childrenNode[0].data.value;
    res += childrenNode[1].data.value;

    return new Data(res, this.dataType);
  }
}
