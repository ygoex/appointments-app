module.exports = {
    assets: {
        expand: true,
        cwd: 'app/',
        src: [
            '*.html',
            'assets/fonts/bootstrap/**',
            'assets/img/**',
        ],
        dest: 'dist/',
    },
    //for third party libraries
    js: {
        expand: true,
        cwd: 'app/bower-components/',
        src: [
            'jquery/dist/jquery.min.js',
            'angular/angular.min.js',
            'angular-bootstrap/ui-bootstrap-tpls.min.js'
        ],
        dest: 'temp/js/libs/',
    }
};