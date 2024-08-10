import React, { useState, useEffect } from "react";

function Price(data) {
  return (
    <div>
      {data.map((item, index) => (
        <p key={index}>{item}</p>
      ))}
    </div>
  );
  //   const dataPrice = data.map((item, index) => {
  //     <p key={index}>{item}</p>;
  //   });
}

// function ChildComponent(props) {
//   return (
//     <div>
//       {props.data.map((item, index) => (
//         <p key={index}>{item}</p>
//       ))}
//     </div>
//   );
// }
