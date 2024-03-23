import logoutButton from '../components/buttons/logoutButton';
import domBuilder from '../components/shared/domBuilder';
import homeLoggedIn from '../components/shared/homeLoggedIn';
import navBar from '../components/shared/nav';
import domEvents from '../events/domEvents';
import formEvents from '../events/formEvents';
import navEvents from '../events/navEvents';

const startApp = (uid, displayName) => {
  domBuilder();
  domEvents(uid);
  formEvents(uid);
  navBar();
  homeLoggedIn(displayName);
  navEvents(uid, displayName);
  logoutButton();
};

export default startApp;
