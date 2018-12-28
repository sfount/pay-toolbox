// @TODO(sfount) line this method of setting environment variables up with other
// pay repositories
// @FIXME(sfount) this configuration method happens before common NODE_ENV being
// set - it would be ideal to use this information as a single source of truth
// @TODO(sfount) this could be moved to a `util` library something along the lines
// of: const util = require('/lib/util'); util.sourceDevEnvironments()
if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config()
}

const server = require('./server')
const logger = require('./logger')
const common = require('./common')
const services = require('./services')
// const templateRenderer = require('./template-renderer')

// module.exports = { server, common }
module.exports = Object.assign({}, server, common, logger, services)
