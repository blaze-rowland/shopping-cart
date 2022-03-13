import './App.css';
import { Route, Routes } from 'react-router';
import { Container } from './layout/Container/Container.style';
import { ProductList } from './modules/products/ProductList.component';

function App() {
  return (
    <div className="App">
      <Container>
        <Routes>
          <Route path="/" element={<ProductList />} />
        </Routes>
      </Container>
    </div>
  );
}

export default App;
