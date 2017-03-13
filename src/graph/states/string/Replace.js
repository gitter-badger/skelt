import State, {makeInvalidMessage, isValidDataTypes} from '../../core/State';
import Data, {DataTypes} from '../../core/Data';

export default class Replace extends State {
  constructor() {
    super(
      makeInvalidMessage("Replace", ["str", "pattern(str or regex)", "replacement(str)"]),
      DataTypes.string
    );
  }

  isValid(childrenNode) {
    const nodesNum = childrenNode.length;
    if (nodesNum == 3) {
      if (isValidDataTypes(childrenNode, [DataTypes.string, DataTypes.string, DataTypes.string]) ||
          isValidDataTypes(childrenNode, [DataTypes.string, DataTypes.regex, DataTypes.string])
      ) {
        return true;
      }
    }
    return false;
  }

  process(childrenNode) {
    let res = childrenNode[0].data.value;
    res = res.replace(childrenNode[1].data.value, childrenNode[2].data.value);

    return new Data(res, this.dataType);
  }
}
