//1. prop drilling - nothing
//2. contextAPI - three item 1.createContext 2. Provider 3. consumer
//3. useContext - three item 1.createContext 2. Provider 3. useContext


// aapne ek js file thi biji js file sathe props dealing karine data share component ma kari sakiye but App.js thi direct CompC ne data nahi mokali sakiye te mate aapne props use karvana badle context api use karisu but tema pan callback hell ni jem j ek function ni andar badha function declare karisu to te code lenghty thase te mate aapne use karisu useContext...


// 1.why we are using the context API in react

// ANS => The Context API in React provides a way to share data between components without having to pass props through every level of the component tree manually. Here are some reasons why the Context API is useful:

// Avoids Prop Drilling: In a large React application with deeply nested component trees, passing props down through multiple levels can become cumbersome and make the code harder to maintain. Context allows you to provide a value to all components within a specific context, avoiding the need to pass props through intermediate components that don't need them.

// Global State Management: Context can be used to manage global state in your application. Instead of lifting state up to a common ancestor component or using a third-party state management library like Redux, you can use Context to share state between components that need it.

// Encapsulation: Context allows you to encapsulate related data and behavior within a single context provider. This can help keep your code organized and make it easier to reason about.

// Performance Optimization: Context can help optimize performance by reducing unnecessary re-renders. Since only components that consume the context and depend on its values will re-render when the context changes, you can avoid unnecessary re-renders in components that don't use the context.

// Simplifies Component Composition: Context can simplify component composition by decoupling components from each other. Components can focus on their specific responsibilities without being tightly coupled to the data they need.

// Overall, the Context API in React is a powerful tool for managing state and sharing data between components, especially in large and complex applications. It promotes clean and maintainable code by reducing the need for prop drilling and simplifying component composition.





// 2. why we are using the usecontent hook in react

// ANS => The useContext hook in React is used for accessing context in functional components. Context provides a way to pass data through the component tree without having to pass props down manually at every level.

// Here's why useContext is useful:

// Avoids Prop Drilling: In a deeply nested component tree, passing props through each level of nesting can become cumbersome. useContext allows you to access values from a context provider anywhere in the component tree without explicitly passing props down through each level.

// Cleaner Code: By using useContext, you can simplify your code by avoiding unnecessary prop passing between intermediate components. This leads to cleaner and more readable code.

// Global Data Access: Context can be seen as a way to provide global state or data that multiple components in your application might need. useContext allows any component to access this global data easily.

// Avoids Callback Propagation: When data needs to be passed through multiple layers of components, you might end up with a chain of callback props. With useContext, you can avoid this callback propagation, making your code more maintainable.

// Overall, useContext provides a convenient way to access shared data or state across your React components without resorting to prop drilling or callback passing.
