import And from './And';
import Equal from './Equal';
import GT from './GT';
import GTE from './GTE';
import If from './If';
import LT from './LT';
import LTE from './LTE';
import Not from './Not';
import NotEqual from './NotEqual';
import Or from './Or';


export const LogicOperation = {
  And: new And(),
  Equal: new Equal(),
  GT: new GT(),
  GTE: new GTE(),
  If: new If(),
  LT: new LT(),
  LTE: new LTE(),
  Not: new Not(),
  NotEqual: new NotEqual(),
  Or: new Or(),
}
