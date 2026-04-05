# FitPilot Backend

Backend API para FitPilot - Sistema de Gerenciamento de Treinos

## 🚀 Início Rápido

### Instalação de dependências
\`\`\`bash
npm install
\`\`\`

### Variáveis de Ambiente
Configure o arquivo \`.env\` com:
- \`DATABASE_URL\` - URL de conexão PostgreSQL
- \`JWT_SECRET\` - Chave secreta para JWT
- \`REDIS_URL\` - URL de conexão Redis
- \`NODE_ENV\` - Ambiente (development/production)
- \`PORT\` - Porta do servidor

### Iniciar Serviços
\`\`\`bash
# Inicie PostgreSQL e Redis via Docker
docker-compose up -d
\`\`\`

### Rodar em Desenvolvimento
\`\`\`bash
npm run dev
\`\`\`

O servidor reiniciará automaticamente ao detectar alterações em \`src/\` ou \`prisma/\`

### Banco de Dados
\`\`\`bash
# Executar migrations
npm run db:migrate

# Gerar Prisma Client
npm run db:generate
\`\`\`

## 📁 Estrutura do Projeto

\`\`\`
src/
├── modules/           # Módulos da aplicação
│   ├── auth/         # Autenticação
│   ├── students/     # Alunos
│   └── workouts/     # Treinos
├── shared/
│   ├── middleware/   # Middlewares
│   ├── utils/        # Utilitários
│   └── constants/    # Constantes
├── config/           # Configurações
├── app.js            # Instância Fastify
├── server.js         # Entrada do servidor
└── routes.js         # Configuração de rotas
\`\`\`

## 🔌 Tecnologias

- **Fastify** - Framework web rápido
- **Prisma** - ORM para banco de dados
- **PostgreSQL** - Banco de dados relacional
- **Redis** - Cache e fila de jobs
- **JWT** - Autenticação
- **BullMQ** - Processamento de jobs

## 📝 Endpoints

### Health Check
- \`GET /health\` - Verificar status da API

### Autenticação (Em desenvolvimento)
- \`POST /api/auth/login\`
- \`POST /api/auth/register\`

### Alunos (Em desenvolvimento)
- \`GET /api/students\`
- \`GET /api/students/:id\`

### Treinos (Em desenvolvimento)
- \`GET /api/workouts\`
- \`GET /api/workouts/:id\`
