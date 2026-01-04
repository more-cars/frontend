import express from "express"
import {OpenAPIBackend} from "openapi-backend"
import adminRoutes from "./adminRoutes.ts"
import {applyMockState} from "./applyMockState"

const api = new OpenAPIBackend({
    definition: __dirname + "/../api-specification/more-cars.openapi.json",
    handlers: {
        notImplemented: (c, req, res) => {
            const status = 200
            const operationId = c.operation.operationId || 'UNKNOWN'
            const baseMock = c.api.mockResponseForOperation(operationId, {code: Number(status)}).mock
            const finalMock = applyMockState(baseMock, operationId)

            res.status(status).json(finalMock)
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
