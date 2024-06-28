import React from 'react';
import { Container, H1, Image, Input, InputLabel, Button, ContainerItens, User, CoverImage } from "../style";
import { useUserController } from '../controllers/UserController';
import Capa from '../assets/Banner/Capa.png';
import Footer from '../components/Footer'; 

// Importe as imagens locais

const Home = () => {
  const { users, addNewUser, changeInputUserName, changeInputSenha } = useUserController();

  return (
    
    <Container>
      <h1>
        <p></p>
          </h1>
      <CoverImage alt="capa" src={Capa} />
          <tb>
          <p></p>
          </tb>
            <Footer/>
    </Container>
    
  );
};

export default Home;
