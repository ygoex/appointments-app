module.exports = {

    // Task options
    options: {
        limit: 4
    },

    // Dev tasks: ngAnnotate avoids errors after runnning uglify
    devStep1: [
        'clean',
        'ngAnnotate',
        'sass:prod',
    ],
    devStep2: [
        'copy:dev',
        'uglify',
        'cssmin',
    ],
    devStep3: [
        'uncss',
        'concat',
    ],

    // Image tasks
    imageOpt: [
        'imagemin',
        'svgmin'
    ]
};