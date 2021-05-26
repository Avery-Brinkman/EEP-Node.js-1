const path = require('path')
const util = require('util')
const v8 = require('v8')
/* Since the only method I use from v8 is
 * "getHeapStatistics()", I could write
 * "const { getHeapStatistics } = require('v8')"
 * Then I could write "getHeapStatistics()"
 * without "v8." at the beginning.

/* util.log() (deprecated)
 *  Day Month Hr:Min:Sec - ... */
util.log(path.basename(__filename))
util.log(' ^ The name of the current file')

util.log(v8.getHeapStatistics())