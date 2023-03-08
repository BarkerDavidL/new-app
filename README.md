This is intended to be a quick-start guide for creating javascript
websites using
- node, which contains node package manager - npm, to help package the site
- webpack, a configuration and build tool
- babel, a tool to help our javascript be compatible with most browsers
- react, a javascript framework for front-end development and components

After cloning this repository, you will need to go into the base directory
and install the node modules that this site needs. We do not maintain these
modules in our own repository.

cd new-app
npm install --save-dev webpack webpack-dev-server webpack-cli
npm install --save-dev @babel/core @bable/preset-env
npm install --save-dev babel-loader

