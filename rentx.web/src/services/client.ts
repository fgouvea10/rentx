import axios from 'axios';

import storageKeys from '~/constants/storageKeys';

const user = localStorage.getItem(storageKeys.userKey);
const parsedUser = !!user && JSON.parse(user!);
const token = parsedUser.refreshToken;

export const client = axios.create({
  baseURL: 'http://localhost:8000/api/v1',
  headers: {
    Authorization: `Bearer ${token}`
  }
});
