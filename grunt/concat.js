module.exports = {
    options: {
        separator: ';\n',
    },
    dist: {
        src: ['temp/vendors/jquery/dist/jquery.min.js', 'temp/vendors/bootstrap/dist/js/bootstrap.min.js'],
        dest: 'dist/assets/js/vendors.min.js',
    }
};