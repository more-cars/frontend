import express from "express"
import {OpenAPIBackend} from "openapi-backend"
import adminRoutes from "./adminRoutes.ts"
import {getResponseMock} from "./getResponseMock"

const api = new OpenAPIBackend({
    definition: __dirname + "/../api-specification/more-cars.openapi.json",
    handlers: {
        notImplemented: (context, req, res) => {
            const mock = getResponseMock(context, req)

            if (mock === null) {
                res.status(404)
                    .json(context.api.mockResponseForOperation(context.operation.operationId as string, {code: 404}).mock)
            }

            res.status(200).json(mock)
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
