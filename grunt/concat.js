module.exports = {
    options: {
        separator: ';\n',
    },
    lib: {
        src: ['temp/js/libs/jquery/dist/jquery.min.js', 'temp/js/libs/angular/angular.min.js', 'temp/js/libs/angular-bootstrap/ui-bootstrap-tpls.min.js'],
        dest: 'temp/js/lib.min.js',
    },
    all: {
        src: ['temp/js/lib.min.js', 'temp/js/custom-annotated.min.js'],
        dest: 'dist/assets/js/app.min.js',
    }
};