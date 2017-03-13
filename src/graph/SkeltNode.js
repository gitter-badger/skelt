export default class SkeltNode {
  constructor({accessor, skeltGraph}) {
    this._accessor = accessor;
    this._skeltGraph = skeltGraph;
  }

  get accessor() {
    return this._accessor;
  }

  getValue() {
    return this._skeltGraph.getValue(this);
  }

  execute() {
    this._skeltGraph.execute(this);
  }
}
