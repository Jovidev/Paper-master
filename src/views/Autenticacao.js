import React, { useState } from 'react';
import { Container, H1, Image, Input, Button } from "../style";
import people from '../assets/people.svg';
import { useUserController } from '../controllers/UserController'; // Importar o controlador de usuário
import { useNavigate } from 'react-router-dom';



const Autenticacao = () => {
  const [emailInput, setEmailInput] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const {changeInputEmail, registeredEmail } = useUserController();
  const navigate = useNavigate();

  const handleEmailChange = (e) => {
    setEmailInput(e.target.value);
    changeInputEmail(e);  // Atualiza o estado do e-mail no controlador, se necessário
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (emailInput === registeredEmail) {
      alert(`E-mail de autenticação enviado para ${emailInput}`);
      setErrorMessage('');
    } else {
      setErrorMessage('O e-mail informado não corresponde ao e-mail cadastrado.');
    }
  };


  const handleBackClick = () => {
    navigate('/login');
  };

  return (
    <Container>
      <Image alt="people" src={people} />
      <H1>Autenticação de usuário</H1>
      
      <form onSubmit={handleSubmit}>
        <Input onChange={handleEmailChange} placeholder="Confirme seu e-mail cadastrado" type="e-mail" value={emailInput} />
        <Button type="submit">Enviar e-mail de autenticação</Button>
        <Button type="submit" onClick={handleBackClick}>Voltar</Button>
      </form>
      
      {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}

      <div>
        <br></br>
      </div>
    </Container>
  );
};

export default Autenticacao;
