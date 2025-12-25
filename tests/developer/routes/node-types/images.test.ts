import {describe, expect, test, vi} from "vitest"
import request from "supertest"
import {app} from "../../../../src/app"
import {displayAllNodes} from "../../../../src/controllers/node-types/images/displayAllNodes"
import {displayNode} from "../../../../src/controllers/node-types/images/displayNode"

describe('Images', () => {
    test('Show Node Overview Page', async () => {
        vi.mock("../../../../src/controllers/node-types/images/displayAllNodes", () => ({
            displayAllNodes: vi.fn((req, res) => res.status(200).end())
        }))

        await request(app)
            .get('/images')

        expect(displayAllNodes)
            .toHaveBeenCalledTimes(1)
    })

    test('Show Node Detail Page', async () => {
        vi.mock("../../../../src/controllers/node-types/images/displayNode", () => ({
            displayNode: vi.fn((req, res) => res.status(200).end())
        }))

        await request(app)
            .get('/images/999')

        expect(displayNode)
            .toHaveBeenCalledTimes(1)
    })
})
