import { useState } from 'react';

export const useUserController = () => {
  // Estado inicial para os campos do usuário
  const [users, setUsers] = useState([]);
  const [name, setName] = useState('');
  const [senha, setSenha] = useState('');
  const [endereço, setEndereço] = useState('');
  const [cidade, setCidade] = useState('');
  const [cep, setCep] = useState('');
  const [cpf, setCpf] = useState('');
  const [rg, setRg] = useState('');
  const [nascimento, setNascimento] = useState('');
  const [pais, setPais] = useState('');
  const [confirmar, setConfirmar] = useState('');
  const [email, setEmail] = useState('');
  
  // E-mail registrado fictício
  const registeredEmail = 'usuario@exemplo.com'; 

  // Função para adicionar novo usuário
  const addNewUser = () => {
    setUsers([
      ...users,
      { id: Math.random(), name, senha, endereço, cidade, cep, cpf, rg, nascimento, pais, confirmar, email }
    ]);
  };

  // Funções para atualizar os campos de entrada
  const handleInputChange = (setter) => (event) => setter(event.target.value);

  return {
    users,
    addNewUser,
    registeredEmail,
    changeInputUserName: handleInputChange(setName),
    changeInputSenha: handleInputChange(setSenha),
    changeInputEndereço: handleInputChange(setEndereço),
    changeInputCidade: handleInputChange(setCidade),
    changeInputCep: handleInputChange(setCep),
    changeInputCpf: handleInputChange(setCpf),
    changeInputRg: handleInputChange(setRg),
    changeInputNascimento: handleInputChange(setNascimento),
    changeInputPais: handleInputChange(setPais),
    changeInputConfirmar: handleInputChange(setConfirmar),
    changeInputEmail: handleInputChange(setEmail),
  };
};
