# Simple and very limited way of generating nested HTML elements with JS

<b>Example:</b>

Instead of <b>document.getElementsByTagName("body")[0].append(createElement("main"));</b>   </br></br> you can do <b> main.create(inBody);</b>

or nest elements right awaylike this: 

<b> main.create(inBody, article.create(inParent, h1.create(inParent, "Hello world))); </b> </br> and you will get:

<pre><code>&ltmain&gt&ltarticle&gt&lth1&gtHello world&lt/h1&gt&lt/article&gt&ltmain&gt</code></pre>

Then you can style it like this:

style(byID, "h1_1").color="red";

