import React from 'react';
import logo from './logo.svg';
import './App.css';
import { UserList } from './modules/user/UserList.component';
import { UserSchema } from '../../modules/user/user.table';
import { ProductList } from './modules/product/ProductList.component';

function App() {
  return (
    <div className='App'>
      <UserList />
      <ProductList />
    </div>
  );
}

export default App;
