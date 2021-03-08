# Simple and very limited way of generating nested HTML elements with JS https://codepen.io/karavachev/pen/gOLBGNQ

<b>Example:</b>

Instead of <b>document.getElementsByTagName("body")[0].append(createElement("main"));</b>   </br></br> you can do <b> main.create(inBody);</b>

or nest elements right awaylike this: 

<b> main.create(inBody, article.create(inParent, h1.create(inParent, "Hello world))); </b> </br> and you will get:

<pre><code>&ltmain&gt&ltarticle&gt&lth1&gtHello world&lt/h1&gt&lt/article&gt&ltmain&gt</code></pre>

Then you can style it like this:

style(byID, "h1_1").color="red";

Instructions:

You have 2 paramethers for each element. One is "where" and the other is "what content". 

You have to have only one element in body and each next element will have to be within the previous.

For example:

main.create(inBody, h1.create(inParent, "Hello")) //Where the .create() is a method and it gets the "where" and "what content".

So we have one main element in the body and another h1 inside the main. 

Element .create(where, what content(where, what content));

If the content of the main element will be h1 then we will invoke the .create by h1.create(inParent...
