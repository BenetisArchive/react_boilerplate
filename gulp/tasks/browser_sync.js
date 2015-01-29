var browser_sync = require('browser-sync');
var config = require('../config');

gulp.task('browser_sync', function() {
    browser_sync({
        server: {
            baseDir: config.build
        },
        open: false
    });
});