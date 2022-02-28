const path = require('path');
const FileStore = require('./file-store');

( async () => {
    const fs = new FileStore( false, path.join(process.cwd(), 'angular-3/src') );
    await fs.copyDir(
        path.join(process.cwd(), '__test__/tests3'),
        path.join(process.cwd(), 'angular-3/src/tests3'),
    );
})();