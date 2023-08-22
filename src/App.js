
import './App.css';
import Experience from './components/Experience';
import Footer from './pages/Footer';
import Home from './pages/Home';
import Products from './pages/Products';

function App() {
  return (
    <div className="container mx-auto bg-slate-100">
    <Home/>
   <Experience/>
   <Products/>
   <Footer/>
    </div>
  );
}

export default App;
