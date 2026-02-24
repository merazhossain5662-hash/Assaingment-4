## Assaingment-4

## Question-1:
 What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?
# Answer-1:
The difference between these is :
when we use   getElementById or  getElementsByClassName, we don't need to use CSS selector style and on the other hand we have to use   CSS selector style to get an eliment.

## Question-2:
 How do you create and insert a new element into the DOM?
 # Answer-2:
First of all, we need to create an element using document.createElement("tagName") method then we can add any tex, classes or any content and then we need to use parent.append() or parent.appendChild() method to insert the new element.

## Question-3:
 What is Event Bubbling? And how does it work?
# Answer-3:
Event Bubbling is a prosses where an event starts from the target element and the moves upword to it's parent elements inside the DOM tree.And when we click on en element the event first happens on the clicked element and then it moves to it's parent and then grandparent and continues up to the document.  