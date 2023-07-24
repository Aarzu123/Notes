# Front-end Code Review Checklist

## HTML Code Checklist  
  - Always close the tags. Otherwise we’ll come across validation and minor error handling issues at every turn.
  - Declare the right DocType.
  - Use UTF-8 Character encoding.
  - Never Use Inline Styles on your code.
  - Never Use Inline JavaScript.
  - Place all External CSS Files within the Head Tag.
  - Use UTF-8 Character encoding.
  - Never Use Inline Styles on your code.
  - Never Use Inline JavaScript.
  - Place all External CSS Files within the Head Tag.
  - Use proper attributes for images and links. Example: “Alt“,”Title”
  - Use lowercase letters within element names, attributes, and values.  Example: DIV - Bad , div - Better "

  -  Strictly use double quotes, not single or completely omitted quotes.(Example: class=’container’ – Bad, class=”container” – Better)

  -  Omit the values on Boolean attributes.
      Example: input type=”text” name=” fname “ disabled=”disabled” – Bad ,   
      input type=”text” name=”fname” disabled – Better)

  ## CSS Code Checklist
  ---
  -  Use lower case letter for selectors and properties.
     Alphabetize your CSS property for better performance.

  -  Use ID and class names that are as short as possible.

  -  Put spaces after “:” in CSS property declarations.

(Example: color:#FF0000 – Bad, color: #FF0000 – Better)    

 - Use Hex color codes #000 unless using rgba()

 - Do not specify units for zero values.

(Example: margin: 0px; – Bad, margin: 0; – Better)
 Use Sprite Images instead of calling individuals images.

 - Use a common naming system for selectors.

 - Use shorthand properties.

(Example: margin:  10px 20px;)

 - Use a better format and indentation (2 or 4 spaces).

 ## JavaScript Code Checklist
 ---
 -  Avoid inline and embedded JavaScript.

 - Keep the global scope clean. Put code into Namespaces Page, Util, and Controls.

 -  Feature Detect – i.e. before using any advanced feature on an old browser assuming that it may support, let’s first check to see if the function exists, and then use it.

 - Test performance in all browsers mentioned above – use console.time to track down performance bottlenecks.

 -  In order to minimize number of event listeners on a page, use event delegation.

 - Keep components as independent as possible.

 -  Avoid using global variables. All variables used in a function should be declared as local variables.