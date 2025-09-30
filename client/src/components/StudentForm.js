//Cadastro  Ediçao  de Alunos       

import React, { useState } from 'react';
import api from '../services/api'; // Importa a configuração da API     
import { useHistory } from 'react-router-dom'; // Importa o hook useHistory para navegação

const StudentForm = ({ student }) => {
  const [name, setName] = useState(student ? student.name : '');
  const [email, setEmail] = useState(student ? student.email : '');
  const [age, setAge] = useState(student ? student.age : '');
  const [grade, setGrade] = useState(student ? student.grade : '');
  const history = useHistory(); // Hook para navegação

  const handleSubmit = async (e) => {
    e.preventDefault();
    const studentData = { name, email, age, grade };

    try {
      if (student) {
        // Se o aluno já existe, atualiza os dados
        await api.put(`/students/${student.id}`, studentData);
      } else {
        // Se o aluno não existe, cria um novo
        await api.post('/students', studentData);
      }
      history.push('/students'); // Redireciona para a lista de alunos após o envio
    } catch (error) {
      console.error('Erro ao salvar o aluno:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Nome:</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Email:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Idade:</label>
        <input
          type="number"
          value={age}
          onChange={(e) => setAge(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Série:</label>
        <input
          type="text"
          value={grade}
          onChange={(e) => setGrade(e.target.value)}
          required
        />
      </div>
      <button type="submit">{student ? 'Atualizar' : 'Cadastrar'}</button>
    </form>
  );
};

export default StudentForm;
//Cadastro  Ediçao  de Alunos   

  