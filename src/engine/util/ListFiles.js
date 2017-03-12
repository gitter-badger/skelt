import fs from 'fs';

export const listFileRecursievly = function(dir, filelist) {
  let files = fs.readdirSync(dir);
  filelist = filelist || [];
  files.forEach(function(file) {
    if (fs.statSync(dir + '/' + file).isDirectory()) {
      filelist = listFileRecursievly(dir + '/' + file, filelist);
    }
    else {
      filelist.push(file);
    }
  });
  return filelist;
};

export const listFile = function(dir) {
  let files = fs.readdirSync(dir);
  let filelist = [];
  files.forEach(function(file) {
    if (!fs.statSync(dir + '/' + file).isDirectory()) {
      filelist.push(file);
    }
  });
  return filelist;
}

export const listFiles = function(dirs) {
  let filelist = [];
  for (let dir in dirs) {
    filelist.append(listFile(dir));
  }
  return filelist;
}
