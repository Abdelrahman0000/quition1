import React, { useState } from "react";
import data from './data'
import Quition from "./quition";

function App() {
  const[quition,setquition]=useState(data)
  return (
   <main>
     <div className="container">
<h3>question and answer about login</h3>
<section className="info">
  {quition.map((qui)=>(
<Quition key={qui.id} {...qui} />
  ))}
</section>
     </div>
   </main>
  );
}

export default App;
