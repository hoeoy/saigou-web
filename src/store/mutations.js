import {SET_REST_TIME} from './utils/consts';

export default {

  [SET_REST_TIME] (state, rest_time) {
    state.rest_time = rest_time;
  },
}
