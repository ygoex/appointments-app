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
        'copy:assets',
    ],
    devStep2: [
        'copy:js',
        'uglify',
        'cssmin',
    ],
    devStep3: [
        'uncss',
        'concat:lib',
    ],
    devStep4: [
        'concat:all',
    ],

    // Image tasks
    imageOpt: [
        'imagemin',
        'svgmin',
    ],

    // File hash
    fileHash: [
        'hashres:prod'
    ]
};