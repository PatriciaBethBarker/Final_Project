//Gruntfile.js
module.exports = function(grunt) {
  //create a task and add them in order

  //locate all JS files inside src.js
  //  "src/js/**/*.js"
  //will find
  //  src/js/Lib/share.min.js
  //  src/js/min.js
  //will not find:
  //  src/js/index.html
  //  src/404.js


  grunt.registerTask("hello",
  function() {//provide an array of other task names
    console.log("Hello, I'm using grunt!");
    grunt.file.write("build/test.txt", "This file is written sync");//this creates the folders and the file -
    //directory is written here
  });

  //good to call up assets

  //ie, less css files, autoprefixer, in sequence
  grunt.registerTask("hi", ["hello"]);

  grunt.loadNpmTask("grunt-autoprefixer");

  grunt.initConfig({
    autoprefixer: {
      dev: {
        src: "public/css/**/*.css",
        dest: "build/css"
      }
    }

  });

};
