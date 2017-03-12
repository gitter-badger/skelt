export default class SkeltNode {
  constructor({accessor, skeltGraph}) {
    this.accessor = accessor;
    this.skeltGraph = skeltGraph;
  }

  get accessor() {
    return this.accessor;
  }

  execute() {
    this.skeltGraph.execute(this);
  }
}
