import Axios from 'axios';
import { expressApi } from './constants';

export const UserSignUpRequest = (email, password, passwordConfirmation) => {
  const url = `${expressApi}/sign_up`;
  const data = { email, password, passwordConfirmation }
  return Axios.post(url, data)
}
