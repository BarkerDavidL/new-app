import React from 'react';

export default function New() {
    return (
      <>
<h1>Steps for a new project</h1>
<p>The following steps will create a new bare-bones vanilla javascript
   project. It will set up Node Package Manager (NPM) so that it can
   package up the project for deployment. And you will be able to run
  this locally using NPM.</p>
<h2>Set up the new project directory on your file system</h2>
<pre className="console">
&gt; mkdir new-project-directory
&gt; cd new-project-directory
&gt; npm init -y
</pre>
<ul>
<li>uses defaults</li>
<li>creates package.json, take a look and modify what you want</li>
</ul>
<h2>Create the initial project code and directory structure</h2>
<pre className="console">
&gt; mkdir src
&gt; create src/index.js
</pre>
<ul>
  <li>put some javascript in there, such as console.log("In index.js");</li>
</ul>
<h2>Run the project in bare Node</h2>
<p>Notice how we are staying in the project home, not cd'ing into src.</p>
<pre className="console">
&gt; node src/index.js
</pre>
<h2>Use NPM to run the project</h2>
<p>Now make this runnable by package.json. Add the "start" script to the
   existing scripts.</p>
<pre className="editor">
{`
{
  ...
  "scripts": {
    "start": "node src/index.js",
    ...
  },
  ...
}
`}
</pre>
<p>Then run this with:</p>
<pre className="console">
&gt; npm start
</pre>
      </>
      );
    }