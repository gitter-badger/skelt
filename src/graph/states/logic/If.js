import State, {makeInvalidMessage, isValidDataTypes} from '../../core/State';
import Data, {DataTypes, DataTypeOf} from '../../core/Data';

export default class If extends State {
  constructor() {
    super(
      makeInvalidMessage("If", ["boolean", "any"]),
      DataTypes.unknown
    );
  }

  isValid(childrenNode) {
    const nodesNum = childrenNode.length;
    if (nodesNum == 2) {
      if (isValidDataTypes(childrenNode, [DataTypes.boolean, DataTypes.any])) {
        return true;
      }
    }
    return false;
  }

  execute(childrenNode) {
    childrenNode[0].execute();
    const isTrue = childrenNode[0].data.value;
    if (isTrue) {
      childrenNode[1].execute();
      const res = childrenNode[1].data.value;
      return new Data(res, DataTypeOf(res));
    }
    return new Data(false, DataTypes.boolean);
  }
}
