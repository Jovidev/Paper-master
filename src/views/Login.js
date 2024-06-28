import React, { useState } from 'react';
import { Container, H1, Image, Input, Button, ContainerItens } from "../style";
import Avatar from '../assets/avatar.svg';
import Arrow from '../assets/arrow.svg';
import { useUserController } from '../controllers/UserController';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const { users, addNewUser, changeInputUserName, changeInputSenha } = useUserController();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  // Funções de Manipulação de Clique no "button"
  const handleAccessClick = () => {
    if (username === '' || password === '') {
      alert('Por favor, preencha os campos de Usuário e Senha antes de acessar.');
    } else {
      addNewUser();
      navigate('/Produtos');
    }
  };

  const handleForgotPasswordClick = () => {
    addNewUser();
    navigate('/autenticacao');
  };

  const handleRegisterClick = () => {
    navigate('/Cadastro');
  };

  return (
    <Container>
      <ContainerItens>
        <H1>Login</H1>
        <Input 
          onChange={(e) => {
            changeInputUserName(e);
            setUsername(e.target.value);
          }} 
          placeholder="Usuário" 
        />
        <Input 
          onChange={(e) => {
            changeInputSenha(e);
            setPassword(e.target.value);
          }} 
          placeholder="Senha" 
          type="password" 
        />
        <Button onClick={handleAccessClick}>
          Acessar <img alt='seta' src={Arrow} />
        </Button>
        <Button onClick={handleForgotPasswordClick}>
          Esqueci a senha
        </Button>
        <Button onClick={handleRegisterClick}>
          Registrar-se
        </Button>
      </ContainerItens>
      <Image alt="logo-imagem" src={Avatar} />
    </Container>
  );
};

export default Login;
