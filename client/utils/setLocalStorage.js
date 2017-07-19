export function setLocalStorageAuth(AirTailorTokens){
  const { client, uid, accessToken, expiry } = AirTailorTokens;
  localStorage.setItem('AirTailorTokens', JSON.stringify(AirTailorTokens));
  return true;
}

export function setLocalStorageUser(user){
  const { id, email, store_id, roles, uid } = user;
  const CurrentUser = { uid, email, store_id, roles, id };
  localStorage.setItem('CurrentUser', JSON.stringify(CurrentUser));
  return true;
}
