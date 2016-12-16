module.exports = {
    all: {
        files: [{
            expand: true,
            cwd: 'temp/js',
            src: 'custom-annotated.js',
            dest: 'temp/js',
            ext: '.min.js'
        }]
    }
};