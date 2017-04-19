import KsTable2 from './src/table.vue'
import ucfirst from './src/lib/helpers/ucfirst'
import diff from './src/lib/helpers/array-diff'
import KsTable from './src/lib/v-client-table'


String.prototype.ucfirst = ucfirst
Array.prototype.diff = diff

// exports.client = require('./lib/v-client-table');
// exports.server = require('./lib/v-server-table');

console.log(KsTable)

export {
    KsTable,
    KsTable2,
}