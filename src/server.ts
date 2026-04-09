import http from 'http'
import {app} from "./app"

const PORT = process.env.FRONTEND_PORT || 4000
const server = http.createServer(app)

server.listen(PORT, () => {
    console.log(`🟢 More Cars Frontend started`)
    console.log(`🟢 Available at http://localhost:${PORT}`)
    console.log(`🟢 Alias URL (if configured): http://frontend.more-cars.internal:${PORT}`)
})

async function shutdown(signal: string) {
    console.log(`🟡 Received signal ${signal}. Shutting down...`)

    server.close(() => {
        console.log('🟥 Application terminated')
        process.exit(0)
    })
}

process.on('SIGINT', shutdown)
process.on('SIGTERM', shutdown)
