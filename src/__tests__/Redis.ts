import { Redis } from "~/Redis";

jest.mock('~/RedisClient')
describe('RedisAdapter', () => {
  it('can get', async () => {
    const redis = new Redis();
    expect(await redis.get('KEY')).toBe(null)
  })
  it('can set', async () => {
    const redis = new Redis();
    expect(await redis.get('KEY')).toBe(null)
    expect(await redis.set('KEY', '1')).toBe('OK')
    expect(await redis.get('KEY')).toBe('1')
  })
  it('can del', async () => {
    const redis = new Redis();
    expect(await redis.get('KEY')).toBe(null)
    expect(await redis.set('KEY', '1')).toBe('OK')
    expect(await redis.get('KEY')).toBe('1')
    expect(await redis.del('KEY')).toBe(1)
  })
})