const path = require('path');
const FileStore = require('./file-store');

( async () => {
    const fs = new FileStore( false, path.join(process.cwd(), 'angular-4/src') );
    await fs.copyDir(
        path.join(process.cwd(), '__test__/tests4'),
        path.join(process.cwd(), 'angular-4/src/tests4'),
    );
})();