module.exports = {
    options: {
        plugins: [{
            //remove viewBox attribute when possible (disabled by default)
            removeViewBox: false
        }, {
            //remove useless stroke and fill attrs
            removeUselessStrokeAndFill: false
        }, {
            //remove unused and minify used IDs
            cleanupIDs: true
        }, {
            //convert Path data to relative or absolute whichever is shorter, convert one segment to another, trim useless delimiters, smart rounding and much more
            convertPathData: true
        }, {
            //merge multiple Paths into one
            mergePaths: true
        }, {
            //move some group attributes to the content elements
            moveGroupAttrsToElems: true
        }, {
            //remove comments
            removeComments: true
        }, {
            //remove <desc> (only non-meaningful by default)
            removeDesc: true
        }, {
            //remove editors namespaces, elements and attributes
            removeEditorsNSData: true
        }, {
            //remove unknown elements content and attributes, remove attrs with default values
            removeUnknownsAndDefaults: true
        }, {
            //remove elements of <defs> without id
            removeUselessDefs: true
        }, {
            //remove editors namespaces, elements and attributes
            removeEditorsNSData: true
        }, {
            //remove XML processing instructions
            removeXMLProcInst: true
        }]
    },
    dist: {
        files: [{
            expand: true,
            cwd: 'app/',
            src: ['assets/img/*.svg'],
            dest: 'dist/'
        }]
    }
};