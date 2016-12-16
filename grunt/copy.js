module.exports = {
    dev: {
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
            'bootstrap/dist/js/bootstrap.min.js'
        ],
        dest: 'temp/libs/',
    }
};