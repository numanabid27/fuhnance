import './global.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import { Home } from './pages/home/Home';
import { Layout } from './pages/layout/Layout';

function App() {
  return (
    <>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} exact />
          </Routes>
        </Layout>
      </Router>
    </>
  );
}

export default App;
