# 🎉 Event Buddy

Aplicação móvel desenvolvida em **React Native** com suporte ao **Firebase** que permite a utilizadores autenticados explorar e gerir eventos locais.

## 📱 Descrição Geral

O **Event Buddy** é uma plataforma para descoberta e gestão de eventos como concertos, workshops, feiras e conferências. A app permite:

- Visualização de eventos disponíveis
- Acesso a detalhes completos de cada evento
- Adicionar eventos aos favoritos
- Inscrição em eventos
- Consulta de perfil pessoal com eventos salvos e dados do utilizador

Todos os dados são armazenados no **Firebase Firestore**, e a autenticação é feita através do **Firebase Authentication**. A app oferece uma experiência fluida com **persistência de sessão** e navegação intuitiva.

---

## ✅ Funcionalidades

### 🔐 Autenticação

- Registo de novos utilizadores com e-mail e password
- Login seguro com validação
- Logout com limpeza do estado da sessão
- Persistência de sessão ao reabrir a app

### 🔗 Integração com Firestore

- Coleção `events` com os seguintes campos:
  - `title`: Título do evento
  - `description`: Descrição detalhada
  - `location`: Localização (cidade, sala, coordenadas)
  - `datetime`: Data e hora
  - `imageUrl`: Link para imagem do evento
  - `participants`: Array com os UIDs dos utilizadores inscritos

- Documento `users/{uid}` com:
  - Campo `favourites`: Array com os IDs dos eventos favoritos

### 🧭 Navegação

- **React Navigation** com:
  - **Bottom Tabs Navigator** para:
    - `Home` – Explorar eventos
    - `Favoritos` – Ver eventos salvos
    - `Perfil` – Ver conta e logout
  - **Stack Navigator** embutido na tab `Home` para navegar entre lista e detalhes

---

## 📋 Funcionalidade dos Ecrãs

### 🏠 Home

- Lista de eventos (ordenados por data)
- Cards com:
  - Imagem
  - Título
  - Data formatada
  - Ícone para favoritar
- Card clicável leva à página de detalhes

### 📄 Detalhes do Evento

- Mostra:
  - Imagem em destaque
  - Título e descrição
  - Data e hora
  - Localização (formato legível)
  - Total de participantes
- Botões:
  - Participar ou cancelar inscrição
  - Adicionar ou remover dos favoritos

### ❤️ Favoritos

- Lista dos eventos que o utilizador adicionou como favorito
- Mesma estrutura visual dos cards da Home

### 👤 Perfil

- Mostra e-mail e (opcionalmente) UID do utilizador
- Botão para logout

---

## 🛠️ Tecnologias Utilizadas

- **React Native** (via Expo)
- **React Navigation**
- **Firebase Authentication**
- **Firebase Firestore**
- **Toastify React Native** (notificações)
- **Expo Icons (AntDesign)**

---

## 📂 Estrutura

/screens
├── Login.js
├── Signup.js
├── Home.js
├── EventDetails.js
├── Favourites.js
├── Perfil.js
└── ResetPassword.js

/context
└── AuthContext.js

/assets
└── styles.js

/services
└── FirebaseAuth.js

FirebaseConfig.js
App.js
README.md
package.json

---

## 📝 Observações

- A variável firebaseConfig dentro do FirebaseConfig.js deverá ser adicionada com as credenciais do config do firebase
- O Firestore deve conter permissões adequadas para leitura/escrita conforme o desenvolvimento.
