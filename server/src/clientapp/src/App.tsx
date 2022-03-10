import './App.css';
import { UserList } from './modules/user/UserList.component';
import { ProductList } from './modules/product/ProductList.component';
import { Route, Routes } from 'react-router';
import { Container } from './layout/Container/Container.style';
import { AddProduct } from './modules/product/AddProduct.component';

function App() {
  return (
    <div className="App">
      <Container>
        <Routes>
          <Route path="/" element={<UserList />} />
          <Route path="products" element={<ProductList />} />
          <Route path="products-add" element={<AddProduct />} />
        </Routes>
      </Container>
    </div>
  );
}

export default App;
