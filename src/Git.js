import React from 'react';

export default function Git() {
    return (
      <>
<h1>Source Code Control</h1>
<p>It's time to create a repository and save our work. We will create a local git repo, add our work,
     commit it, then push it up to github. From the root directory of our project:</p>
<pre className="console">
&gt; git init
&gt; echo node_modules &gt; .gitignore
&gt; touch README.md
</pre>
<h2>Update the README.md file</h2>
<p>Add all the npm install commands into the README.md file since anyone cloning your repo will not get
     node_modules and thus will not be able to run your app until they install them.</p>
<pre className="console">
&gt; git add package.json package-lock.json webpack.config.js dist/ src/ .gitignore README.md
&gt; git commit -m "Initial Version"
</pre>
<h3>Push up to github</h3>
<p>Now, go to github and create a repo with the same name as this project (RepoName), but leave it empty.
   Then set your local branch (assuming 'main', but might be 'master') to the remote origin at github.</p>
<pre className="console">
&gt; git remote add origin https://github.com/BarkerDavidL/RepoName.git
&gt; git push --set-upstream origin main
</pre>
      </>
      );
    }