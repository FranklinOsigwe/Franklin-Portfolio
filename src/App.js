import Intro from './components/intro/Intro'
import About from './components/about/About';
import './components/intro/Intro.css';
import ProductList from './components/productList/ProductList';
import Contact from './components/contact/ Contact'

// import Award from './image/abtpose.jpeg'

function App() {
  return (
    <div>
      <Intro />
      <About/>
      <ProductList />
      <Contact />
    </div>
  );
}

export default App;
