export function setUser(payload) {
  return { type: 'SET_USER', payload };
}

export function userLogout(payload) {
  return { type: 'USER_LOGOUT', payload };
}

