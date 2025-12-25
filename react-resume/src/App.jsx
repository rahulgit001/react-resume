import Header from "./components/Header";
import Summary from "./components/Summary";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Education from "./components/Education";
import Certifications from "./components/Certifications";

function App() {
  return (
    <div className="container">
      <Header />
      <Summary />
      <Skills />
      <Experience />
      <Projects />
      <Education />
      <Certifications />
    </div>
  );
}

export default App;
