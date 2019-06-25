//What is lazy?
//Lazy is a new module React that enables support for code splitting
//Most React apps will their files bundled using tools like Webpack and/or Rollup. 
//Bundling is the process of following imported files and merging them into a single file
//If we are using create react app, Gatsby or NextJS they will have a webpack setup out of the box to bundle our application
//When our applications grow this can really slow it down.

//Code splitting allows us to break our bundles down into smaller bundles and only ship what we need to the browser at the time the user needs it.
//This leads into faster load times
//This also trims down the amount of content we request

//Example
//We may have a forgot password page but if a user never forgets their password, they will never actually need this so we use code splitting to only load it when the user actually visits the page

//Lazy relies on dynamic imports over static imports

//What are hooks?
//The next iteration in the React Ecosystem
//They are designed to use state and lifecycle hooks inside of a functional component
//Why would we want to do this? 
//It's faster
//We can avoid the bugs that come with class components
//We do not have to worry about constructor functions, prototypal inheritance and the context of the component 

//Hooks were designed to simplify the React Ecosystem
//Enable building more scalable components and more composable components
//Code and Component use is more simple

//Few caveats:
//Hooks can only be used in functional components
//Hooks should only be called at the top level of the componenet, meaning not in loops or conditionals
//If we need to loop we can do it inside the hook
//Hooks add complexity if you don't have a solid understanding of what happens behind the scenes
//Classes are still and always will be a valid way to write React

//There are many different hooks

//useState
//Returns a stateful value and a function to update it
//You can have many useState to create mulitiple properties on state

//useEffect
//This is where we will use our lifecycle logic
//It's called an effect after the term side-effect
//This is where we can make our http request when the componenet first mounts / updates
//This will take place over our componentDidMount, componentDidUpdate, etc...
//It's fired after every render of the component, but you can set watcher values of an array
//For example, a value that is on state


