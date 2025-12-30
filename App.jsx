import React, { useState } from "react";
import NewsBoard from "./src/components/NewsBoard"; // must match filename exactly
import Navbar from "./src/Components/Navbar";

const App = () => {
  const [category, setCategory] = useState("general");

  return (
    <div>
      <Navbar setCategory={setCategory} />
      <NewsBoard category={category} />
    </div>
  );
};

export default App;
