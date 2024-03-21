import { signIn } from '../utils/auth';
import url from '../images/background-hiphop.png';
// GOOGLE LOGIN BUTTON
const loginButton = () => {
  const domString = `<div id="login-page" style="background-image: url(${url}); background-size: cover; background-position: center;"><img class="login-logo" src="https://user-images.githubusercontent.com/29741570/205346767-a182560c-64a6-4cfa-80b3-0d64cf998242.png" alt="Store logo" /> <br /><button id="google-auth" class="btn btn-danger">Login to Get Started</button></div>`;
  document.querySelector('#app').innerHTML = domString;
  document.querySelector('#google-auth').addEventListener('click', signIn);
};

export default loginButton;
