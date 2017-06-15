/*
 * action types
 */

export const DO_LOGIN = 'DO_LOGIN'
export const DO_LOGOUT = 'DO_LOGOUT'

/*
 * action creators
 */

export function doLogin() {
  return { type: DO_LOGIN }
}
export function doLogout() {
  return { type: DO_LOGOUT }
}
