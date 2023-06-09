import Settings from '../views/Settings';
import DirectMessages from '../views/DirectMessages';
import Server from '../views/Server';
import NotFound from '../views/NotFound';

const routes = [
  {
    path: '/server',
    element: <Server />,
    hasLayout: true,
  },
  {
    path: '/server/:id',
    element: <Server />,
    hasLayout: true,
  },
  {
    path: '/settings',
    element: <Settings />,
  },
  {
    path: '/message',
    element: <DirectMessages />,
  },
  {
    path: '*',
    element: <NotFound />,
  },
];

export default routes;
