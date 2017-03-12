import fs from 'fs';

export default class Template {

  /**
    rule: [{
      token: Regex,
      replace: "aiueo",
    }]
  */
  constructor({filePath, extension}) {
    this.filePath = filePath;
    this.extension = extension;
  }

  makeFilePath(filePath, fileName) {
    return `${filePath}/${fileName}.${this.extension}`;
  }

  get() {
    let res;
    fs.readFile(this.filePath, 'utf8', function(err, text) {
      if (text) {
        res = text;
      } else {
        throw new Error(err);
      }
    });
    return res;
  }
}
