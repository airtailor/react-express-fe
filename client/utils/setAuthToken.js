import Axios from 'axios';

export default function setAuthToken(token){
  if (token){
    const { client, uid, accessToken } = token;
    Axios.defaults.client = client;
    Axios.defaults.uid = uid;
    Axios.defaults.accessToken = accessToken;
  } else {
    delete Axios.defaults.client;
    delete Axios.defaults.uid;
    delete Axios.defaults.accessToken;
  }
}
