# Introduction 

Webpack 4/Typescript template.

All files in ./copytodist will be automatically added to the distribution builds and server commands. All external game files (aka, all assets, configuration files and so on) should go in here.

Set up project: npm i

All the commands in package.json:

    run npm build:prod - to build and minify the game into /dist **THIS WILL EMPTY THE EXISTING /dist
    run npm build - to build the game into /dist **THIS WILL EMPTY THE EXISTING /dist
    run npm serve - to run a webpack server, with hot reload and stuff