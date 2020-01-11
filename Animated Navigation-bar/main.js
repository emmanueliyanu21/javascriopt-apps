var menuToggle = document.querySelector("#menu-toggle");
var activeElements = document.querySelectorAll(".active-element");
var toggledMenu = menuToggle.addEventListener("click", function () {
    // forEach is not supported in IE11
    // activeElements.forEach(function(e){
    //     e.classList.toggle("active");
    // });
    for (var activated = 0; activated < activeElements.length; activated++) {
        activeElements[activated].classList.toggle("active"); // why does it have an active value
    }
})

// The classList property returns the class name(s) of an element, as a DOMTokenList object.

// This property is useful to add, remove and toggle CSS classes on an element.
// https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_element_classlist_add

// The classList property is read - only, however, you can modify it by using the add() and remove() methods.

// https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_element_classlist_add

// Properties of classList
// length	Returns the number of classes in the list.

// This property is read - only

// Methods of classList includes
// add(class1, class2, ...)	Adds one or more class names to an element.
// https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_element_classlist_add2

// remove(class1, class2, ...)	Removes one or more class names from an element.
// https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_element_classlist_remove

// https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_element_classlist_remove2

// toggle(class, true | false)	Toggles between a class name for an element.
// https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_element_classlist_toggle
// https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_element_classlist_get
// https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_element_classlist_length
// https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_element_classlist_item
// https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_element_classlist_contains


// The contains() method returns a Boolean value indicating whether a node is a descendant of a specified node.

// A descendant can be a child, grandchild, great - grandchild, and so on.

// https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_node_contains

// Find out if an element has a "mystyle" class.If so, remove another class name:
// https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_element_classlist_contains2
// https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_onclick_dropdown

// The first parameter removes the specified class from an element, and returns false.
// If the class does not exist, it is added to the element, and the return value is true.

// The optional second parameter is a Boolean value that forces the class to be added or removed, regardless of whether or not it already existed.For example:

// Remove a class: element.classList.toggle("classToRemove", false);
// Add a class: element.classList.toggle("classToAdd", true);