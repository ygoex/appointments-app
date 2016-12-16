module.exports = {
    options: {
        separator: ';\n',
    },
    dist: {
        src: ['temp/libs/jquery/dist/jquery.min.js', 'temp/libs/bootstrap/dist/js/bootstrap.min.js'],
        dest: 'dist/assets/js/libs.min.js',
    }
};