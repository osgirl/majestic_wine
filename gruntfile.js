module.exports = function(grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        sass: {
            dist: {
                options: {
                    style: 'compressed'
                },
                files: {
                    'css/custom/styles.css': 'css/custom/styles.scss',
                }
            } 
        },
        concat: {
            css: {
                src: [
                    'css/custom/*.css'
                ],
                dest: 'css/final/styles.css',
            }
        },
        uglify: {
            build: {
                files: {
                    "js/final/scripts.min.js": ["js/custom/scripts.js"],
                }
            }
        },
        watch: {
            scripts: {
                files: ['js/custom/scripts.js'],
                tasks: ['concat', 'uglify'],
                options: {
                    spawn: false,
                    livereload: true
                },
            },
            css: {
                files: ['css/custom/styles.scss'],
                tasks: ['sass', "concat:css"],
                options: {
                    spawn: false,
                    livereload: true
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('default', ['sass', 'concat', 'uglify', 'watch']);

};