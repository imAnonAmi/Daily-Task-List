# Homework-05: Simple Calendar

### Deployed at
https://imanonami.github.io/Homework_05/

## Project Description
This app tracks tasks across a standard work day using moment.js. Time slots in the past, present, and future (relative to when user views the calendar), are styled dynamically by comparing times using moment.js and then assigning classes (tied to the style.css) accordingly. Clicking on the central area will allow users to enter notes for that hour's specific tasks. Clicking on the blue Save button to the right saves data to local storage. Saved data is retrieved and displayed on page load for blocks that have saved text.

## Files
Multiple iterations of this. There are older versions of the index.html in the Develop folder. The final version, along with script.js and style.css files are in the main folder along with this README.md. Photos of pseudo-code are in assets.

## Takeaways
1. Moment.js is finicky. Remember to parse AND format when using it next time.
2. If you plan on using fontawesome, don't use 'i' as a variable in other contexts, such as the counter in a for loop.
3. Working on javascript on the index page while developing it, and then moving it to an external .js file was actually pretty helpful. Allowed me to just save and refresh one page, and to look up instances of any given variable across the .html and .js. 
4. Pseudocoding on paper, longer, is helpful. I basically was done with this Tuesday, and then stuck struggling with one final jquery question until Thursday.
## Remember that you can assign fontawesome classes directly to a div, then append that div to a parent element. Allowed me to combine the saveBtn class and fontawesome.
