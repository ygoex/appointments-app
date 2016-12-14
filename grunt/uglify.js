module.exports = {
    all: {
        files: [{
            expand: true,
            cwd: 'app/assets/js',
            src: 'app.js',
            dest: 'dist/assets/js',
            ext: '.min.js'
        }]
    }
};