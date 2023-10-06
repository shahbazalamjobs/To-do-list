# To-do-list

## HTML & CSS
1. Placed the selected google font using API and font swesome icon using CDN
2. For consistent styling and cross browser compatibility, we have reset the padding, margin, and box-sizing to border-box;
3. We have container with 2 divs
4. Div 1 is new task with input text and add button
5. Div 2 is list of tasks pushed in div 1
6. Centered the body content using display flex, justify-content: center
7. Set container div width to 40% and min-width to 450px
8. Style input element border in focus mode using psuedo selector :focus
9. Put newtask button to right using float: right or we can use justify content: space between
10. Then styling rest of elements
11. When task completed when clicked button by setting the text to line-through

## Javascript
1. Set up event handler for add button, then checking if its input is empty or not using querySelector.value.length == 0 ;
2. If not empty then adding new task to tasks container by .innerHTML += HTML content 
3. Deleting a task by first selecting all elements and setting up event handler with class delete then removing parent task by this.parentNode.remove()
4. Toggle completed status when clicking a task first selecting all elements with class task and setting up event handler then toggle class completed using `this.classList.toggle("completed");`
5. Clearing an input field when completed a task by ` document.querySelector("#newtask input").value = "";`
