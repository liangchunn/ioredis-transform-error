import { Redis } from "~/Redis";

// uncommenting the line below will require the actual ioredis
// jest.unmock('ioredis')
describe('RedisAdapter', () => {
  it('can get', async () => {
    const redis = new Redis();
    expect(await redis.get('KEY')).toBe(null)
  })
})