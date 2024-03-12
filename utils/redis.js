import { createClient } from 'redis';


class RedisClient {
    constructor() {
      this.client = createClient();
      this.client.on('error', (error) => {
        console.log(`Redis client not connected to server: ${error}`);
        });
    }
}
