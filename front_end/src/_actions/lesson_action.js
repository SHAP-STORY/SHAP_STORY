//import Axios from 'axios'
import { BASIC_USER, ADVANCED_USER } from "./types";

export const basicAction = () => {
  return {
    type: BASIC_USER,
  };
};

export const advancedAction = () => {
  return {
    type: ADVANCED_USER,
  };
};
