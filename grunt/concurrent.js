module.exports = {

    // Task options
    options: {
        limit: 4
    },

    // Dev tasks: ngAnnotate avoids errors after runnning uglify
    devStep1: [
        'clean',
        'copy:dev',
        'ngAnnotate',
        'sass:prod',
    ],
    devStep2: [
        'uglify',
        'cssmin',
        'uncss'
    ],
};