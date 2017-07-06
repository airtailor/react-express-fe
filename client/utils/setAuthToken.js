import Axios from 'axios';

export default function setAuthToken(token){
  if (token){
    const { client, uid, accessToken } = token;
    //Axios.defaults.data.client = client;
    //Axios.defaults.data.uid = uid;
    //Axios.defaults.data.accessToken = accessToken;
    Axios.defaults.headers.common['client'] = client;
    Axios.defaults.headers.common['uid'] = uid;
    Axios.defaults.headers.common['access-token'] = accessToken;
  } else {
    delete Axios.defaults.headers.common['client'];
    delete Axios.defaults.headers.common['uid'];
    delete Axios.defaults.headers.common['access-token'];
  }
}
