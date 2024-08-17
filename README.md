# Chatbot Backend

Este projeto é uma aplicação backend desenvolvida para servir como a API de um chatbot. A aplicação utiliza uma arquitetura baseada em Domain-Driven Design (DDD) e princípios SOLID para garantir modularidade, escalabilidade e fácil manutenção. O backend integra-se com a API da OpenAI para gerar respostas de chat, implementa um sistema de cache para otimizar as respostas e aplica um filtro de profanidade para assegurar a qualidade das interações.

## Índice
- [Funcionalidades](#funcionalidades)
- [Instalação](#instalação)
- [Configuração](#configuração)
- [Estrutura do Projeto](#estrutura-do-projeto)
- [Testes](#testes)
- [Tecnologias Utilizadas](#tecnologias-utilizadas)

## Funcionalidades

- **Geração de Respostas:** Integração com a API da OpenAI para gerar respostas de chat.
- **Sistema de Cache:** Implementa um cache para armazenar e reutilizar respostas, melhorando a performance.
- **Filtro de Profanidade:** Aplica um filtro para remover palavras ofensivas das mensagens enviadas pelos usuários.
- **Arquitetura DDD:** Organização do código em camadas seguindo as práticas do Domain-Driven Design.
- **Testes Automatizados:** Inclui testes unitários e end-to-end (E2E) para garantir a robustez da aplicação.

## Instalação

Siga os passos abaixo para configurar o projeto localmente:

1. Clone o repositório:

    ```bash
    git clone https://github.com/seu-usuario/chatbot-backend.git
    cd chatbot-backend
    ```

2. Instale as dependências:

    ```bash
    npm install
    ```

3. Atualize o arquivo `.env` com as suas credenciais:

    ```dotenv
    OPENAI_API_KEY=suaApiKey
    PORT=3000
    ```

4. Inicie a aplicação:

    ```bash
    npm start
    ```

A aplicação estará disponível em `http://localhost:3000`.

## Configuração

As principais configurações são gerenciadas através do arquivo `.env`. Certifique-se de configurar corretamente as variáveis de ambiente, especialmente a chave de API da OpenAI. Por padrão é usada uma chave pública.

## Estrutura do Projeto

A estrutura do projeto foi organizada de acordo com as melhores práticas de Domain-Driven Design e SOLID:

```plaintext
├── src
│   ├── application
│   │   └── use-cases
│   │       └── SendMessageUseCase.ts
│   ├── domain
│   │   └── entities
│   │       └── ChatMessage.ts
│   ├── infrastructure
│   │   ├── cache
│   │   │   └── CacheRepository.ts
│   │   └── services
│   │       ├── OpenAIService.ts
│   │       └── ProfanityFilterService.ts
│   ├── presentation
│   │   └── controllers
│   │       └── ChatController.ts
│   ├── shared
│   │   └── kernel.ts
│   └── index.ts
├── tests
│   ├── e2e
│   │   └── src
│   │       └── presentation
│   │           └── controllers
│   │               └── ChatController.e2e.test.ts
│   └── unit
│       └── src
│           └── infrastructure
│               ├── cache
│               │   └── CacheRepository.test.ts
│               └── services
│                   ├── OpenAIService.test.ts
│                   └── ProfanityFilterService.test.ts
├── .env
├── package.json
└── tsconfig.json
```

## Camadas do Projeto

- **Application:** Contém os casos de uso da aplicação, que coordenam as interações entre as diferentes partes do sistema.
- **Domain:** Define as entidades principais e a lógica de domínio.
- **Infrastructure:** Contém as implementações técnicas, como repositórios, serviços externos e adaptadores.
- **Presentation:** Gerencia a entrada e saída da aplicação, como os controladores que lidam com as requisições HTTP.
- **Shared:** Contém elementos compartilhados como a injeção de dependências (kernel).

## Testes
Os testes são organizados em duas categorias principais:

- **Unit Tests:** Validam o comportamento isolado de pequenas partes do sistema, como serviços e repositórios.
- **E2E Tests:** Validam o funcionamento da aplicação como um todo, desde a entrada até a saída, simulando cenários reais.

### Executando os Testes
Para executar todos os testes:

```bash
npm test
```

Você pode também rodar apenas os testes unitários ou e2e:

- **Unitários:** npx vitest run tests/unit
- **E2E:** npx vitest run tests/e2e

## Tecnologias Utilizadas

- **Node.js:** Ambiente de execução JavaScript.
- **TypeScript:** Superset do JavaScript que adiciona tipagem estática.
- **Express:** Framework web para Node.js.
- **Axios:** Cliente HTTP para realizar requisições à API da OpenAI.
- **Node-Cache:** Biblioteca para implementação de cache na memória.
- **Obscenity:** Biblioteca para filtragem de palavras ofensivas.
- **Vitest:** Framework de testes para JavaScript/TypeScript.
- **Domain-Driven Design (DDD):** Abordagem de design de software.
- **SOLID Principles:** Princípios para design de software orientado a objetos.
