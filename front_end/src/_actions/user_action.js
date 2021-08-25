import Axios from 'axios'
import { request } from 'axios';
import {
  SIGNIN_USER,
  SIGNUP_USER,
} from './types'

const USER_URL = "/api/home";
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

export function signUpUser(dataToSubmit) {
  const data = request("post", USER_URL + "/register", dataToSubmit);

  return {
    type: SIGNUP_USER,
    payload: data,
  };
}
