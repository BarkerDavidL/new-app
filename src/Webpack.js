import React from 'react';

export default function Webpack() {
    return (
      <>
<h1>Build a deployable website (html and JS) using Webpack</h1>
<p>At this point, if you are building a project that will be a user-facing
    front-end (i.e. a website), then you will want to package that project
    for deployment to a web server. Deployment means that we cut out all
    the development-only code (debuggers, libraries used to test and build
    stuff, etc) and to simplify and minimize the javascript (only deliver
    the libraries that you use, not everything installed on your development
    environment, combine all your javascript to one deployable js file).
    We are using webpack here, but you could use parcel or some other
    packaging tool.</p>

<h2>Create a distribution directory.</h2>
<p>Usually called 'dist' or 'build'</p>
<pre className="console">
&gt; mkdir dist
&gt; touch dist/index.html
</pre>
<h2>Create initial HTML main page</h2>
<p>Edit dist/index.html and include only what you need (you no longer need
   to put all the &lt;html&gt;, &lt;head&gt; and &lt;body&gt; tags in an
   html file. They are assumed now.</p>
<h3>dist/index.html</h3>
<pre className="editor">
&lt;title&gt;New Project&lt;/title&gt;
&lt;h1&gt;Welcome to my New Project&lt;/h1&gt;
&lt;script src="./bundle.js"&gt;&lt;/script&gt;
</pre>
<ul>
<li>note that there is no file called "bundle.js"</li>
<li>Webpack will create that from all your .js files in your project</li>
</ul>
<h2>Install Webpack on your project</h2>
<p>You need to do this for each project. It copies the webpack modules
    into the node_modules directory (and creates the directory if it is
    not already there.) By using --save-dev, it will only using these
    modules during development. It will not put these modules into the
    deployable website because they are not used by your website and
    are not needed.</p>
<pre className="console">
&gt; npm install --save-dev webpack webpack-dev-server webpack-cli
</pre>
<ul>
<li>Installs three modules for use only in development in node_modules/</li>
<li>Added one line for each package in the devDependencies section of package.json</li>
</ul>
<h2>Configure Webpack for your project</h2>
<p>You will need to configure webpack to build your website, and then
   you'll need to update your start script. To run your new website in
   a development mode, change the 'start' script in package.json.</p>
<h3>package.json</h3>
<pre className="editor">
"start": "webpack serve --mode development",
</pre>
<p>Add a new webpack.config.js file in the main directory of your project.</p>
<h3>webpack.config.js</h3>
<pre className="editor">
{`
const path = require('path');

module.exports = {
    entry: path.resolve(__dirname, './src/index.js'),
    output: {
        path: path.resolve(__dirname, '/dist'),
        filename: 'bundle.js',
    },
    devServer: {
        static: path.resolve(__dirname, './dist'),
    },
}
`}
</pre>
<ul>
  <li>Uses path to better handle paths across different OSes</li>
  <li>Points to your src/index.js script (in the future, other scripts go here)</li>
  <li>Points to the output directory which already contains your html files</li>
  <li>Specifies the bundle.js file that webpack will create from your js files. That will go in /dist</li>
</ul>
<p>Now you can run this on the command line</p>
<pre className="console">
&gt; npm start
</pre>
<p>Or using VS Code's NPM Intellisense extension, chose
   NPM SCRIPTS->package.json->start run button. In both cases, use your
   browser to go to the link: http://localhost:8080/</p>
         </>
      );
    }