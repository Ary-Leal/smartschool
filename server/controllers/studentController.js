/* Logica CRUD */

const Student = require("../models/Student");

// Criar aluno
exports.createStudent = async (req, res) => {
  try {
    // CORREÇÃO: Usa 'newStudent' para a instância para evitar conflito com o Model 'Student'
    const newStudent = new Student(req.body);
    
    await newStudent.save();
    
    res.status(201).json(newStudent);
  } catch (err) {
    // Erro 11000 geralmente indica duplicidade em campo 'unique' como o email
    if (err.code === 11000) {
        return res.status(400).json({ error: "Email já cadastrado." });
    }
    res.status(400).json({ error: err.message });
  }
};

// Listar todos os alunos
exports.getAllStudents = async (req, res) => {
  try {
    const students = await Student.find();
    res.json(students);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Buscar aluno por ID
exports.getStudentById = async (req, res) => {
  try {
    // CORREÇÃO: Variável 'studense' alterada para 'student'
    const student = await Student.findById(req.params.id);
    
    if (!student) {
        return res.status(404).json({ error: "Aluno não encontrado" });
    }
    
    res.json(student);
  } catch (err) {
    res.status(500).json({ error: "ID inválido ou erro de servidor." });
  }
};

// Atualizar aluno
exports.updateStudent = async (req, res) => {
  try {
    // CORREÇÃO: Variável 'studense' alterada para 'student'
    const student = await Student.findByIdAndUpdate(req.params.id, req.body, {
      new: true, // Retorna o documento atualizado
      runValidators: true // Garante que as regras do Schema sejam aplicadas na atualização
    });
    
    if (!student) {
        return res.status(404).json({ error: "Aluno não encontrado" });
    }
    
    res.json(student);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Deletar aluno
exports.deleteStudent = async (req, res) => {
  try {
    // CORREÇÃO: Variável 'studense' alterada para 'student'
    const student = await Student.findByIdAndDelete(req.params.id);
    
    if (!student) {
        return res.status(404).json({ error: "Aluno não encontrado" });
    }
    
    res.json({ message: "Aluno deletado com sucesso" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

