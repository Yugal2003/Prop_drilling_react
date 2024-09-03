// Go to the important file first inside component folder


// USING usecontext method 

// import { createContext } from 'react';
// import './App.css';
// import CompA from './component/CompA';

// const fname = createContext();
// const currage = createContext();


// function App() {
//   let name = "Yugal";
//   let age = "20";
  
//   return (
//     <>
//       <fname.Provider value={name}>
//         <currage.Provider value={age} >
//           <CompA/>
//         </currage.Provider>
//       </fname.Provider>
//     </>
//   );
// }

// export default App;
// export {fname,currage};








// USING contextAPI method 


// import { createContext } from 'react';
// import './App.css';
// import CompA from './component/CompA';


// const fname = createContext();
// const currage = createContext();

// function App() {
//   let name = "Yugal";
//   let age = "20";
  
//   return (
//     <>
//       <fname.Provider value={name}>
//         <currage.Provider value={age} >
//           <CompA/>
//         </currage.Provider>
//       </fname.Provider>
//     </>
//   );
// }

// export default App;
// export {fname,currage};








// USING Prop Drilling method pass one by one js file using props

// import './App.css';
// import CompA from './component/CompA';


// function App() {
//   let name = "Yugal";
//   let age = "20";
  
//   return (
//     <>
//         <CompA name={name} age={age}/>
//     </>
//   );
// }

// export default App;