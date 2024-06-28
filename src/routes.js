import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './views/Home';
import Login from './views/Login';
import Produtos from './views/Produtos';
import Cadastro from './views/Cadastro';
import Sobre from './views/Sobre';
import Autenticacao from './views/Autenticacao';


const AppRoutes = () => (

    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/sobre" element={<Sobre />} />
      <Route path="/produtos" element={<Produtos />} />
      <Route path="/cadastro" element={<Cadastro />} />
      <Route path="/autenticacao" element={<Autenticacao />} />
    </Routes>

);

export default AppRoutes;
