export function setUser(payload) {
  return { type: 'SET_USER', payload };
}

export function setAccount(payload) {
  return { type: 'SET_ACCOUNT', payload };
}

export function setPersonalSnackbar(payload) {
  return { type: 'SET_PERSONALSNACKBAR', payload };
}

export function userLogout(payload) {
  return { type: 'USER_LOGOUT', payload };
}
