import express from "express"
import {OpenAPIBackend} from "openapi-backend"
import adminRoutes from "./adminRoutes.ts"
import {mockState} from "./mockState"

const api = new OpenAPIBackend({
    definition: __dirname + "/../api-specification/more-cars.openapi.json",
    handlers: {
        notImplemented: (c, req, res) => {
            const status = 200
            const mock = c.api.mockResponseForOperation(c.operation.operationId as string, {code: Number(status)})

            console.log(mockState)

            res.status(status).json(mock.mock)
        },
    },
})
api.init()

const mockApiServer = express()
mockApiServer.use(express.json())
mockApiServer.use(adminRoutes)

// @ts-ignore
mockApiServer.use((req, res) => api.handleRequest(req, req, res))

mockApiServer.listen(3000, () =>
    console.log("Mock server running on http://localhost:3000")
)
