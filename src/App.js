import "./App.css";
import NewsBullet from "./Components/NewsBullet";
import NewsItem from "./Components/NewsItem";
import { useState } from "react";

function App() {
  const [category, setCategory] = useState("general");
  return (
    <div className="App">
      <NewsBullet setCategory={setCategory} />
      <NewsItem category={category} />
    </div>
  );
}

export default App;
