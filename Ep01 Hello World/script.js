// Creating and rendering a React Element

// Create a React Element using React.createElement
// React.createElement(tag, props, children) creates a virtual representation of a DOM element (a React Element),
// which is just a JavaScript object describing what the DOM should look like.
const heading = React.createElement(
    "h1", // The type of the element (tag name, e.g., "h1")
    { id: "heading", xyz: "abc" }, // Props (attributes like id, class, custom attributes, etc.)
    "Hello from ReactJS!" // Children (content inside the element)
);

// Log the React Element object to see its structure (it's not a real DOM element but a React representation)
console.log(heading); // Output: A JavaScript object that represents a React Element

// Get a reference to the root DOM node where the React application will be rendered
const root = ReactDOM.createRoot(document.getElementById("root"));

// Render the React Element in the DOM
// ReactDOM.createRoot().render() takes a React Element and updates the actual DOM to match the React Element structure.
// The virtual React Element is now converted to a real HTML DOM node and rendered in the browser.
root.render(heading);






// Creating and rendering a complex React Element (nested elements)

// The desired structure in HTML:
// <div id="parent">
//     <h1 id="child1">Hello from h1 tag within child1 tag!</h1>
//     <h1 id="child2">Hello from h1 tag within child2 tag!</h1>
// </div>

// Using React.createElement to create a parent div with two child h1 elements
const parent = React.createElement(
    "div", // The outermost parent element (a "div" tag)
    { id: "parent" }, // Props for the parent element (id: "parent")
    [
        // First child element: an h1 tag with id "child1"
        React.createElement(
            "h1",
            { id: "child1" },
            "Hello from h1 tag within child1 tag!"
        ),
        // Second child element: an h1 tag with id "child2"
        React.createElement(
            "h1",
            { id: "child2" },
            "Hello from h1 tag within child2 tag!"
        )
    ]
);

// Log the React Element (a JavaScript object representing the DOM structure)
// This helps to understand how React Elements work internally before rendering
console.log(parent);

// Render the React Element to the DOM
// The virtual React Element is converted into actual DOM nodes and displayed in the browser
root.render(parent);

// Why use JSX instead of manual React.createElement?
// React.createElement can be tedious and verbose for complex UI structures,
// which is why we use JSX, a syntax extension that simplifies writing React Elements.
// JSX: <div id="parent"><h
