## Installation

Assuming that npm and Grunt are both installed:

1. Download or clone the repository

  ```
  git clone https://github.com/ygoex/appointmentsapp.git
  ```

2. Install npm packages

  ```
  npm install
  ```
3. Create a server to run the app

  ```
  grunt server
  ```
4. In your browser go to 

  ```
  http://localhost:9000/
  ```

## Project description

### Dependencies 
* Bootstrap v3.3.7: Installed via `bower` (client-side code package manager).
* AngularJS v1.5.8: Included via CDN
* angular-ui-bootstrap v2.3.1: Included via CDN (Bootstrap components for AngularJS: datepicker, timepicker,etc)

Bootstrap v3.3.7 is installed via `bower` and not via CDN because this way, using the Grunt plugin UnCSS, we can reduce the size of the file by removing the classes not needed in our project. As the following image shows, the css file is reduced from 120.64 kB to 10.28 kB.

![UnCSS](https://raw.githubusercontent.com/ygoex/appointmentsapp/98b848c184b090965512f4399ee01f97f0ba9039/app/assets/img/UnCSS.png)

### Structure
Apart from the dependencies previously described, the main app relays on three files located under app directory: index.html, custom.js and _general.scss

```
app/
├── bower-components/
│   ├── bootstrap-sass/
│       └── continues...
└── assets/
|   ├── fonts/
|   |   └── continues...
|   ├── img/
|   ├── js/
|   |   ├── app.js
|   |   └── custom.js
|   └── stylesheets/
|       └── scss
|           ├── custom
|           |   ├── _base.scss
|           |   ├── _components.scss
|           |   ├── _elements.scss
|           |   ├── _helperClasses.scss
|           |   ├── _mixins.scss
|           |   ├── _variables.scss
|           |   ├── components/
|           |   ├── elements/
|           |   ├── palettes/
|           |   |   └── continues...
|           |   ├── sections/
|           |       └── _general.scss
|           └── custom.scss
└── index.html
```

###js/
Inside `js/` directory, there are two files:

1. app.js

  This file is generated after executing the grunt task ngAnnotate (see description [here](#ngAnnotate)).
  
2. custom.js

  This file is divided in three blocks:

###Automation and optimisation
In order to automate the process and optimize the project some Grunt plugins are used. 

####Running the Build
Writing `$ grunt` in the console launches the Grunt tasks. An optimised copy of the `app/` folder is created in the `dist/` directory. 

The Grunt plugins used in this project are the following:

####Clean
Use [grunt-contrib-clean](https://github.com/gruntjs/grunt-contrib-clean) to delete the previous `build` directory.

####Copy
Use [grunt-contrib-copy](https://github.com/gruntjs/grunt-contrib-copy) to copy our images into the new build directory. 

####htmlmin
Use [grunt-contrib-htmlmin](https://github.com/gruntjs/grunt-contrib-htmlmin) to compress our HTML page (index.html). 

####<a name="ngAnnotate">ng-annotate</a>
Use [grunt-ng-annotate](https://github.com/mgol/grunt-ng-annotate) to rebuild angularjs dependency injection annotations. This plugin needs to run before uglify for protecting dependency injection against minification.

####Uglify
Use [grunt-contrib-uglify](https://github.com/gruntjs/grunt-contrib-uglify) to minify our JavaScript file, cutting out comments and shortening variables. 
