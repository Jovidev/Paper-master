import React from 'react';
import { Container, H1, Image, Input, InputLabel, Button, ContainerItens, User, CoverImage, ContainerPrincipal, ContainerProductItens } from "../style";
import { useUserController } from '../controllers/UserController';
import Capa from '../assets/Banner/Capa.png';
import Footer from '../components/Footer'; 
import Overview from '../constantes/Overview';
// Importe as imagens locais

const Sobre = () => {
  const { users, addNewUser, changeInputUserName, changeInputSenha } = useUserController();

  return (
    
    <Container>
      <h1>
        <p></p>
          </h1>
          <ContainerItens>

            <H1>Sobre nós</H1>
            <div>
            <h3 dangerouslySetInnerHTML={{ __html: Overview }} />
            </div>
          
          
          </ContainerItens>
          <tb>
          <p></p>
          </tb>
          
    </Container>
    
  );
};

export default Sobre;
