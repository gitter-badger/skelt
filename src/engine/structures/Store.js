export default class Store {
  constructor() {
    this.replacers = {};
    this.templates = {};
  }

  registerTemplate(key, template) {
    this.templates[key] = template;
  }

  registerReplacer(key, replacer) {
    this.replacers[key] = replacer;
  }
}
