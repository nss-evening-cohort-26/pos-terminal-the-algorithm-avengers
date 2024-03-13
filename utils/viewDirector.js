import firebase from 'firebase/app';
import 'firebase/auth';
import client from './client';
import startApp from './startApp';
import loginButton from '../components/homeLoggedOut';

const ViewDirectorBasedOnUserAuthStatus = () => {
  firebase.initializeApp(client);
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      // person is logged in do something...
      startApp(user.uid, user.displayName);
    } else {
      // person is NOT logged in
      loginButton();
    }
  });
};

export default ViewDirectorBasedOnUserAuthStatus;
