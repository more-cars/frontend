import http from 'http'
import {app} from "./app"

startHttpServer()

function startHttpServer() {
    const HTTP_PORT = 4000

    const httpServer = http.createServer(app)
    httpServer.listen(HTTP_PORT, () => {
        console.log(`[HTTP] More Cars Frontend started and running at http://localhost:${HTTP_PORT}`)
        console.log(`[HTTP] Alias http://frontend.more-cars.internal:${HTTP_PORT}`)
    })
}
