import { useState } from "react";
import "normalize.css";
import "./App.css";
import { Header } from "./components/Header";
import { Quiz } from "./components/Quiz";
import { Footer } from "./components/Footer";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className='page'>
      <Header />
      <Quiz />
      <Footer />
    </div>
  );
}

export default App;
