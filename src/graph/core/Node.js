export default class Node {

  /**
    data : Data type
    state : State type
    children : an array of Node
  */
  construnctor({data, state, children}) {
    this._data = data;
    this._state = state;
    this._children = children;
  }

  get data() {
    this._data;
  }

  execute() {
    for (const child in this._children) {
      child.execute();
    }

    this._data = this._state.process(this._children);
  }
}
