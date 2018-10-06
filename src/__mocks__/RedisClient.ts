/**
 * ESModules
 * (not using this because no @types/ioredis-mock)
 */
// import * as ioredis from 'ioredis-mock'
// export default ioredis

/**
 * CommonJS
 */
const ioredis = require('ioredis-mock')

module.exports = {
    default: ioredis
}