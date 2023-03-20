import React from 'react';

export default function Setup() {
    return (
      <>
<h1>System Setup</h1>
<p>Before beginning with Javascript development, you'll first want to
    install the tools you need to run and test on your local environment.
    You also will need editors and source code control
</p>
<h2>Software to Install</h2>
<ul>
  <li>javascript</li>
  <li>node (get npm and npx with this)</li>
  <li>VS Code</li>
  <li>VS Code extensions for node, docker, ESLint, ?</li>
  <li>git</li>
  <li>Git Bash</li>
  <li>docker</li>
</ul>
<h2>Get accounts on:</h2>
<ul>
  <li>github</li>
  <li>docker</li>
</ul>
<h2>Configuration for git</h2>
<pre className="console">
&gt; git config --global user.name "Your Name"
&gt; git config --global user.email "your@email.adr"
</pre>
<h2>Configuration for Node Package Manager</h2>
<pre className="console">
&gt; npm set init-author-name "&lt;Your Name&gt;"
&gt; npm set init-author-email "you@example.com"
&gt; npm set init-author-url "https://example.com"
&gt; npm set init-license "MIT"
</pre>
      </>
    );
  }