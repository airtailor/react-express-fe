import Axios from 'axios';
import {expressApi} from './constants';

export const SignUpRequest = (email, password, passwordConfirmation) => {
  const url = `${expressApi}/sign_up`;
  const data = {email, password, passwordConfirmation};
  return Axios.post(url, data);
};

export const SignUpStatusResponse = status => {
  if (status == 200) {
    return 'Sign Up Successful : ) \n Please login';
  }
};
