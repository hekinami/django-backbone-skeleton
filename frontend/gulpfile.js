const gulp = require('gulp');
const $ = require('gulp-load-plugins')();
const browserify = require('browserify');
const watchify = require('watchify');
const jstify = require('jstify');
const source = require('vinyl-source-stream');
const buffer = require('vinyl-buffer');
const browserSync = require('browser-sync');
const httpProxy = require('http-proxy');
const reload = browserSync.reload;

gulp.task('browserify', () => {
    let bundler = browserify({
        entries: 'app/js/main.js',
        debug: true,
        transform: [jstify]
          });

          bundler = watchify(bundler);

          let rebundle = function() {
              return bundler.bundle()
                  .on('error', $.util.log)
                  .pipe(source('app.js'))
                  .pipe(buffer())
                  .pipe($.sourcemaps.init({loadMaps: true}))
                  .on('error', $.util.log)
                  .pipe($.sourcemaps.write('./'))
                  .pipe(gulp.dest('.tmp/js'));
          };

          bundler.on('update', rebundle);

          return rebundle();
      });

gulp.task('serve', ['browserify'], () => {
    let serverProxy = httpProxy.createProxyServer();

    browserSync({
        port: 9000,
        ui: {
            port: 9001
        },
        server: {
            baseDir: ['.tmp', 'app'],
            middleware: [
                function (req, res, next) {
                    if (req.url.match(/^\/(api|avatar)\/.*/)) {
                        serverProxy.web(req, res, {
                            target: 'http://localhost:8000'
                        });
                    } else {
                        next();
                    }
                }
            ]
        }
    });

    gulp.watch([
        'app/*.html',
        'app/**/*.css',
        '.tmp/**/*.js'
    ]).on('change', reload);
});
