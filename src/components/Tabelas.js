//src\components\Tabelas.js
import React, { useState } from "react";
import {
  TableContainer,
  TableRow,
  TableCell,
  TableCellInput,
  TableCellButton,
  Button,
} from "../style";
import { useUserController } from "../controllers/UserController";
import { useNavigate } from "react-router-dom";
import { registerUser } from "../service/registerUser/registerUser"

const CadastroForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    cpf: "",
    age: null,
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleInputChange = (event) => {
    let { name, value } = event.target;
    value = name === "age" ? Number(value) : value;
    setFormData({ ...formData, [name]: value });
  };

  const handleConfirmClick = async () => {
    const emptyFields = Object.entries(formData).filter(
      ([key, value]) => value === ""
    );

    if (emptyFields.length) {
      alert("Por favor, preencha todos os campos antes de confirmar.");
      return;
    }

    try {
      const response = await registerUser(formData);
      console.log(response);
      alert("Usuário criado com sucesso");
      navigate("/home");
    } catch (err) {
      alert("Error ao registrar novo usuário. Por favor, tente novamente mais tarde!")
      console.log(err);
    }
  };

  return (
    <TableContainer>
      <TableRow>
        <TableCell>
          <TableCellInput
            name="name"
            onChange={handleInputChange}
            placeholder="Nome"
            type="text"
          />
        </TableCell>
        <TableCell>
          <TableCellInput
            name="age"
            onChange={handleInputChange}
            placeholder="Idade"
            type="text"
          />
        </TableCell>

        <TableCell>
          <TableCellInput
            name="cpf"
            onChange={handleInputChange}
            placeholder="CPF"
            type="text"
          />
        </TableCell>
      </TableRow>
      <TableRow>
      <TableCell>
          <TableCellInput
            name="email"
            onChange={handleInputChange}
            placeholder="e-mail"
            type="email"
          />
        </TableCell>
        <TableCell>
          <TableCellInput
            name="password"
            onChange={handleInputChange}
            placeholder="Senha"
            type="password"
          />
        </TableCell>
        <TableCell>
            <TableCellButton onClick={handleConfirmClick}>
              Confirmar
            </TableCellButton>
        </TableCell>
      </TableRow>
    </TableContainer>
  );
};

export default CadastroForm;
