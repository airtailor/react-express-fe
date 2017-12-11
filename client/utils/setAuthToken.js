import Axios from 'axios';

export default function setAuthToken(token) {
  if (token) {
    const { client, uid, accessToken, expiry } = token;
    Axios.defaults.headers.common['client'] = client;
    Axios.defaults.headers.common['uid'] = uid;
    Axios.defaults.headers.common['access-token'] = accessToken;
    Axios.defaults.headers.common['expiry'] = expiry;
    return true;
  } else {
    debugger;
    delete Axios.defaults.headers.common['client'];
    delete Axios.defaults.headers.common['uid'];
    delete Axios.defaults.headers.common['access-token'];
    delete Axios.defaults.headers.common['expiry'];
    return false;
  }
}
