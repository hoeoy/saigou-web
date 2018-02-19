import { SET_REST_TIME} from './utils/consts'

export default {

  set_rest_time ({commit}, rest_time) {
    commit(SET_REST_TIME, rest_time)
  },

}
