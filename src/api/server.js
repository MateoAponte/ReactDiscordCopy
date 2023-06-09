import { servers, serverById } from '../data/servers';
class ServerApi {
  getServer() {
    return servers;
  }

  getServerById(id) {
    return serverById(id);
  }
}

export default new ServerApi();
