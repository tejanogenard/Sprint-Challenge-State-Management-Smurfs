1. What problem does the context API help solve?
    -Contex API allows us to solve the problem of prop 
        drilling. 

1. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?
    -Reducers tells is how the application state will change based on the actions that are sent to the store 

    -Actions are pieces of information that send data to the store 

    -The store holds state for the entire application that may be why it is called a 'single source of truth'

1. What is the difference between Application state and Component state? When would be a good time to use one over the other?
    - Application state is a global state that all the components inside the application can access. Component state only lives inside of that single component

1. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?
    - redux-thunk is middleware that allows us to write action creators to return a function instead of an action object


1. What is your favorite state management system you've learned and this sprint? Please explain why!
    -Using Redux was my favorite state management system I've learned. It was very interesting seeing how we can connect to a store with our action creators and altering state with our reducers.
