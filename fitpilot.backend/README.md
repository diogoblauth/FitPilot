# FitPilot

## O que é?

Plataforma SaaS para personal trainers autônomos gerenciarem alunos, treinos, evolução, agenda e financeiro em um só lugar.

## Como rodar

1. Subir o banco postgres presente no docker-compose.yml com o comando `docker compose up -d`
2. Criar `.env` na raiz com as envs
3. Baixar as dependências com o comando `npm i`
4. Rodar as migrations com o comando `npx prisma migrate dev`
5. Rodar o projeto com o comando `npm run dev`
