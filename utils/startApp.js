import logoutButton from '../components/buttons/logoutButton';
import domBuilder from '../components/shared/domBuilder';
import domEvents from '../events/domEvents';
import formEvents from '../events/formEvents';
import navEvents from '../events/navEvents';

const startApp = (uid) => {
  domBuilder();
  domEvents(uid);
  formEvents(uid);
  navEvents(uid);
  logoutButton();
};

export default startApp;
