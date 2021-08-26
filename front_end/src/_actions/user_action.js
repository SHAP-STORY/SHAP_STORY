//import Axios from 'axios'
import {
  SIGNIN_USER,
  MYPAGE_USER
} from './types'

export const signinAction = () => {
    return {
      type: SIGNIN_USER,
    }
  };

export const mypageAction = () => {
  return {
    type: MYPAGE_USER,
  }
}