
export default class Replacer {
  constructor({template, rule}) {
    this.template = template;
    this.rule = rule;
  }

  getReplaced() {
    let res = this.template.get();
    for (let value in this.rule) {
      res = res.replace(value.token, value.replace);
    }
    return res;
  }

  getTemplate() {
    return this.template;
  }
}
