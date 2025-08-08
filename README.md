<div style="display: flex; flex-direction: column; text-align: center;">
    <h1>Sujeito Pizza - Mobile</h1>
    <img style="max-width: 1024px; margin: auto;" src="assets/github/capa-projeto.png" alt="capa do projeto">
</div>

## Sumário

- [\[pizzaria-mobile\]](#)
  - [Sumário](#sumário)
  - [Introdução](#Introdução)
  - [Descrição Geral](#descrição-geral)
  - [Tecnologias Usadas](#tecnologias-usadas)
  - [Princípais funcionalidades](#princípais-funcionalidades)
  - [Snapshots](#snapshots)
  - [Pré Requisitos](#pré-requisitos)
  - [Como Executar o Projeto](#como-executar-o-projeto)
  - [Links Úteis](#links-úteis)
  - [Contato](#contato)

## Introdução

Este repositório contém o app mobile do projeto [**Sujeito Pizza**](https://github.com/filipe-santana-da-silva/pizzaria-frontend), um sistema de atendimento para pizzarias. O aplicativo mobile é responsável por criar os pedidos e gerenciar atendimento. O frontend e backend estão separados em outros repositórios. O link para download do App está disponível na aba [Links Úteis](#links-úteis).

## Descrição Geral

O **Sujeito Pizza** é um sistema completo para pizzarias, onde:
- **Garçons** usam um aplicativo mobile para realizar pedidos e gerenciar atendimentos.
- **Cozinha** usa uma interface web para visualizar e preparar os pedidos.
- **Backend** gerencia toda a lógica de negócios, incluindo pedidos, produtos, autenticação e integração com serviços externos (como Cloudinary para upload de imagens).

Este repositório é dedicado ao mobile, desenvolvido em **React Native e TypeScript** e gerado o App com **Expo EAS**.

---

## Tecnologias Usadas

![React Native](https://img.shields.io/badge/React_Native-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Typescript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)&nbsp;
![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)

- **Linguagem**: TypeScript
- **Framework**: React-Native
- **Ferramentas de Desenvolvimento**:
  - Expo
  - Axios
  - react-native-async-storage (mantem sessão do usuário)

---

## Princípais funcionalidades

### 1. **Pedidos**
- **Criar pedidos em rascunho**: Os garçons podem iniciar pedidos e adicionar itens antes de enviar para a cozinha.
- **Adicionar itens ao pedido**: Cada pedido pode conter vários produtos (pizzas, bebidas, etc.).
- **Enviar para a cozinha**: Quando o pedido estiver pronto, ele é enviado para a cozinha para preparo.

### 2. **Autenticação**
- Mantem a sessão do usuário logado no sistema.
- Proteção de rotas para usuários não autenticados.

---

## Snapshots


### Login 

<img src="assets/github/login.jpg" alt="detalhes do pedido" width="280">

### Abrir Mesa

<img src="assets/github/abri-mesa.jpg" alt="detalhes do pedido" width="280">

### Items Pedido (Vazio)

<img src="assets/github/items-pedido-vazio.jpg" alt="detalhes do pedido" width="280">

### Items Pedido

<img src="assets/github/items-pedido.jpg" alt="detalhes do pedido" width="280">

### Finalização

<img src="assets/github/finalizacao-pedido.jpg" alt="detalhes do pedido" width="280">

## Como Executar o Projeto

### Pré-requisitos
- Node.js (v18 ou superior)
- Android Studio (Emulador Android 10 ou superior com Play Store)

### Passos para Executar

1. **Clone o repositório**:
    ```bash
    git clone https://github.com/filipe-santana-da-silva/pizzaria-mobile
    cd pizzaria-mobile
    ```

2. **Instale as dependências**:
    ```bash
    npm install
    ```

3. Execute o projeto
    ```bash
    npx expo start
    ```

4. **Acesse via emulador ou android**:
    - Emulador: Digite a tecla "A" e será instalado o Expo Go no emulador, o aplicativo será aberto automaticamente.
    - Android: Baixe o Expo Go no seu dispositivo Android e leia o QR Code apresentando no prompt de comando.

## Links Úteis

- Repositório do Backend: [https://github.com/filipe-santana-da-silva/pizzaria-backend](https://github.com/filipe-santana-da-silva/pizzaria-backend)
- Repositório do Frontend Web: [https://github.com/filipe-santana-da-silva/pizzaria-frontend](https://github.com/filipe-santana-da-silva/pizzaria-frontend)
- Download do App (Expo EAS): [https://expo.dev/accounts/filipe49/projects/mobile](https://expo.dev/accounts/filipe49/projects/mobile)

## Contato

Para obter mais informações, entre em contato comigo em:

- Email: filipesantana859@gmail.com
- GitHub: https://github.com/filipe-santana-da-silva
