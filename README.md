# 🎓 SmartSchool: Plataforma de Gestão Inteligente 🛡️  
> **Educação + Tecnologia + Segurança** em uma solução moderna e cloud-native.

O **SmartSchool** é uma solução **Full Stack** construída sob o princípio **Security-First**, onde **segurança** e **automação** não são extras, mas **pilares arquitetônicos**.  

💡 Nosso objetivo é simples: **uma plataforma de gestão para escolas inteligentes, segura e escalável.**

---

## ⚡ O que torna o SmartSchool diferente?
- **Segurança Inerente**: Autenticação forte com **JWT**.  
- **Qualidade de Código**: Testes automatizados com **Jest** e **React Testing Library**.  
- **Entrega Automatizada**: Pipeline de **CI/CD** com GitHub Actions.  
- **Cloud-Native**: Arquitetura moderna pronta para escalar.  

---

## ⚙️ Stack Tecnológica (Moderna & Segura)
- **Backend / API**: Node.js + Express  
- **Banco de Dados**: MongoDB (Mongoose)  
- **Segurança**: JWT + Bcrypt  
- **Frontend**: React.js  
- **Qualidade**: Jest + React Testing Library  
- **DevOps**: GitHub Actions para CI/CD  

---

## 🔒 Pilares de Segurança
Segurança é o coração do **SmartSchool**:  

### 🔑 Funcionalidades de Segurança
- **Tokens JWT**: Identidade e tempo de sessão controlados.  
- **Criptografia**: Senhas protegidas com **bcryptjs**.  
- **Controle de Acesso**: Autorização baseada em roles (**admin, teacher**).  
- **Proteção de Rotas**: Middleware `auth.js` valida tokens em tempo real.  

### 📡 Endpoints de Autenticação
- `POST /api/auth/register`: cria um novo usuário com senha criptografada.  
- `POST /api/auth/login`: autentica e retorna Token JWT.  

---

## 🚀 DevSecOps & Qualidade  
> **Shift-Left Security**: segurança e qualidade desde o início.  

### 🧪 Testes
- **Backend (Jest)**: controllers, middlewares, JWT.  
- **Frontend (RTL)**: componentes críticos como login e cadastro.  

### ⚙️ Pipeline CI/CD
- **Trigger**: todo push ou pull request.  
- **Fases**: testes + análise estática de código.  
- **Roadmap**: adicionar CD para deploy em staging/produção (**Vercel**).  

---

## 💻 Configuração e Inicialização

### 🔧 Pré-requisitos
- Node.js v18+ e npm  
- Instância MongoDB ativa  

### 1. Variáveis de Ambiente
Crie um arquivo `.env` em `server/` com:  
```env

2. Inicialização

Backend (API)

cd server
npm install
npm run dev
# API rodando em http://localhost:5000


Frontend (Client)

cd client
npm install
npm start
# UI rodando em http://localhost:3000
🔜 Evolução da Plataforma

✨ Próximas Features:

UI/UX aprimorada com TailwindCSS / Material-UI.

Paginação e Filtros Avançados para grandes volumes de dados.

AuthContext no React: gerenciamento global de usuário e token.

🤝 Contribuição

Quer ajudar a transformar escolas em SmartSchools?
Contribua com código, ideias e feedbacks! 🚀

📢 Nota Final

O SmartSchool nasceu para unir Educação + Segurança + Tecnologia, criando uma experiência confiável tanto para professores quanto para alunos.

🔐 Porque segurança na educação não é opção, é necessidade.



