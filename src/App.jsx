import "normalize.css";
import "./App.css";
import { Header } from "./components/Header";
import { Quiz } from "./components/Quiz";
import { Footer } from "./components/Footer";
import { useGlobalContext } from "./appContext";

function App() {
  const { length } = useGlobalContext();

  return (
    <div className='page'>
      <Header />
      {length > 0 && <Quiz />}
      <Footer />
    </div>
  );
}

export default App;
