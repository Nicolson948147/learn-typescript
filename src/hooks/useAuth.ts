export function useAuth() {
  const isLoggedIn = false;
  // const isLoggedIn = Boolean(localStorage.getItem('access_token'));

  return isLoggedIn;
}
