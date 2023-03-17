import { initializeApp } from "firebase-admin/app";
import firebase from "firebase-admin";
// import { argv } from 'yargs';

const app = initializeApp();

export async function generateCustomToken(uid) {
  console.log("uid:", uid);
  firebase
    .auth()
    .getUser(uid)
    .then((usersResult) => {
      // console.log("user:", usersResult);

      firebase.auth().createCustomToken(uid)
        .then((customToken) => {
          console.log(customToken);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.error(errorMessage, errorCode);
        });
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.error(errorMessage, errorCode);
    });
}

const listAllUsers = (nextPageToken) => {
  // List batch of users, 1000 at a time.
  firebase
    .auth()
    .listUsers(1000, nextPageToken)
    .then((listUsersResult) => {
      listUsersResult.users.forEach((userRecord) => {
        console.log("user", userRecord.toJSON());
      });
      if (listUsersResult.pageToken) {
        // List next batch of users.
        listAllUsers(listUsersResult.pageToken);
      }
    })
    .catch((error) => {
      console.log("Error listing users:", error);
    });
};
// Start listing users from the beginning, 1000 at a time.

const cmd = process.argv[2];
if (cmd == 'ls') {
    await listAllUsers();
} else if (cmd == 'gt') {
    await generateCustomToken(process.argv[3]);
} else {
    console.log(`
ls       - list users;
gt [uid] - generate token for uid
`);
}
