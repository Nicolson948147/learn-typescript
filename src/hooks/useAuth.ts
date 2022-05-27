import { ACCESS_TOKEN } from 'constants/auth';
import getLocalStorageItem from 'helpers/getLocalStorageItem';

export function useAuth() {
  // const isLoggedIn = false;
  const isLoggedIn = Boolean(getLocalStorageItem(ACCESS_TOKEN));

  return isLoggedIn;
}
