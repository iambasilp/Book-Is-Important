import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import ReadNow from "./components/ReadNow";
import BenifitsOfReading from "./components/BenifitsOfReading";
import Counter from "./components/Counter";
import NewsApi from "./components/News/NewsApi";
import Contact from "./components/Contact";
const App = () => {
  return (
    <div className="bg-white w-full">
      <Header />
      <Home />
      <About />
      <ReadNow />
      <BenifitsOfReading />
      <Counter />
      <NewsApi />
      <Contact/>
    </div>
  );
};

export default App;
