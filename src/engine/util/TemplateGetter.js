import Template from '../util/structures/Template';

export default class TemplateGetter {
  static getTemplates(pathes) {
    let templates = [];
    for (let path in pathes) {
      templates.append(new Template(path));
    }

    return templates;
  }
}
