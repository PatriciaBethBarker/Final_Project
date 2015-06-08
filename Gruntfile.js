//Gruntfile.js
module.exports = function(grunt) {
  //create a task and add them in order
  grunt.registerTask("hello",
  function() {//provide an array of other task names
    console.log("Hello, I'm using grunt!");
  });
  //ie, less css files, autoprefixer, insequence
  grunt.registerTask("hi", ["hello"]);

};
