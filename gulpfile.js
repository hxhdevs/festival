import {src,dest} from 'gulp'
import * as dartSass from 'sass'
import gulpSass from 'gulp-sass'

const sass = gulpSass(dartSass)

export function css(done){
    src('src/scss/app.css')
        .pipe(sass())
        .pipe(dest('build/css'))
    done()
}