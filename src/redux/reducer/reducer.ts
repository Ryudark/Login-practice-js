import { GET, GET_DETAIL, LOGIN } from '../../components/constants/Constants'
import { Action } from '../../components/Types/Types'

const INITIAL_STATE={
  user:{},
  videos:{},
  detail:{}
}


function reducer(state: any, action:Action) {
  switch(action.type){
    case LOGIN:
      return 0
    case GET:
      return {
        ...INITIAL_STATE,
        videos:action.payload
      }
    case GET_DETAIL:
      return{
        ...INITIAL_STATE,
        detail:action.payload
      }
    default: return state
  }
}

export default reducer