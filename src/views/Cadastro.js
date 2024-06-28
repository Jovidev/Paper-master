//src\views\Cadastro.js
import React, { useState } from 'react';
import { Container, H1, Image, Input, Button, ContainerItens } from "../style";
import Avatar from '../assets/avatar.svg';
import CadastroForm from '../components/Tabelas';


const Login2 = () => {

  return (
    <Container>
            <H1> Realize o seu cadastro </H1>
                  <ContainerItens>        
                      <CadastroForm/>
                  </ContainerItens>
            <Image alt="logo-imagem" src={Avatar} />
    </Container>
  );
};

export default Login2;
