//import Axios from 'axios'
import {
  SIGNIN_USER,
} from './types'

/*export function SigninUser(dataSubmit) {
  const request = Axios.post('/api/home/login', dataSubmit)
    .then(response => response.data)

  // action -> reducer
  return {
    type: SIGNIN_USER,
    payload: request
  }
}*/
export const serverConnect = () => {
    return {
      type: SIGNIN_USER,
    }
  };