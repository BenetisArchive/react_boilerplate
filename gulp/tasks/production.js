var run_sequence = require('run-sequence');

gulp.task('production', function(cb) {
    run_sequence(['copy.html.production', 'sass.production', 'react'],
        ['browserify.production'], cb);
});
