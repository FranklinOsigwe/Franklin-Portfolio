import Intro from './components/intro/Intro'
import About from './components/about/About';
import './components/intro/Intro.css';
import ProductList from './components/productList/ProductList';
// import Award from './image/abtpose.jpeg'

function App() {
  return (
    <div>
      <Intro />
      <About/>
      <ProductList/>
    </div>
  );
}

export default App;
