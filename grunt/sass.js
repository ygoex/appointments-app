module.exports = {
    // Development settings
    dev: {
        options: {
            outputStyle: 'nested',
            sourceMap: true
        },
        files: [{
            'temp/css/custom.css': 'app/assets/stylesheets/scss/custom.scss'
        }]
    },
    // Production settings
    prod: {
        options: {
            outputStyle: 'compressed',
            sourceMap: false
        },
        files: [{
            'temp/css/app.css': 'app/assets/stylesheets/scss/custom.scss'
        }]
    }
};