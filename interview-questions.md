# ASSESSMENT 3: Interview Practice Questions

Answer the following questions.

First, without external resources. Challenge yourself to answer from memory as if you were in a job interview.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. What is JSX? What is one syntax difference between HTML and JSX?

Your answer: JSX is Javascript XML that can behave like HTML, and its inside the return. Its with the JSX fragments and curly braces that allows us to utilize Javascript inside of HTML.

Researched answer: JSX is neiter a string or HTML. Its a syntax extension to Javascript.  One difference between HTML and JSX is that HTML elements have attributes whereas JSX elements have props.  JSX also allows us to write HTML in React by converting HTML tags into React elements, one example is that it lets us write HTML elements in Javascript and put them into the DOM without any other methods. JSX can allow the programmer to write sweeter syntactical code that can be easier to read and allows React to produce better error messages.  

2. What is yarn? What file(s) are modified in a React application when you run the command yarn in your terminal?

Your answer: Yarn modifys or adds the required node modules, json packages, and yarn lock files to create the react app. 

Researched answer: Yarn is a package manager whose primary function is to install only packages that are required for the users purpose on thier local computer or servers. The required packages are dependant on the individual projects. Yarn uses lockfiles and an install algorithm that is specific to the version helping to ensure the installs are the exact same file structure in the node modules accross all computers. During the install process it starts by verifying dependancies, then verifies if the package is already downloaded. Then Yarn brings all file copies required from the global cache to the computer in the node modules. 

3. What is an anonymous function in JavaScript? 

Your answer: Anonymous functions in Javascript are the Higher Order Functions, .map(), .forEach(), & .filter().

Researched answer: An anonymous function is declared without an identifier, meaning it has no name. These functions can be passed as an argument to another function. Also they can be immediately invoked after its declaration by putting the parenthesis at the end after the closing curly brace followed by a semi-colon. 

4. What is the difference between state values and props in React?

Your answer: In React the state values are stored information or tracked changes overtime. Whereas props, short for properties, are objects that pass information or methods from parent components such as the App.js file to child component files you create for specific code scripts that can be referenced and utilizing the props can pass arguments through the component call.  

Researched answer: Both state and props are objects that have information stored to change and output but props are passed to the component similar to an argument passed to a function, and state is kept within the component.  Props should be immutable and not changed so they will always produce the same output in any React component. State allows a component to track information and update such as keeping track of how many times a button was pressed.  State is created in the component and gets it data from the there or from a prop. Unlike props, state can be changed and utilizing setState React can update the object and render the change in the component automatically.

5. What is the DOM?

Your answer: Document Object Model or DOM for short track the events and makes changes or updates as required when the user or browser is manipulated. Examples of this would be radio buttons, keyboard or mouse input, and just general resizing of the browswer. 

Researched answer: The DOM allows Javascript to access and modify web pages via nodes or HTML elements. All of these HTML nodes are is linked either directly or indirectly to the root node, document.  The document node is directly linked to HTML and HTML in turn is directly linked to the head and body and so on.  This is part of a top down control of the entire UI allowing fast updates and tracking of changes more precisly with the virtual DOM allowing only particular node that changed to render the change instead of the entire web page updating. 

6. STRETCH: Which is the difference between a div and a span?

Your answer: The div is the JSX fragments that encompass the component calls whereas the span encompasses it all, from the header, body, and component calls.

Researched answer: Both div or division tag and span tag are HTML elements that group together the head, body or other sections of the web page.  Span is an inline tag mainly used for styling and should be utilized if you are highlighting or emphasizing any words on the web page.  Div is a block level tag that divides content on the web page such as text, pictures, navigation bar and so on. They have both opening and closing tags. This tag should be used to highlight or emphasize by wrapping an entire section of your web page. 

## Looking Ahead: Terms for Next Week 

1. Object-oriented programming: Object-oriented programming is based on classes containing both parent and child classes and objects containing data properties and code methods. This helps to create reuseable code, allowing more complex models to be more easily reproducable with less duplicate scripting. 

2. Ruby: Ruby is an iterpretive computer language created in the early 1990's that is well suited for both front end and back end web development. It is well knowned for being between functional and imperative programming that is practical in its object-oriented design.  It can be used with windows, mac, linux, unix and dos. 

3. Implicit return: Implicit return is a return from an arrow function with out curly braces and the "return" keyword.  

4. Ruby blocks: Blocks seem similar to parameters. They can be passed into a method to call the method when required. Not exactly clear on "procs", but they seem to also be blocks. 

5. Ruby hashes: A hash in ruby seems similar to objects in Javascript since it is a data structure of key value pairs also surrounded by curly braces. 
