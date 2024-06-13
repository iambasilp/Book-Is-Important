import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import ReadNow from "./components/ReadNow";
import BenifitsOfReading from "./components/BenifitsOfReading";
import Counter from "./components/Counter";

const App = () => {
  return (
    <div className="bg-white w-full">
      <Header />
      <Home />
      <About />
      <ReadNow />
      <BenifitsOfReading />
      <Counter />
    </div>
  );
};

export default App;
