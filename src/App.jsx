import "normalize.css";
import "./App.css";
import { Header } from "./components/Header";
import { Quiz } from "./components/Quiz";
import { Footer } from "./components/Footer";

function App() {
  return (
    <div className='page'>
      <Header />
      <Quiz />
      <Footer />
    </div>
  );
}

export default App;
