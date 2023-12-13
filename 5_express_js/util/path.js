const path = require('path');

// 'mainModule' is deprecated.
// module.exports = path.dirname(process.mainModule.filename);

module.exports = path.dirname(require.main.filename);