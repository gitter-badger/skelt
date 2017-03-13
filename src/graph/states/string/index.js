import Replace from './Replace';
import Slice from './Slice';
import SubStr from './SubStr';
import SubString from './SubString';
import Match from './Match';
import Search from './Search';
import Split from './Split';
import ToLowerCase from './ToLowerCase';
import ToUpperCase from './ToUpperCase';

export const StringOperation = {
  Replace: new Replace(),
  Slice: new Slice(),
  SubStr: new SubStr(),
  SubString: new SubString(),
  Match: new Match(),
  Search: new Search(),
  Split: new Split(),
  ToLowerCase: new ToLowerCase(),
  ToUpperCase: new ToUpperCase(),
}
