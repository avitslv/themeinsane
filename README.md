# Theme Insane D8
Clean and very simple Drupal 8 starter theme

##### Remove git directory
```sh
sudo rm -R .git
```

##### Install npm packages
Installs npm packages locally
```sh
npm install
```

##### Install gulp-cli globally
```sh
sudo npm install -g gulp-cli
```

##### Install bower package manager globally
```sh
sudo npm install -g bower
```

##### Install bower packages
Use bower to install front-end packages, e.g. JS libraries like `swiper`. Packages are downloaded in `assets/vendor`
```sh
bower install
```

##### Replace theme name `themeinsane` with yours throughout theme filenames and files
```sh
@todo bash command needed here
```

##### Compiling styles
To watch for file changes, launch livereload and compile styles run
```sh
gulp
```
To compile styles once run
```sh
gulp sass
```
