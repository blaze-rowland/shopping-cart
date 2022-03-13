import './App.css';
import { Route, Routes } from 'react-router';
import { Container } from './layout/Container/Container.style';
import { ProductPage } from './modules/products/ProductPage.component';
import { ProductView } from './modules/products/components/ProductView/ProductView.component';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<ProductPage />} />
        <Route path="/product/:id" element={<ProductView />} />
      </Routes>
    </div>
  );
}

export default App;
