# Theme Insane D8
Clean and very simple Drupal 8 starter theme

#### Clone and rename theme
```sh
git clone git@github.com:avitslv/themeinsane.git;
mv themeinsane mytheme;
cd mytheme;
```
Remove git directory
```sh
sudo rm -R .git;
```
Replace theme name `themeinsane` with yours throughout theme filenames and files. `mytheme` is your desired theme name.
```sh
find . -depth -name '*themeinsane*' -execdir bash -c 'mv -i "$1" "${1//themeinsane/mytheme}"' bash {} \;
LC_CTYPE=C && find ./ -type f -exec sed -i '' -e 's/themeinsane/mytheme/' {} \;
```

#### Install npm packages
Installs npm packages locally
```sh
npm install
```

#### Install gulp-cli globally
```sh
sudo npm install -g gulp-cli
```

#### Install bower package manager globally
```sh
sudo npm install -g bower
```

#### Install bower packages
Use bower to install front-end packages, e.g. JS libraries like `swiper`. Packages are downloaded in `assets/vendor`
```sh
bower install
```

#### Compiling styles
To watch for file changes, launch livereload and compile styles run
```sh
gulp
```
To compile styles once run
```sh
gulp sass
```
