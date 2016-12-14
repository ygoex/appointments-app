module.exports = {
    // Development settings
    dev: {
        options: {
            outputStyle: 'nested',
            sourceMap: true
        },
        files: [{
            'dist/assets/css/custom.css': 'app/assets/stylesheets/scss/custom.scss'
        }]
    },
    // Production settings
    prod: {
        options: {
            outputStyle: 'compressed',
            sourceMap: false
        },
        files: [{
            'dist/assets/css/custom.css': 'app/assets/stylesheets/scss/custom.scss'
        }]
    }
};