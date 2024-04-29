
import './App.css';
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { AllRoutes } from "./routes/AllRoutes";

function App() {
  return (
    <div className="App bg-slate-100 dark:bg-dark">
      <Header />
      <AllRoutes />
      <Footer />
      </div>
  );
}

export default App;
