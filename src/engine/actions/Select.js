import Action from './Action';
import TemplateGetter from '../util/TemplateGetter';
//import {listFileRecursievly, listFils} from '../utils/ListFile';

export default class Select extends Action {
  constructor(options = {isAllInDir:false, isAllUnderDir: false}) {
    super();
    this.isAllUnderDir = options.isAllUnderDir;
    this.isAllInDir = options.isAllInDir;
  }

  Action(pathes) {
    let templates = [];
    if (this.isAllInDir) {

    } else if (this.isAllUnderDir) {
      
    } else {
      templates = TemplateGetter.getTemplates(pathes);
    }
    for (let child in this.children) {
      child.action(templates);
    }
  }
}
