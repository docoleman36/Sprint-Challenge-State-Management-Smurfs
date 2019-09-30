1. What problem does the context API help solve?
Context API solves state managment in your component. Instead of prop-drilling, you are able to store your state in reducers and then pass them around when needed. 

2. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?
Actions - Actions signals that something happened in the interface
Reducers - Handle the changes of the state
Store - Redux store, stores the whole state of the application. 
Single source of truth means that the only way to change your data in UI is to dispatch redux action which will change the state within redux reducer. 

3. What is the difference between Application state and Component state? When would be a good time to use one over the other?
Application state is state that is `global` to all components. Component state is `local` state. You would use one over the other depending on your needs. Large project vs small project. 

4. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?
Redux-think is a middleware that looks at every action that passes through the systen, and if it's a function, it calls that function. With thunk, it allows us to call a function, pass it, and then dispatch.

5. What is your favorite state management system you've learned and this sprint? Please explain why!
I like Redux. I think it is a little bit easier to use than Context-API. Redux is also more popular in the industy and will help in the workforce. 
