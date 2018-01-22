export function setLocalStorageAuth(AirTailorTokens) {
  const { client, uid, accessToken, expiry } = AirTailorTokens;
  localStorage.setItem('AirTailorTokens', JSON.stringify(AirTailorTokens));
  return true;
}

export function setLocalStorageUser(user) {
  const { id, email, store_id, valid_roles, uid } = user;
  const CurrentUser = { uid, email, store_id, valid_roles, id };
  localStorage.setItem('CurrentUser', JSON.stringify(CurrentUser));
  return true;
}

export function setLocalStorageStore(store) {
  localStorage.setItem('CurrentStore', JSON.stringify(store));
  return true;
}

export const loadState = () => {
  try {
    const serializedState = localStorage.getItem('state');
    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (err) {
    return undefined;
  }
};

export const saveState = state => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem('state', serializedState);
  } catch (err) {
    console.log('error', err);
  }
};
