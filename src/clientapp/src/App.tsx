import './App.css';
import { Route, Routes } from 'react-router';
import { Container } from './layout/Container/Container.style';
import { ProductPage } from './modules/products/ProductPage.component';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<ProductPage />} />
      </Routes>
    </div>
  );
}

export default App;
