export default class Node {

  /**
    data : Data type
    state : State type
    children : an array of Node
  */
  constructor({data, state, children = []}) {
    if (!state.isValid(children)) {
      throw new Error(state.invalidMessage);
    }

    this._data = data;
    this._state = state;
    this._children = children;

    this._isActivated = false;
  }

  get data() {
    return this._data;
  }

  get state() {
    return this._state;
  }

  inactivate() {
    this._isActivated = false;
  }

  execute() {
    if (this._isActivated == false) {
      this._data = this._state.execute(this._children);

      this._isActivated = true;
    }
  }
}
