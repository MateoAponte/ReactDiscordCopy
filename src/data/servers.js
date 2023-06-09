export const servers = [
  {
    image: 'https://images.pexels.com/photos/11422882/pexels-photo-11422882.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    name: 'Galaxys server',
    id: 255,
    isAgrouped: false,
    notifications: 0,
  },
  {
    image: 'https://images.pexels.com/photos/89625/pexels-photo-89625.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    name: 'Insane art',
    id: 230,
    isAgrouped: false,
    notifications: 0,
  },
  {
    id: 230,
    agroupedServers: [
      {
        image: 'https://images.pexels.com/photos/89625/pexels-photo-89625.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        name: 'Insane art',
        id: 230,
        notifications: 0,
      },
    ],
    isAgrouped: true,
    notifications: 0,
  },
  {
    image: 'https://images.pexels.com/photos/7340570/pexels-photo-7340570.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    name: 'Gamer paradisse',
    id: 285,
    isAgrouped: false,
    notifications: 0,
  },
];

const serverInfo = [
  {
    serverId: 255,
    segments: [
      {
        name: 'Community',
        roles: [11, 22, 33],
        segmentId: '',
        channels: [
          {
            name: 'Welcome',
            channelId: '',
            roles: [11, 22, 33],
            messages: [],
            fixedMessage: [],
          },
        ],
        type: 'text',
      },
    ],
  },
];

export const serverById = (id) => {
  try {
    return serverInfo.filter((server) => server.serverId === id);
  } catch {
    throw new Error('Error to fetch the server with Id: ' + id);
  }
};
