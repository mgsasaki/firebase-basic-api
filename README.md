# Instructions

Get your Firebase project credentials file path and create the environment variable:

```bash
export GOOGLE_APPLICATION_CREDENTIALS="/home/user/project-credentials.json"
```
Create a file `firebase-config.mjs` that exports the firebase app configs, in the root of the project.

```javascript
export const firebaseConfig = {
  apiKey: "API_KEY",
  authDomain: "PROJECT_ID.firebaseapp.com",
  // The value of `databaseURL` depends on the location of the database
  databaseURL: "https://DATABASE_NAME.firebaseio.com",
  projectId: "PROJECT_ID",
  storageBucket: "PROJECT_ID.appspot.com",
  messagingSenderId: "SENDER_ID",
  appId: "APP_ID",
  // For Firebase JavaScript SDK v7.20.0 and later, `measurementId` is an optional field
  measurementId: "G-MEASUREMENT_ID",
};
```

```bash
npm run generate-token {uid}
```

```bash
npm run login {custom_token}
```

# References

- [Learn about the Firebase config object](https://firebase.google.com/docs/web/learn-more#config-object)
