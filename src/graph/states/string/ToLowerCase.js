import State, {makeInvalidMessage, isValidDataTypes} from '../../core/State';
import Data, {DataTypes} from '../../core/Data';

export default class ToLowerCase extends State {
  constructor() {
    super(
      makeInvalidMessage("ToLowerCase", ["str"]),
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

    res = res.toLowerCase();

    return new Data(res, this.dataType);
  }
}
