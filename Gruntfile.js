'use strict';
var mountFolder = function (connect, dir) {
  return connect.static(require('path').resolve(dir));
};

module.exports = function(grunt) {
  // load all grunt tasks
  require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

  grunt.initConfig({
    meta: {
      title: 'Chrome Dev Solarized Dark',
      name: 'Bogdan Lazar',
    },

    compass: {
      dev: {
        options: {
          sassDir: './scss',
          cssDir: './',
          noLineComments: false,
          force: true
        }
      },
      prod: {
        options: {
          sassDir: './scss',
          cssDir: './',
          noLineComments: true,
          outputStyle: 'compressed',
          force: true
        }
      },
    },
    watch: {
      compass: {
        files: ['./scss/*.scss'],
        tasks: ['compass:dev']
      }
    }
  });

  grunt.renameTask('regarde', 'watch');

  // Default task.
  grunt.registerTask('default', ['watch']);

  // Build everything ready for production
  grunt.registerTask('build', ['compass:prod']);
};