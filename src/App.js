import './global.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import { Home } from './pages/home/Home';
import { Layout } from './pages/layout/Layout';
import { Platofrm } from './pages/platform/Platofrm';
import { Products } from './pages/products/Products';
import { Company } from './pages/company/Company';
import { Forex } from './pages/forex/Forex';
import { Options } from './pages/options/Options';
import { About } from './pages/about/About';
import { FuhnanceAdvantages } from './pages/fuhnance-advantages/FuhnanceAdvantages';

function App() {
  return (
    <>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} exact />
            <Route path="/platform" element={<Platofrm />} exact />
            <Route path="/products" element={<Products />} exact />
            <Route path="/company" element={<Company />} exact />
            <Route path="/forex" element={<Forex />} exact />
            <Route path="/options" element={<Options />} exact />
            <Route path="/about" element={<About />} exact />
            <Route path="/feature-advantages" element={<FuhnanceAdvantages />} exact />
          </Routes>
        </Layout>
      </Router>
    </>
  );
}

export default App;
