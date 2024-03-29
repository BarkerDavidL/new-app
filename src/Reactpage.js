import React from 'react';

export default function Reactpage() {
    return (
      <>
<h1>Add React to your project</h1>
A React component is simply a javascript function that returns HTML markup. However, 
React makes heavy use of a new syntax, JSX. Currently, most browsers do not recognize
JSX, so to be able to code using JSX, we need to use Babel to transpile the code to 
older javascript that is supported.
<h2>Install the React JSX transpiler module for Babel</h2>
Whenever there are new features in javascript that you want to use, you need to find and
install a Babel module in your project's node_modules.
<pre className="console">
&gt; npm install --save-dev @babel/preset-react
</pre>
<p>Then you'll need to add this module to the Babel config in package.json</p>
<pre className="editor">{`
{
    "presets": [
      "@babel/preset-env",
      "@babel/preset-react"
    ]
}
`}</pre>
<p>Now add JSX to webpack.config.js</p>
<pre className="editor">{`
module.exports = {
    ...
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          ...
        }
      ],
      ...
    },
    resolve: {
        extensions: ['*', '.js', '.jsx'],
    },
    ...
}
`}</pre>
<h2>Include the React libraries in your deployable environment</h2>
<p>You will need to ensure that the React libraries are deployed along with the rest of your
    website. Of course, these libraries will be transpiled along with the rest of your code
    to ensure that it will work on most browsers.</p>
<pre className="console">
&gt; npm install --save react react-dom
</pre>
<h2>Add your React code</h2>
      </>
      );
    }