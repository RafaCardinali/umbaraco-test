# UmBaraco Teste

Este é um projeto de uma aplicação de cadastro de usuário, desenvolvida com React e TypeScript. Ele integra com um backend simples fornecido por um arquivo chamado db.json, permitindo a adição, exclusão, alteração e listagem (CRUD) de todos os cadastros possíveis. Desenvolvido em Mobile First para melhor responsividade.

## Tecnologias Utilizadas

- **React**: Utilizado para construir a interface de usuário da aplicação.
- **TypeScript**: Utilizado para adicionar tipagem estática ao JavaScript, melhorando a escalabilidade e manutenibilidade do código.
- **React Router**: Utilizado para a navegação entre diferentes páginas da aplicação.
- **React Icons**: Fornece um conjunto de ícones para uso na aplicação.
- **Json Server**: Fornecendo o backend simulado a partir de um arquivo JSON.
- **CSS Flexbox**: Utilizado para criar layouts responsivos e flexíveis.
- **Axios**: Biblioteca para fazer requisições HTTP para o backend.
- **Jest**: Framework de teste JavaScript utilizado para testes de unidades e integração.

## Funcionalidades

- Adicionar novo usuário.
- Listar todos os usuários cadastrados.
- Alterar dados de um usuário existente.
- Excluir usuário.
- Layout responsivo para dispositivos móveis.
- Interface de usuário intuitiva.

## Instalação

1. Clone o repositório no seu terminal com o comando: `git clone https://github.com/RafaCardinali/user-registration.git`.
2. Navegue até o diretório do projeto: `umbaraco-test`.
3. Execute `npm install` para instalar todas as dependências necessárias.
4. Depois de instaladas as dependências, abra dois terminais.
5. Execute em um dos terminais o comando `npm run start-api` para rodar o json-server.
6. Execute no outro terminal o comando `npm start` para rodar o frontend da aplicação. 
7. A aplicação será aberta automaticamente no seu navegador padrão. Se não abrir, acesse `http://localhost:3000` manualmente.
8. Para saber o coverage da aplicação execute o comando `npm run coverage`.
9. Em seguida, abra no seu navegador o arquivo `index.html` que vai ser criado na pasta `coverage` na raiz do projeto.