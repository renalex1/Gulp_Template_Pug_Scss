const project_folder = "build";
const source_folder = "src";

const path = {
    build: {
        html: project_folder + "/",
        css: project_folder + "/css",
        js: project_folder + "/js",
        img: project_folder + "/img",
        fonts: project_folder + "/fonts",
    },
    src: {
        html: [source_folder + "/*.html", "!" + source_folder + "/_*.html"],
        css: "./" + source_folder + "/scss/style.scss",
        js: "./" + source_folder + "/js/script.js",
        img: "./" + source_folder + "/img/**/*.{jpg,jepg,png,svg,gif,ico,webp}",
        svg: "./" + source_folder + "/img/sprite/svg/**/*.svg",
        png: "./" + source_folder + "/img/sprite/png/**/*.png",
        fonts: "./" + source_folder + "/fonts/*.ttf",
    },
    watch: {
        html: "./" + project_folder + "/**/*.html",
        css: "./" + source_folder + "/scss/**/*.scss",
        js: "./" + source_folder + "/js/**/*.js",
        img: "./" + source_folder + "/img/**/*.{jpg,jepg,png,svg,gif,ico,webp}",
        svg: source_folder + "/img/sprite/svg/**/*.svg",
        png: source_folder + "/img/sprite/png/**/*.png",
        favicon: source_folder + '/img/**/favicon.png',
    },
    clean: {
        project: [project_folder],
    },
};


const { src, dest } = require('gulp'),
    gulp = require('gulp'),
    autoprefixer = require('gulp-autoprefixer'),
    browsersync = require('browser-sync').create(),
    del = require("del"),
    csso = require('gulp-csso'),
    favicons = require("favicons").stream,
    group_media = require("gulp-group-css-media-queries"),
    htmlmin = require('gulp-htmlmin'),
    inject = require("gulp-inject-string"),
    imagemin = require('gulp-imagemin'),
    notify = require('gulp-notify'),
    plumber = require('gulp-plumber'),
    rename = require("gulp-rename"),
    sass = require('gulp-sass'),
    sourcemaps = require('gulp-sourcemaps'),
    spritesmith = require('gulp.spritesmith'),
    svgsprite = require("gulp-svg-sprite"),
    uglify = require('gulp-uglify'),
    watch = require('gulp-watch'),
    stylelint = require('stylelint'),
    shorthand = require('gulp-shorthand'),
    bemValidator = require('gulp-html-bem-validator');


/* browser-sync
=========================*/
async function browserSync(callback) {
    return browsersync.init({
        server: {
            baseDir: "./" + project_folder + "/"
        },
        notify: false
    });
    callback();
}

/* html:build
====================================================*/
function html(callback) {
    return src(path.src.html)
        .pipe(plumber({
            errorHandler: notify.onError(function (err) {
            })
        }))
        .pipe(htmlmin({
            collapseWhitespace: true,
            removeComments: true
        }))
        .pipe(dest(path.build.html))
        .pipe(browsersync.stream())
    callback();
}


/* BEM validate – welcome to hell
====================================================*/
function validateBem(callback) {
    return src(path.watch.html)
        .pipe(bemValidator())
        .pipe(dest(path.build.html))
    callback();
}



/* css:build
====================================================*/
function css(callback) {
    return src(path.src.css)
        .pipe(
            sass({
                outputStyle: ["expanded", "nested"],
                precision: 10,
                includePaths: ['.'],
                onError: console.error.bind(console, 'Sass error:')
            })
        )
        .pipe(
            group_media()
        )
        .pipe(plumber({
            errorHandler: notify.onError(function (err) {
                return {
                    title: 'Styles',
                    sound: false,
                    message: err.message
                }
            })
        }))
        .pipe(sourcemaps.init())
        .pipe(sass())
        .pipe(autoprefixer({
            overrideBrowserslist: ["last 4 version"],
            cascade: true
        })
        )
        .pipe(sourcemaps.write())
        .pipe(shorthand())
        .pipe(dest(path.build.css))
        .pipe(csso())
        .pipe(
            rename({
                extname: ".min.css"
            })
        )
        .pipe(dest(path.build.css))
        .pipe(browsersync.stream())
    callback();
}

/* scss lint
====================================================*/
function lintScss(callback) {
    return gulp.src(path.watch.css).pipe(stylelint({
        reporters: [
            {
                failAfterError: true,
                formatter: 'string',
                console: true,
            },
        ],
    }));
    callback();
}

/* js build
====================================================*/
function js(callback) {
    return src(path.src.js)
        .pipe(plumber({
            errorHandler: notify.onError(function (err) {
            })
        }))
        .pipe(dest(path.build.js))
        .pipe(uglify())
        .pipe(
            rename({
                extname: ".min.js"
            })
        )
        .pipe(dest(path.build.js))
        .pipe(browsersync.stream());
    callback();
}

/* image build
====================================================*/
function images(callback) {
    return src(path.src.img)
        .pipe(
            imagemin([
                imagemin.gifsicle({ interlaced: true }),
                imagemin.mozjpeg({ quality: 75, progressive: true }),
                imagemin.optipng({ optimizationLevel: 5 }),
                imagemin.svgo({
                    plugins: [
                        { removeViewBox: true },
                        { cleanupIDs: false }
                    ]
                })
            ],
                {
                    progressive: true,
                    svgoPlugins: [{ removeViewBox: false }],
                    interlaced: true,
                    optimizationLevel: 3 // 0 to 7
                }))
        .pipe(dest(path.build.img))
        .pipe(browsersync.stream());
    callback();
}
/* sprite
====================================================*/
async function imgSprite(callback) {
    let spriteData = gulp.src(path.src.png)
        .pipe(plumber())
        .pipe(spritesmith({
            imgName: 'sprite.png',
            cssName: '_sprite.scss',
            cssFormat: 'scss',
            algorithm: 'top-down',
            imgPath: '../img/sprite/sprite.png',
            padding: 10
        }));
    spriteData.img.pipe(gulp.dest(path.build.png));
    spriteData.css.pipe(gulp.dest(path.build.css));
    callback();
}

/* SVG sprite
====================================================*/
svgconfig = {
    shape: {
        dimension: { // Set maximum dimensions
            maxWidth: 32,
            maxHeight: 32
        },
        spacing: { // Add padding
            padding: 10
        },
    },
    mode: {
        stack: {
            sprite: "../icons.svg",  //sprite file name
            example: true
        },
        view: { // Activate the «view» mode
            bust: false,
            render: {
                scss: true // Activate Sass output (with default options)
            }
        },
        symbol: true // Activate the «symbol» mode
    },
};

function svgSprite(callback) {
    return gulp.src(path.src.svg)
        .pipe(svgsprite())
        .pipe(svgsprite(svgconfig))
        .pipe(dest(path.build.img));
    callback();
}


/* clean
====================================================*/
const clean = () => del(path.clean.project);

/* default
====================================================*/
const build = gulp.series(clean, gulp.parallel(html, js, css));
const watching = gulp.series(build, gulp.parallel(watchFiles, browserSync));
const validate = gulp.series(validateBem);

/* watch
====================================================*/
async function watchFiles(callback) {
    gulp.watch([path.watch.html], html);
    gulp.watch([path.watch.css], css);
    gulp.watch([path.watch.js], js);
    gulp.watch([path.watch.img], images);
    gulp.watch([path.watch.svg], svgSprite);
    gulp.watch([path.watch.png], imgSprite);
    callback();
}

/* =================================================*/

exports.validate = validate;
exports.validateBem = validateBem;
exports.svgSprite = svgSprite;
exports.imgSprite = imgSprite;
exports.lintScss = lintScss;
exports.watch = watch;
exports.watchFiles = watchFiles;
exports.clean = clean;
exports.images = images;
exports.js = js;
exports.css = css;
exports.html = html;
exports.build = build;
exports.watching = watching;
exports.default = watching;
