module.exports = {
    all: {
        files: [{
            expand: true,
            cwd: 'app/',
            src: ['assets/img/*.{png,jpg,jpeg,gif,ico}'],
            dest: 'dist/'
        }]
    }
};