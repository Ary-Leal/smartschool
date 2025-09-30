// Listagem de Alunos  

import React, { useEffect, useState } from 'react';
import api from '../services/api'; // Importa a configuração da API

const StudentList = () => {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    // Função para buscar os alunos da API
    const fetchStudents = async () => {
      try {
        const response = await api.get('/'); // Ajuste o endpoint conforme necessário
        setStudents(response.data);
      } catch (error) {
        console.error('Erro ao buscar alunos:', error);
      }
    };

    fetchStudents();
  }, []);

  return (
    <div>
      <h2>Lista de Alunos</h2>
      <ul>
        {students.map((student) => (
          <li key={student.id}>
            {student.name} - {student.grade}        
          </li>
        ))} 
        </ul>
    </div>
  );
};

export default StudentList;