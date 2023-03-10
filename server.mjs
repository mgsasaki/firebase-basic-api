import { initializeApp } from 'firebase-admin/app';
import firebase from 'firebase-admin';

const app = initializeApp();

async function main(uid) {
  firebase.auth().getUser(uid)
    .then((usersResult) => {
      console.log('user', usersResult);
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.error(errorMessage, errorCode);
    });

  const customToken = await firebase.auth().createCustomToken(uid)
    .then((customToken) => {
      console.log('token', customToken);
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.error(errorMessage, errorCode);
    });
};

await main(process.argv[2]);