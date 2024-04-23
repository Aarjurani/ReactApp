import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";


//  const parent=React.createElement("div",{id:"parent"},"hiiiii its parent");

// const Header = () => {
//   return (
//     <div className="header">
//       <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZak43s1U31s8sGsjCMoPYapYSm2TNsLULNooaIP_mxw&s" />
//       <div className="h3">
//         <h3>home </h3>
//         <h3>body</h3>
//         <h3>content</h3>
//         <h3>cart</h3>
//         <App />
//       </div>
//     </div>
//   );
// };

// const App=()=>{
//   return(
//     <>
//     <Header/>
//    </>
//   )
// }

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
