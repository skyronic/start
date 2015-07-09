module.exports = function(grunt) {

  grunt.initConfig({
    wiredep: {
      task: {
        src: [
          'src/**/*.html',   // .html support...
        ],
        options: {
          directory: "src/vendor/",
          cwd: "src/",
          bowerJson: require("./bower.json"),
          exclude: [/bootstrap/]
        }
      }
    },
    less: {
      development: {
        options: {
        },
        files: {
          "src/build/css/main.css": "src/less/main.less"
        }
      }
    },
    watch: {
      less: {
        files: ["src/less/*.less"],
        tasks: ["less:development"]
      }
    },
    notify_hooks: {
      options: {
        enabled: true,
        success: false, // whether successful grunt executions should be notified automatically
        duration: 3 // the duration of notification in seconds, for `notify-send only
      }
    }

  });

  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-wiredep');
  grunt.loadNpmTasks('grunt-notify');


  grunt.registerTask('default', ['wiredep', 'less']);
  grunt.task.run('notify_hooks');
};
