module.exports = {
    dev: {
        options: {
            removeComments: true,
        },
        files: {
            expand: true,
            cwd: 'app/',
            src: '*.html',
            dest: 'dist/'
        }
    }
};