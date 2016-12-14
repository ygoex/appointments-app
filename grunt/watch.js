module.exports = {

    options: {
        //spawn set to false improves performance while watching
        spawn: false,
        livereload: true
    },

    html: {
        files: ['app/index.html'],
        tasks: ['htmlmin:dev']
    },

    styles: {
        files: [
            'app/assets/stylesheets/scss/**/*.scss'
        ],
        tasks: [
            'sass:prod',
            'cssmin'
        ]
    },

    livereload: {
        options: {
            //Start a live reload server on the default port 35729
            livereload: true,
            host: 'localhost',
            port: 9000
        },
        files: ['dist/**/*'],
    }

};