import 'dotenv/config'
import app from './app.js'
const PORT = Number(process.env.PORT) || 3000

const server = app.listen(PORT, () => {
  console.log(`🚀 FitPilot rodando na porta ${PORT}`)
})

server.on('error', (error) => {
  if (error.code === 'EADDRINUSE') {
    console.error(`Porta ${PORT} já está em uso.`)
    process.exit(1)
    return
  }

  console.error('Erro ao iniciar servidor:', error)
  process.exit(1)
})
