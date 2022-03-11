import './App.css';
import { UserList } from './modules/user/UserList.component';
import { Route, Routes } from 'react-router';
import { Container } from './layout/Container/Container.style';
import { ProductList } from './modules/products/ProductList.component';

function App() {
  return (
    <div className="App">
      <Container>
        <Routes>
          <Route path="/" element={<UserList />} />
          <Route path="products" element={<ProductList />} />
        </Routes>
      </Container>
    </div>
  );
}

export default App;
