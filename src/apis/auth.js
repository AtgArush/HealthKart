import AsyncStorage from '@react-native-async-storage/async-storage';
import {LOGIN_API} from '../config/urls';
import {apiPost, setUserData} from '../utils/utils';

// export function signup(data = {}) {
//     return apiPost(SIGNUP, data)
// }

export function signup(data = {}) {
  return new Promise((resolve, reject) => {
    apiPost(SIGNUP, data)
      .then(res => {
        setUserData(res.data);

        AsyncStorage.setItem('loggedIn', 'true')
          .then(res => {
            console.log(res);
          })
          .catch(error => {
            console.log(error);
          });
        resolve(res);
      })
      .catch(error => {
        reject(error);
      });
  });
}

export function login(data = {}) {
  return new Promise((resolve, reject) => {
    apiPost(LOGIN_API, data)
      .then(res => {
        setUserData(res.data);

        AsyncStorage.setItem('loggedIn', 'true')
          .then(res => {
            console.log(res);
          })
          .catch(error => {
            console.log(error);
          });
        resolve(res);
      })
      .catch(error => {
        reject(error);
      });
  });
}

// export function login(data = {}) {
//   return apiPost(LOGIN, data);
// }
