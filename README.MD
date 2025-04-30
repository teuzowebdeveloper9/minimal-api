
# Minimal API - Node.js Fastify

## O que é uma Minimal API?
Minimal APIs são uma abordagem para criar APIs de forma simples e direta, com o mínimo de configuração e código possível. Elas focam em entregar funcionalidades essenciais, facilitando o desenvolvimento rápido e a manutenção do projeto.

## Sobre esta API
Esta API foi desenvolvida utilizando o framework [Fastify](https://www.fastify.io/) no Node.js. Ela fornece endpoints para consulta de times e pilotos de Fórmula 1, permitindo buscar todos os times, todos os pilotos, ou buscar por ID.

### Endpoints disponíveis

- `GET /teams` — Retorna todos os times.
- `GET /teams/:id` — Retorna um time específico pelo ID.
- `GET /drivers` — Retorna todos os pilotos.
- `GET /drivers/:id` — Retorna um piloto específico pelo ID.

### Exemplo de resposta
```json
{
  "teams": [
    { "id": 1, "name": "Red Bull Racing" },
    ...
  ]
}
```

## Sobre "Minimal APIs false sobre cor"
Não existe relação entre minimal APIs e "cor". Caso encontre informações dizendo que minimal APIs mudam cor de interface ou têm relação com design visual, isso é falso. Minimal APIs são apenas uma forma simplificada de criar rotas e lógica de backend, sem influenciar diretamente a aparência do frontend.

## Por que usar Fastify?
- **Performance:** Fastify é um dos frameworks mais rápidos para Node.js.
- **Simplicidade:** Permite criar rotas e middlewares de forma simples.
- **Extensível:** Suporta plugins e integrações facilmente.
- **Tipagem:** Suporte a TypeScript e validação de tipos.

## Como rodar o projeto
1. Instale as dependências:
   ```bash
   npm install
   ```
2. Inicie o servidor:
   ```bash
   npm start
   ```
3. Acesse os endpoints em `http://localhost:3000`

---

Obrigado por utilizar este projeto!

---

Feito com esforço {💻} por teuzowebdeveloper9 
