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
