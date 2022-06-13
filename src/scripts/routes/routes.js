/* eslint linebreak-style: ["error", "windows"] */
import Home from '../views/pages/home';
import Detail from '../views/pages/detail';
import Like from '../views/pages/like';

const routes = {
  '/': Home, // default
  '/detail/:id': Detail, // detail page
  '/like': Like, // favorite page
};

export default routes;
