import { useState } from "react";
import Navbar from "./components/Navbar";
import Boardnews from "./components/Boardnews";



const App = () => {
  const [category, setCategory] = useState("general");

  return (
    <>
      <Navbar setCategory={setCategory} />
      <Boardnews category={category} />
    </>
  );
};

export default App;
