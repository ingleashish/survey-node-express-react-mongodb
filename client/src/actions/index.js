import axios from 'axios';
import {FETCH_USER} from './types'

export const fetchUser = () => {
  // whenever we return function out of action creator redux thunk pass dispatch
  //function to dispatch action async mode
  return async function(dispatch) {
    const res  = await axios.get('/api/user')
    dispatch({type: FETCH_USER, payload: res.data});
  }
}
