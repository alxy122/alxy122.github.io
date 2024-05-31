import "./App.css";
import AppHero from "./components/Hero";
import Navbar from "./components/Navbar";
import AppAbout from "./components/About";
import AppServices from "./components/Services";
import "bootstrap/dist/css/bootstrap.min.css";
import AppWorks from "./components/Works";

function App() {
  return (
    <>
      <div className="App">
        <Navbar />

        <main>
          <AppHero />
          <AppAbout />
          <AppServices />
          <AppWorks />
        </main>
      </div>
    </>
  );
}

export default App;
