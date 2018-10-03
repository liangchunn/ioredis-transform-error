import * as ioredis from 'ioredis'

export class Redis {
    private instance: ioredis.Redis | null
    constructor() {
        this.instance = null
    }
    private async getInstance() {
        if (!this.instance) {
            this.instance = new ioredis({
                host: '127.0.0.1',
                port: 6379,
                retryStrategy: (times) => false
            })
            return this.instance
        } else {
            return this.instance
        }
    }
    public async get(k: string) {
        return this.getInstance().then(instance => instance.get(k))
    }
}