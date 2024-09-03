// USING usecontext method 

// import React, { useContext } from "react";
// import {fname,currage} from '../App'

// const CompC = () =>{
//     const name = useContext(fname);
//     const age = useContext(currage);

//     return(
//         <>
//             <h1>Hi My Name is {name} and my age is {age}</h1>
//         </>
//     );
// }


// export default CompC;





// USING contextAPI method 

// import React from "react";
// import {fname,currage} from '../App'

// const CompC = () =>{
//     return(
//         <fname.Consumer>{
//                 (fname) => {
//                     return(
//                         <currage.Consumer>{
//                                 (currage) => {
//                                     return(
//                                         <h1> My name is {fname} and age is {currage}</h1>
//                                     )
//                                 }
//                         }
//                         </currage.Consumer>
//                     )
//                 }
//         }
//         </fname.Consumer>
//     );
// }


// export default CompC;








// USING Prop Drilling method pass one by one js file using props

// import React from "react";

// const CompC = ({name,age}) =>{
//     return(
//         <>
//             <h1>My name is {name} and my age is {age}</h1>
//         </>
//     );
// }


// export default CompC;