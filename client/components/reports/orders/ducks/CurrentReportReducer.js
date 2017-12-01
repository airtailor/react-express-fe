import {SET_CURRENT_REPORT} from './constants';
import {initialState} from './helper';

const CurrentReportReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CURRENT_REPORT:
      return action.report;
      break;
    default:
      return state;
  }
};

export default CurrentReportReducer;
