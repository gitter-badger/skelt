export default class Accessor {
  constructor(id) {
    this._id = id;
  }

  get id() {
    return this._id;
  }
}
