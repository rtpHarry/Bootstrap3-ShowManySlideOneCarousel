/*global module:false*/
module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    // Metadata.
    pkg: grunt.file.readJSON('package.json'),
    banner: '/*! <%= pkg.title || pkg.name %> - v<%= pkg.version %> - ' +
      '<%= grunt.template.today("yyyy-mm-dd") %>\n' +
      '<%= pkg.homepage ? "* " + pkg.homepage + "\\n" : "" %>' +
      '* Copyright (c) <%= grunt.template.today("yyyy") %> <%= pkg.author.name %>;' +
      ' Licensed <%= _.pluck(pkg.licenses, "type").join(", ") %>\n' +
      '* <%= pkg.repository.url %> */\n',

    // STYLES
    less: {
      dev: {
        files: {
          'dist/<%= pkg.version %>/css/<%= pkg.name %>.css': [
            'src/less/<%= pkg.name %>.less'
          ]
        },
        options: {
          compress: false,
          // LESS source map
          // To enable, set sourceMap to true and update sourceMapRootpath based on your install
          sourceMap: true,
          sourceMapFilename: 'dist/<%= pkg.version %>/css/<%= pkg.name %>.css.map',
          sourceMapRootpath: '/src/less/'
        }
      },
      dist: {
        files: {
          'dist/<%= pkg.version %>/css/<%= pkg.name %>.min.css': [
            'src/less/<%= pkg.name %>.less'
          ]
        },
        options: {
          compress: true
        }
      }
    },
    autoprefixer: {
      options: {
        browsers: ['last 2 versions', 'ie 8', 'ie 9', 'android 2.3', 'android 4', 'opera 12']
      },
      dev: {
        options: {
          map: {
            prev: 'dist/css/'
          }
        },
        src: 'dist/<%= pkg.version %>/css/<%= pkg.name %>.css'
      },      
      dist: { 
        src: 'dist/<%= pkg.version %>/css/<%= pkg.name %>.min.css'
      },
    },

    // JAVASCRIPT
    jshint: {
      options: {
        jshintrc: '.jshintrc'
      },
      all: {
        src: 'dist/<%= pkg.version %>/js/<%= pkg.name %>.js'
      }
    },
    concat: {
      options: {
        banner: '<%= banner %>',
        stripBanners: true
      },
      dist: {
        src: ['src/js/*.js'],
        dest: 'dist/<%= pkg.version %>/js/<%= pkg.name %>.js'
      }
    },    
    uglify: {
      options: {
        banner: '<%= banner %>'
      },
      dist: {
        files: {
          'dist/<%= pkg.version %>/js/<%= pkg.name %>.min.js': [
            '<%= concat.dist.dest %>'
          ]
        }
      }
    }, 

    // WATCH
    watch: {
      less: {
        files: [
          'src/less/<%= pkg.name %>.less'
        ],
        tasks: ['less:dev', 'autoprefixer:dev']
      },
      js: {
        files: [
          'src/js/<%= pkg.name %>.js'
        ],
        tasks: ['jshint', 'concat']
      }
    }    
  });


  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-autoprefixer');
  grunt.loadNpmTasks('grunt-contrib-less');

  // Available Tasks.
  grunt.registerTask('default', [
    'dev'
  ]);  

  grunt.registerTask('dev', [
    'jshint', 
    'less:dev', 
    'autoprefixer:dev', 
    'concat'
  ]);

  grunt.registerTask('dist', [
    'jshint', 
    'less:dist', 
    'autoprefixer:dist', 
    'concat', 
    'uglify'
  ]);

};
