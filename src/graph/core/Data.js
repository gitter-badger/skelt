export default class Data {

  /**
    data :
    any type excluding functions. only string or number type.
  */
  constructor(data) {
    this._data = data;
  }

  get value() {
    return this._data;
  }

}
