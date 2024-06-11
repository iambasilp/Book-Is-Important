import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import ReadNow from "./components/ReadNow";

const App = () => {
  return (
    <div className="bg-white w-full">
      <Header />
      <Home />
      <About />
      <ReadNow />
    </div>
  );
};

export default App;
