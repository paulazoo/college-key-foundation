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

export function setAccounts(payload) {
  return { type: 'SET_ACCOUNTS', payload };
}

export function setMentors(payload) {
  return { type: 'SET_MENTORS', payload };
}

export function setMentees(payload) {
  return { type: 'SET_MENTEES', payload };
}
