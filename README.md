# 🐣 Tamagotchi Virtual

Um **Tamagotchi virtual fullstack** desenvolvido com **React**, **Node.js** e **MongoDB Atlas**, onde o usuário pode criar e cuidar de um bichinho virtual com atributos dinâmicos como **fome**, **felicidade** e **energia**.

O projeto foi containerizado com **Docker**, permitindo executar toda a aplicação facilmente em qualquer ambiente.

---

# 🌐 Demonstração

Frontend  
https://tamagochi-frontend.onrender.com

Backend API  
https://tamagochi-backend.onrender.com

---

# 🚀 Tecnologias Utilizadas

## Backend
- Node.js
- Express
- MongoDB Atlas
- Mongoose
- JSON Web Token (JWT)
- bcrypt
- dotenv

## Frontend
- React
- Axios
- Context API + Reducer

## DevOps
- Docker
- Containers para virtualização
- Deploy na plataforma Render

---

# 📦 Funcionalidades

- 🧑 Cadastro de usuário
- 🔐 Login com autenticação JWT
- 🐾 Criação de um Tamagotchi único por usuário
- 🍗 Alimentar o Tamagotchi
- 🎮 Interagir com o pet virtual
- ❤️ Sistema de atributos dinâmicos
  - fome
  - felicidade
  - energia
- ⏳ Atributos mudam automaticamente com o tempo
- 💾 Persistência de dados com MongoDB Atlas

---

# 🏗 Arquitetura da Aplicação

A aplicação segue uma arquitetura simples de três camadas:

```
React (Frontend)
↓
Node.js + Express API
↓
MongoDB Atlas
```

Quando executada com Docker:

```
Frontend Container
↓
Backend Container
↓
MongoDB Atlas
```

---

# 🐳 Executando com Docker

Clone o repositório:

```bash
git clone https://github.com/seu-usuario/tamagochi.git
cd tamagochi
```

Suba os containers:

```bash
docker compose up --build
```

A aplicação ficará disponível em:

```
Frontend → http://localhost:5173
Backend  → http://localhost:3000
```

---

# ⚙️ Variáveis de Ambiente

Crie um arquivo `.env` dentro da pasta `backend`.

Exemplo:

```env
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
EMAIL_USER=your_email
EMAIL_PASS=your_email_password
```

---

# 📂 Estrutura do Projeto

```
tamagochi
│
├── backend
│   ├── src
│   │   ├── controllers
│   │   ├── models
│   │   ├── routes
│   │   └── server.js
│   │
│   ├── package.json
│   └── Dockerfile
│
├── frontend
│   ├── src
│   ├── package.json
│   └── Dockerfile
│
└── docker-compose.yml
```

---

# 📚 Aprendizados

Durante o desenvolvimento deste projeto foram explorados conceitos como:

- autenticação com JWT
- criptografia de senha
- integração frontend ↔ backend
- gerenciamento de estado no React
- modelagem de dados com MongoDB
- containerização com Docker
- deploy de aplicações fullstack

---

# 🛠 Melhorias Futuras

- sistema de níveis para o Tamagotchi
- sistema de itens e inventário
- animações do pet
- notificações quando atributos estiverem baixos
- ranking de usuários

---

# 📄 Licença

Este projeto foi desenvolvido para fins de estudo e portfólio.
