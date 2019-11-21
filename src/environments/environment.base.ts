// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const production = false;

const FIREBASE_CONFIG = {
  apiKey: 'AIzaSyC4nHirCK2DEqt3-KExaEfSgMSftIRuhLc',
  authDomain: 'tasks-7fa55.firebaseapp.com',
  databaseURL: 'https://tasks-7fa55.firebaseio.com',
  projectId: 'tasks-7fa55',
  storageBucket: '',
  messagingSenderId: '274979101860',
  appId: '1:274979101860:web:d813b95ab3fc7129'
};

const IMAGE_URLS = {
  GENERIC_USER: '/assets/img/generic-user.jpg'
};

export const baseEnvironment = {
  production,
  FIREBASE_CONFIG,
  IMAGE_URLS
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
