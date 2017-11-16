import { FETCH_USER } from '../actions/types'

//auth reducer return state as null if not sure about user
//login return user object if user login else return false if user is not login
export default function(state = null, action){
  //console.log(action);
  switch (action.type) {
    case FETCH_USER:
      return action.payload || false;
    default:
      return state;
  }
}
