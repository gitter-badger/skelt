import State, {makeInvalidMessage, isValidDataTypes} from '../../core/State';
import Data, {DataTypes} from '../../core/Data';

export default class Search extends State {
  constructor() {
    super(
      makeInvalidMessage("Search", ["str", "regex"]),
      DataTypes.string
    );
  }

  isValid(childrenNode) {
    const nodesNum = childrenNode.length;
    if (nodesNum == 2) {
      if (isValidDataTypes(childrenNode, [DataTypes.string, DataTypes.regex])) {
        return true;
      }
    }
    return false;
  }

  process(childrenNode) {
    let res = childrenNode[0].data.value;
    res = res.search(childrenNode[1].data.value);

    return new Data(res, this.dataType);
  }
}
