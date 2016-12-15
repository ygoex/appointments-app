## Installation

Assuming that npm and Grunt are both installed:

1. Download or clone the repository

  ```
  git clone https://github.com/ygoex/appointments-app.git
  ```
  
2. Go to project directory

  ```
  cd appointments-app/
  ```

3. Install npm packages

  ```
  npm install
  ```
4. Create a server to run the app

  ```
  grunt server
  ```
5. In your browser go to 

  ```
  http://localhost:9000/
  ```
 
If the installation is successful, the app will look like this screen shot

![UnCSS](https://raw.githubusercontent.com/ygoex/appointments-app/master/app/assets/img/Screenshot.png)

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

  This file is divided in three blocks to separate concerns:
  
  In a larger project these blocks would be placed in different files to make everything more re-useable and easier to maintain, but for simplicity's sake I have included all of them in a single file.
  
  * myFactory (model): is a method that allow us to share and inject data in different controllers. Normally, a factory is used to make Ajax calls to server RESTful services using [Angular $http service] (https://docs.angularjs.org/api/ng/service/$http).
    
    In this app, myFactory is not calling a REST API. The data provided as example has been included in an array of objects and stored in the private variable `appointments`. This variable is made public through the object `getAll`.
    
  * myController (controller): contains settings and functions to interact with the app. 
    
    The first thing the controller does is to call the factory method getAll and store the data a variable `$scope.apps = myFactory.getAll();`. Right after that, we count the number of appointments in the array to show it to the user in the view. The idea is to create visual and information hierarchy by going from the generics to the specific (first we show the total of appointments and then we show a list with each appointment and details).
    
    The following settings and functions will help users to add more appointments.
    
  * myDirective (view)

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


## Future

* Add local storage
