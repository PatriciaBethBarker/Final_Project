# Final_Project
Final Advanced JS Project - Blog

Project spec: Blog/Wiki

A simple blog is always a good test of a web-based programming language. You can use any backing storage that you want for this, but the sqlite3 module may be a good place to start. Think of this as your chance to write the kind of CMS that you've always wanted, free from the legacy problems of WordPress and other systems.
Must-have requirements

    Provide a reverse-chronological stream of post content, with or without "read more" links
    Provide single-post pages, possibly with a different layout
    Allow users to create new posts from a web interface

Nice-to-have requirements

    Restrict post creation to authenticated users only
    Allow users to write their own page templates
    Allow users to attach tags or categories to posts, and filter the stream based on them
    Provide a search function

Integrate Grunt with Hapi

This application uses Grunt to perform the following automated tasks:

    Uses grunt-autoprefixer to transform CSS for cross-browser compatibility.
    Monitors and restarts the Hapi server when JS files change, using grunt-nodemon
    Provides live reload via grunt-contrib-watch for CSS and HTML files

Inputs for the public files are read from the src folder and written to the build folder. As a result, the build folder is never checked in, because its contents are generated from the Grunt process.

The grunt-cli package is installed globally in order to be able to run it in a directory like this one. 
If you have not installed it on the machine you're using, remember to run npm install grunt-cli -g to create the global command.
